module.exports = {
  process(src, path) {
    const loader = require('vue-loader')
    const config = {
      cacheable() {},
      options: {
        target: 'node'
      },
      loaders: [],
      resourcePath: path,
      _compiler: {
        context: path
      }
    }
    // console.log(loader)
    if (path.endsWith('.vue')) {
      console.log('transforming file', path)
      return loader.call(config, src)
    }
    return src;
  },
};
