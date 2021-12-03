<template>
  <h2>一个组件就是一个实例，并且是可复用的</h2>
  <h4>
    在JS当中实例是通过构造函数来创建的，每个构造函数可以new出很多个实例，那么每个实例都会继承原型上的方法和属性。
    <br />
    vue的data数据其实是vue组件原型上的属性，数据存在于内存当中。
    <br />
    vue组件为了保证每个实例上data数据的独立性，规定必须使用函数，而不是对象。
    <br />
    因为使用对象的话，每个实例（组件）上使用的data数据是相互影响的，这当然就不是我们想要的。
    对象是对于内存地址的引用，直接定义个对象的话组件之间都会使用这个对象，这样会造成组件之间数据相互影响.
  </h4>
  <h4>
    当一个组件被定义，data必须声明为返回一个初始数据对象的函数，因为组件可能被用来创建多个实例。
    <br />
    如果data仍然是一个纯粹的对象，则所有的实例将共享引用同一个数据对象。
    <br />
    通过提供data函数，每次创建一个新实例后，我们能够调用data函数，从而返回初始数据的一个全新副本数据对象。
  </h4>
</template>

<!-- <script>
// 创建一个构造函数
let myComponent = function () {}

// 原型对象上添加data属性
myComponent.prototype.data = {
  name: 'dxw',
  age: 18
}

// 创建两个实例
let lili = new myComponent()
let kiki = new myComponent()

console.log(lili.data)
console.log(kiki.data)
console.log('😊😊😊😊😊😊😊😊😊😊')

lili.data.name = 'lili'

// 两者是一样的 data都引用的是同一个内存地址
console.log(lili.data)
console.log(kiki.data)
console.log('😊😊😊😊😊😊😊😊😊😊')
</script> -->

<script>
// 创建一个构造函数
let myComponent = function () {
  this.data = this.data()
}

myComponent.prototype.data = function () {
  return {
    name: 'dxw',
    age: 18
  }
}

// 创建两个实例
let lili = new myComponent()
let kiki = new myComponent()

console.log(lili.data)
console.log(kiki.data)
console.log('😊😊😊😊😊😊😊😊😊😊')

lili.data.name = 'lili'

// 使用函数后，使用的是data()函数，data()函数中的this指向的是当前实例本身
console.log(lili.data)
console.log(kiki.data)
console.log('😊😊😊😊😊😊😊😊😊😊')
</script>

<style scoped lang="scss"></style>
