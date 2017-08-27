<template lang="pug">
  div#app
    flat-surface-shader.shader(type="canvas", :light="{ambient: '#22bc9e', diffuse: '#2b7c6b'}")
    .hero
      .header 上海大学开源社区
      .subheader Shanghai University Open Source Community
      .main-buttons
        el-button(type="primary",size="large") 加入我们
        el-button.detailed-button(size="large") 了解更多
    section
</template>

<script>
export default {
  name: 'app',
  data: function () {
    return {visible: false}
  }
}
</script>

<style lang="sass">
@import 'assets/reset'
@import 'assets/component'

.shader
  position: fixed
  width: 100%
  height: 100%
  z-index: -1

.hero
  background-color: rgba(0,0,0,0.6)
  height: 679px
  color: #ffffff
  display: flex
  align-items: center
  justify-content: center
  flex-direction: column
  @extend .common-font

.header
  font-size: 3.5rem
  font-weight: 500
  line-height: 4.75rem

.subheader
  font-size: 1rem


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
