import Vue from 'vue'
import Counter from './counter'
import snapshot from 'snap-shot'
const renderer = require('vue-server-renderer').createRenderer()

const render = vm => {
  return new Promise((resolve, reject) => {
    renderer.renderToString(vm, (err, str) => {
      if (err) {
        return reject(err)
      }
      resolve(str)
    })
  })
}

test('render counter', () => {
  const vm = new Vue({
    el: document.createElement('div'),
    render: h => h(Counter),
  })
  return snapshot(
    render(vm)
  )
})
