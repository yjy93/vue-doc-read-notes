<template>
  <div id="app">
    Hello,Vue 动态组件, 异步组件
    <Dynamic></Dynamic>
  </div>
</template>

<script>
import Dynamic from './components/Dynamic'

export default {
  name: 'App',
  components: {
    Dynamic
  }
}
</script>

<style>
</style>
