/**
 * Vue 中自定义指令 对象方式实现
 */

export default {
    install(Vue, options = {}) {
        console.log('%c 对象形式实现的Vue 插件', 'color:deeppink', Vue, options);
    }
}