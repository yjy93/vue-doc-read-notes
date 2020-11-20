/**
 *  Vue 中插件的编写方式分为两种
 *    1. 插件本身是 install 函数
 *    2. 插件是一个对象, 对象中必须有一个 install 方法
 */
// 函数形式的插件
export default function (Vue, options = {}) {
    console.log('%c函数形式的插件', 'color:green', Vue, options);
}