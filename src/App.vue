<template lang="pug">
  div#app
    headroom(:upTolerance="0", :downTolerance="5", :offset="5")
      .navbar
        .container
          img.navbar-logo(src="./assets/site-logo.png")
          nav
            a.item 关于
            a.item 服务
            a.item 活动
            a.item 加入
            a.item 联系
    flat-surface-shader.shader(type="canvas", :light="{ambient: '#22bc9e', diffuse: '#2b7c6b', draw: false}")
    header
      .title 上海大学开源社区
      .subtitle Shanghai University Open Source Community
      .main-buttons
        el-button(type="primary", size="large") 加入我们
        el-button.detailed-button(size="large") 了解更多
    section
</template>

<script>
import {headroom} from 'vue-headroom'

export default {
  name: 'app',
  data: function () {
    return {visible: false}
  },
  components: {
    headroom
  },
  mounted: function () {
    // Hack: trigger vue-headroom handler
    window.scrollTo(window.scrollX, window.scrollY + 1)
  }
}
</script>

<style lang="sass">
@import 'assets/reset'
@import 'assets/common'
@import 'assets/responsive'
@import 'assets/nav'

.shader
  position: fixed
  width: 100%
  height: 100%
  z-index: -1

header
  background-color: rgba(0,0,0,0.6)
  height: 679px
  color: #ffffff
  display: flex
  align-items: center
  justify-content: center
  flex-direction: column

.title
  font-size: 3.5em
  font-weight: 500
  line-height: 4.75rem

.subtitle
  font-size: 1em

.main-buttons
  margin: 30px 0

.detailed-button
  @extend .inverted-button
.detailed-button:hover
  @extend .inverted-button:hover

section
  background-color: white
  height: 1000px

</style>
