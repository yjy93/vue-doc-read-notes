/**
 * Vue 中自定义指令 对象方式实现
 */

export default {
    install(Vue, options = {}) {
        // console.log('%c 对象形式实现的Vue 插件', 'color:deeppink', Vue, options);
        // 这种方式最终会实现 全局注册自定义指令. 如果想局部注册指令, 可以在组件的 directives 选项内注册
        Vue.directive('focus', {
            /**
             * 自定义指令的钩子函数, 会被传入一下几个参数:
             *  el,  binding, vnode, oldVnode
             */
            // bind(el, binding, vnode, oldeVnode) {
            //     console.log('bind 只调用一次--', el, binding, vnode, oldeVnode);
            // },
            // 当被绑定的元素插入的 DOM 中时 ... ...
            inserted: function (el) {
                console.log('inserted ---');
                el.focus()
            },
            update() {
                console.log('update ---');
            },
            componentUpdated() {
                console.log('componentUpdated --');
            },
            unbind() {
                console.log('unbind ---');
            },

        })
    }
}