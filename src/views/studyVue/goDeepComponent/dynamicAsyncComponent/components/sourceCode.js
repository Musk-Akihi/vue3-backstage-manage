// 看下vue的异步组如何实现的

// implementation, close to no-op
// 外部调用API
function defineComponent(options) {
  return isFunction(options) ? { setup: options, name: options.name } : options
}

const isAsyncWrapper = (i) => !!i.type.__asyncLoader
// 主要实现在这里
function defineAsyncComponent(source) {
  // 统一参数
  if (isFunction(source)) {
    source = { loader: source }
  }
  // 我们平常使用的异步组件的主要参数
  const {
    loader,
    loadingComponent,
    errorComponent,
    delay = 200,
    timeout, // undefined = never times out
    suspensible = true,
    onError: userOnError
  } = source
  let pendingRequest = null
  let resolvedComp
  let retries = 0
  // 重新尝试load得到组件内容
  const retry = () => {
    retries++
    pendingRequest = null
    return load()
  }

  const load = () => {
    let thisRequest
    return (
      pendingRequest ||
      (thisRequest = pendingRequest =
        loader()
          .catch((err) => {
            // 失败场景
            err = err instanceof Error ? err : new Error(String(err))
            if (userOnError) {
              return new Promise((resolve, reject) => {
                const userRetry = () => resolve(retry())
                const userFail = () => reject(err)
                // 对应文档中的 失败捕获函数 用户自己决定如何使用
                userOnError(err, userRetry, userFail, retries + 1)
              })
            } else {
              throw err
            }
          })
          .then((comp) => {
            // 成功情况
            if (thisRequest !== pendingRequest && pendingRequest) {
              return pendingRequest
            }
            if (!comp) {
              warn(
                'Async component loader resolved to undefined. ' +
                  'If you are using retry(), make sure to return its return value.'
              )
            }
            // interop module default
            if (comp && (comp.__esModule || comp[Symbol.toStringTag] === 'Module')) {
              comp = comp.default
            }
            if (comp && !isObject(comp) && !isFunction(comp)) {
              throw new Error(`Invalid async component load result: ${comp}`)
            }
            // 闭包无处不在
            resolvedComp = comp
            return comp
          }))
    )
  }
  return defineComponent({
    __asyncLoader: load,
    // 异步组件统一名字
    name: 'AsyncComponentWrapper',
    // 组件有setup的走setup逻辑
    setup() {
      const instance = currentInstance
      // already resolved
      if (resolvedComp) {
        return () => createInnerComp(resolvedComp, instance)
      }
      const onError = (err) => {
        pendingRequest = null
        handleError(
          err,
          instance,
          13 /* ASYNC_COMPONENT_LOADER */,
          !errorComponent /* do not throw in dev if user provided error component */
        )
      }
      // suspense-controlled or SSR.
      // 对应文档中如果父组件是一个 suspense 那么只返回promise结果 其余的控制交给 suspense 处理即可
      if ((suspensible && instance.suspense) || false) {
        return load()
          .then((comp) => {
            return () => createInnerComp(comp, instance)
          })
          .catch((err) => {
            onError(err)
            return () =>
              errorComponent
                ? createVNode(errorComponent, {
                    error: err
                  })
                : null
          })
      }
      // loaded 是响应式的
      const loaded = ref(false)
      const error = ref()
      const delayed = ref(!!delay)
      // 对应文档中描述的2个控制
      if (delay) {
        setTimeout(() => {
          delayed.value = false
        }, delay)
      }
      if (timeout != null) {
        setTimeout(() => {
          if (!loaded.value && !error.value) {
            const err = new Error(`Async component timed out after ${timeout}ms.`)
            onError(err)
            error.value = err
          }
        }, timeout)
      }
      load()
        .then(() => {
          // promise成功返回后触发trigger导致组件更新 重新渲染组件 只不过此时我们已经得到组件内容了
          loaded.value = true
        })
        .catch((err) => {
          onError(err)
          error.value = err
        })
      // 返回的函数会被当做组件实例的 render 函数
      return () => {
        // render初始执行触发 loaded的依赖收集
        if (loaded.value && resolvedComp) {
          return createInnerComp(resolvedComp, instance)
        } else if (error.value && errorComponent) {
          return createVNode(errorComponent, {
            error: error.value
          })
        } else if (loadingComponent && !delayed.value) {
          return createVNode(loadingComponent)
        }
        // 返回undefined 会创建一个注释占位节点
      }
    }
  })
}
// 根据返回组件内容得到vnode 就可以正常按照组件vnode的方式渲染了 不再是一个promise了
function createInnerComp(comp, { vnode: { ref, props, children } }) {
  const vnode = createVNode(comp, props, children)
  // ensure inner component inherits the async wrapper's ref owner
  vnode.ref = ref
  return vnode
}

// 总结一下：vue3的异步组件写的非常清晰明了，十分好理解
