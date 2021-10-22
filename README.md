# vue3-backstage-manage

项目目的：

- 学习 vue3
- 保持 composition api 风格

## 前端启动

```
npm install
npm run serve
```

## 服务启动

```
node mock
```

### 打包

```
npm run build
```

### Lints and fixes files

```shell
    yarn  lint
```

```
- 配置文档
- eslint  https://cn.eslint.org/docs/rules
- prettierrc https://juejin.cn/post/6938687606687432740
```

### 提交自动检测：

```json
 "gitHooks": {
    "commit-msg": "commitlint -e $HUSKY_GIT_PARAMS",
    "pre-commit": "lint-staged"
  },
  "lint-staged": {
    "*.{js,jsx,vue}": [
      "vue-cli-service lint",
      "git add"
    ]
  }
```
