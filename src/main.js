// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import {Button, Carousel, CarouselItem, Col, Icon, Row} from 'element-ui'
import '../theme/index.css'
import FlatSurfaceShader from 'vue-flat-surface-shader'
import headroom from 'vue-headroom'
import ScrollSpy from './lib/Scrollspy'
import VueI18n from 'vue-i18n'

require('../node_modules/font-awesome/css/font-awesome.css')

Vue.config.productionTip = false
Vue.use(Button)
Vue.use(Icon)
Vue.use(Col)
Vue.use(Row)
Vue.use(Carousel)
Vue.use(CarouselItem)
Vue.use(FlatSurfaceShader)
Vue.use(headroom)
Vue.use(ScrollSpy)
Vue.use(VueI18n)

const i18n = new VueI18n({
  locale: 'zh',
  messages: {
    'zh': require('./i18n/lang/zh'),
    'en': require('./i18n/lang/en')
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  i18n,
  template: '<App/>',
  components: {App}
})
