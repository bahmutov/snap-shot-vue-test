// import Vue from 'vue'
import Counter from './counter.vue'

test('counter', () => {
  const vm = new Vue({
    el: document.createElement('div'),
    render: (h) => h(Counter),
  })
})
