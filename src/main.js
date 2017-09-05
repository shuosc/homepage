// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui'
import '../theme/index.css'
import FlatSurfaceShader from 'vue-flat-surface-shader'
import headroom from 'vue-headroom'
import ScrollSpy from './lib/Scrollspy'
require('../node_modules/font-awesome/css/font-awesome.css')

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(FlatSurfaceShader)
Vue.use(headroom)
Vue.use(ScrollSpy)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
