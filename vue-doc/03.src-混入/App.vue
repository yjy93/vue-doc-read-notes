<template>
  <div id="app">
    <h4 style="color: #b61d70"> 混入</h4>
    <p style="color: deeppink">

    </p>
  </div>
</template>

<script>


// ===> 这种混入方式为 => 局部混入
import {myMixin} from './mixins'

export default {
  name: 'App',
  mixins: [myMixin],
  data() {
    return {}
  },
  mounted() {
    console.log('App.vue中直接调用全局混入的data --->', this.mixInMsg);
  },
}
</script>

<style>
</style>
