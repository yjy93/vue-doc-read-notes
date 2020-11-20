// 混入一个对象
export const myMixin = {
    created: function () {
        this.hello()
    },
    methods: {
        hello: function () {
            console.log('%c混入对象, 可以通过按需引入的方式实现局部混入','color:deeppink')
        }
    }
}