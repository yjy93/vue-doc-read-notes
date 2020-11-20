import Vue from 'vue'
import App from './App.vue'
import myObjPlugin from './plugins/objPlugin'
import myFnPlugin from './plugins/fnPlugin'

Vue.config.productionTip = false

Vue.use(myObjPlugin, {
    name: 'myObjPlugin',
})

Vue.use(myFnPlugin, {
    name: 'myFnPlugin'
})

new Vue({
    render: h => h(App),
}).$mount('#app')
