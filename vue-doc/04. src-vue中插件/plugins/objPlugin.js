/**
 *  Vue 中插件的编写方式分为两种
 *    1. 插件本身是 install 函数
 *    2. 插件是一个对象, 对象中必须有一个 install 方法
 */

// 对象形式的插件
export default {
    /**
     * @param Vue 第一个参数为 Vue 的构造函数
     * @param options 第二个参数为 参数选项
     */
    install(Vue, options = {}) {
        console.log('%c对象形式的插件', 'color:red', Vue, options);
    }
}