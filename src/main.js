// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui'
import '../theme/index.css'
import FlatSurfaceShader from 'vue-flat-surface-shader'
import headroom from 'vue-headroom'

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(FlatSurfaceShader)
Vue.use(headroom)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
