/**
 *  Vue 的自定义指令 函数方式实现
 */

/**
 * @param Vue Vue 构造函数
 * @param options   可以配置的选项参数
 */
function install(Vue, options = {}) {
    // console.log('%c 函数形式实现的Vue 插件', 'color:red', Vue, options);
    Vue.directive('focus', {
        // 自定义指令的钩子函数
        bind(el, binding, vnode, oldeVnode) {
            console.log('bind 只调用一次--', el, binding, vnode, oldeVnode);
        },
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

export default install