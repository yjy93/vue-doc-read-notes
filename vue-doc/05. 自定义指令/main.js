import Vue from 'vue'
import App from './App.vue'
import myPlugin from './directives/index'
import myDirective from './directives/functionPlugin'

Vue.config.productionTip = false

// 对象形式实现的插件  => 目的为了自定义指令
Vue.use(myPlugin, {
    name: 'myObjectPlugin',
})

// 函数形式实现的插件 => 目的为了自定义指令
Vue.use(myDirective, {
    name: 'selfDirective',
})

new Vue({
    render: h => h(App),
}).$mount('#app')
