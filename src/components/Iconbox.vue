<template lang="pug">
  .box(:style="{width, height}")
    i(:class="[icon]", :style="{width: innerWidth, height: innerHeight, lineHeight}")
</template>

<script>
  export default {
    name: 'icon-box',
    props: {
      size: {
        type: Number,
        default: 32
      },
      icon: {
        type: String,
        default: 'el-icon-arrow-right'
      }
    },
    computed: {
      width: function () {
        return this.size + 'px'
      },
      height: function () {
        return this.size + 'px'
      },
      innerHeight: function () {
        return this.size / 2 + 'px'
      },
      innerWidth: function () {
        return this.size / 2 + 'px'
      },
      lineHeight: function () {
        return this.size + 'px'
      }
    }
  }
</script>

<style lang="sass">
  @import '../assets/sass/color'
  .box
    background-color: $color-primary
    border-radius: 5px
    text-align: center
    flex-shrink: 0
  .box i
    color: $color-white
</style>
