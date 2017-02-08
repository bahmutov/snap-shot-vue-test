# snap-shot-vue-test

> Jest + Vue.js testing [snap-shot][snap-shot]

[![Build status][ci-image] ][ci-url]

See [counter.test.js](counter.test.js) for example

```js
import Vue from 'vue'
import Counter from './counter'
import snapshot from 'snap-shot'
// render function using vue-server-renderer
test('render counter', () => {
  const vm = new Vue({
    el: document.createElement('div'),
    render: h => h(Counter),
  })
  return snapshot(
    render(vm)
  )
})
```

[snap-shot]: https://github.com/bahmutov/snap-shot
[ci-image]: https://travis-ci.org/bahmutov/snap-shot-vue-test.svg?branch=master
[ci-url]: https://travis-ci.org/bahmutov/snap-shot-vue-test
