import Vue from 'vue'
import Counter from './counter'
const renderer = require('vue-server-renderer').createRenderer()

test('counter', () => {
  const vm = new Vue({
    el: document.createElement('div'),
    render: (h) => h(Counter),
  })
  renderer.renderToString(vm, (err, str) => {
    expect(str).toMatchSnapshot();
  })
})
