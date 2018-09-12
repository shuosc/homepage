<template lang="pug">
  div#app(v-scroll-spy="scrollPos")
    headroom(:upTolerance="0", :downTolerance="5", :offset="5")
      .navbar
        .container
          .logo
            img(src="./assets/images/site-logo.png")
          .nav-button(@click="navToggle()", :class="{active: navVisibility}")
            i.fa.fa-reorder
          nav(:class="{active: navVisibility}")
            a.item(@click="$scrollTo(3)") {{$t("nav.introduction")}}
            a.item(@click="$scrollTo(4)") {{$t("nav.service")}}
            a.item(@click="$scrollTo(5)") {{$t("nav.member")}}
            a.item(@click="$scrollTo(6)") {{$t("nav.collaborator")}}
            a.item(@click="$scrollTo(7)") {{$t("nav.join")}}
            a.item(href="https://github.com/shuopensourcecommunity") GITHUB
            a.item(href="https://osc.shu.edu.cn/wiki/") WIKI
            a.item(href="https://osc.shu.edu.cn/blog/") BLOG
    flat-surface-shader.shader(type="canvas", :light="shaderLightOptions", :mesh="shaderMeshOptions")
    header
      .title {{$t("header.title")}}
      .subtitle {{$t("header.subtitle")}}
      .main-buttons
        el-button(type="primary", size="large", @click="$scrollTo(7)") {{$t("mainButtons.joinUs")}}
        el-button.detailed-button(size="large", @click="$scrollTo(3)") {{$t("mainButtons.moreInfo")}}
        el-button.language-button(size="large", @click="switchLanguage") {{$t("mainButtons.switchLanguage")}}
    section
      .container
        .title {{$t("section.title")}}
        .hr
        .quote In real open source, you have the right to control your own destiny. —— Linus Torvalds
        el-row(:gutter="30")
          el-col(:sm="12", :xs="24")
            .detail
              iconbox
              .content
                .header 「{{$t("section.box1.header")}}」
                .text {{$t("section.box1.text")}}
          el-col(:sm="12", :xs="24")
            .detail
              iconbox
              .content
                .header {{$t("section.box2.header")}}
                .text.
                  {{$t("section.box2.text")}}
        el-row(:gutter="30")
          el-col(:sm="12", :xs="24")
            .detail
              iconbox
              .content
                .header {{$t("section.box3.header")}}
                .text.
                  {{$t("section.box3.text")}}
          el-col(:sm="12", :xs="24")
            .detail
              iconbox
              .content {{$t("section.box4.header")}}
                .header
                .text.
                  {{$t("section.box4.text")}}
    section
      .container.service
        .title.text-center {{$t("service.title")}}
        .hr.element-center
        el-row.text-center(:gutter="30")
          el-col(:sm="8", :xs="24")
            i.fa.fa-tablet.badge
            .header {{$t("service.shuhelper.header")}}
            .text.
              {{$t("service.shuhelper.text")}}
            .more
              a(href="https://www.shuhelper.cn/") {{$t("service.shuhelper.more")}}
          el-col(:sm="8", :xs="24")
            i.fa.fa-database.badge
            .header {{$t("service.mirrorstation.header")}}
            .text.
              {{$t("service.mirrorstation.text")}}
            .more
              a(href="https://mirrors.shu.edu.cn/") {{$t("service.mirrorstation.more")}}
          el-col(:sm="8", :xs="24")
            i.fa.fa-flask.badge
            .header {{$t("service.lab.header")}}
            //- .text #[a(href="http://bbs.shuosc.org") 社区论坛]
            .text #[a(href="https://git.shuosc.org") {{$t("service.lab.git")}}]
            //- .text #[a(href="https://g6.shuosc.org") 搜索反向代理]
            .text #[a(href="https://shuer.link") SHUER.LINK]
            .text #[a(href="https://github.com/shuopensourcecommunity/anti-captcha.shuosc.org") {{$t("service.lab.anticaptcha")}}]
    section
      .container.member
        .title.text-center {{$t("members.title")}}
        .hr.element-center
        el-carousel(:type="carouselType" height="400px", :interval="6000")
          el-carousel-item.card(v-for="member in members", :key="member.name")
            img.avatar(:src="member.avatar")
            .name {{member.name}}
            .title {{member.title}}
            ul(v-for="skill in member.skills")
              li #[i.el-icon-arrow-right] {{skill}}
    section
      .container
        .title.text-center {{$t("collaborator.title")}}
        .hr.element-center
        .sponsor
          a(href="http://chinagdg.org/p/gdg-shanghai/")
            img(width="225",height="75",src="./assets/images/gdg-logo.png")
          a(href="https://www.synyi.com")
            img(width="250",height="50",src="./assets/images/synyi-logo.png")
          a(href="https://nita.shu.edu.cn")
            img(width="190",height="75",src="./assets/images/nita-logo.png")
        .sponsor
          a(href="https://geekpie.org")
            img(width="250", height="54",src="./assets/images/geekpie-logo.png")
          a(href="https://lug.ustc.edu.cn")
            img(height="75",src="./assets/images/lug-ustc-logo.png")
          a(href="https://soscon.top")
            img(height="120",src="./assets/images/soscon-logo.png")
    section.joinus
      .container.text-center
        .title {{$t("joinus.title")}}
        .hr.element-center
        .text {{$t("joinus.text")}}
        //- .text 17级QQ群：146685225 （推荐新同学加入）
        .text {{$t("joinus.qqgroup")}}：24061199 （{{$t("joinus.addgrouprequire")}}）
        .text
          a(href="https://t.me/joinchat/ErK1eQ6s9-axpVr75Oiwww") #[i.fa.fa-telegram] Telegram
        .text.wechat {{$t("joinus.wechat")}}
        img(src="./assets/images/wx-qrcode.png")
        .text {{$t("joinus.info")}}#[a(href="https://osc.shu.edu.cn/wiki/about") {{$t("joinus.see")}}]
        .text {{$t("joinus.question")}}#[a(href="mailto:contact@shuosc.org") {{$t("joinus.contract")}}]
    footer
      .text= `©${new Date().getFullYear()} SHU Open Source Community`
      .text Made with #[i.fa.fa-heart]
</template>

<script>
  import {headroom} from 'vue-headroom'
  import iconbox from './components/Iconbox.vue'
  import EricwangAvatar from './assets/images/avatar-ericwang.jpg'
  import CosformulaAvatar from './assets/images/avatar-cosformula.png'
  import AdrianDuanAvatar from './assets/images/avatar-adrianduan.jpeg'
  import LongFangSongAvatar from './assets/images/avatar-longfangsong.jpeg'
  import DiggerduAvatar from './assets/images/avatar-diggerdu.jpg'
  import NpaAvatar from './assets/images/avatar-npa.jpg'
  import ZhongerAvatar from './assets/images/avatar-zhonger.jpg'
  import YisaerAvatar from './assets/images/avatar-yisaer.jpg'
  import KIAvatar from './assets/images/avatar-ki.jpg'

  export default {
    name: 'app',
    data: function () {
      return {
        scrollPos: -1,
        navVisibility: false,
        carouselType: 'card',
        shaderLightOptions: {ambient: '#22bc9e', diffuse: '#2b7c6b', draw: false},
        shaderMeshOptions: {},
        members: [
          {
            name: 'Cosformula',
            title: '现社区负责人',
            avatar: CosformulaAvatar,
            skills: ['SHU Helper', 'Web Development', 'Python', 'Javascript']
          },
          {name: 'Eric Wang', title: '运营 & 宣传', avatar: EricwangAvatar, skills: ['Machine Learning', 'Python']},
          {
            name: 'Diggerdu',
            title: '讲师 & 技术研发',
            avatar: DiggerduAvatar,
            skills: ['SHUOSC Monitor', 'Deep Learning', 'Tensorflow', 'Python']
          },
          {
            name: 'Npa',
            title: '技术研发',
            avatar: NpaAvatar,
            skills: ['SHU Anti-captcha', 'Deep Learning', 'Web Development', 'Python']
          },
          {
            name: 'Zhonger',
            title: '技术研发 & 服务器维护',
            avatar: ZhongerAvatar,
            skills: ['SHUOSC Mirrors', 'Javascript', 'Ops']
          },
          {name: 'Yisaer', title: '讲师 & 技术研发', avatar: YisaerAvatar, skills: ['Java', 'C / C++', 'System Programming']},
          {
            name: 'LongFangSong',
            title: '技术研发',
            avatar: LongFangSongAvatar,
            skills: ['Opencv Doc-cn', 'Python', 'C / C++', 'System Programming']
          },
          {
            name: 'Adrian',
            title: '讲师 & 技术研发',
            avatar: AdrianDuanAvatar,
            skills: ['SHUer Link', 'Javascript', 'Web Development']
          },
          {
            name: 'Kastnerorz&Iris',
            title: '运营 & 技术研发',
            avatar: KIAvatar,
            skills: ['Web Development', 'Java', 'Deep Learning']
          }
        ]
      }
    },
    methods: {
      navToggle: function () {
        this.navVisibility = !this.navVisibility
      },
      resize: function () {
        // Responsive
        const screenWidth = window.innerWidth
        this.carouselType = 'card'
        this.shaderMeshOptions = {segments: 16, slices: 8}
        if (screenWidth < 768) {
          this.shaderMeshOptions = {segments: 8, slices: 8}
        }
        if (screenWidth < 475) {
          this.carouselType = ''
          this.shaderMeshOptions = {segments: 4, slices: 4, width: 1.8, height: 1.8}
        }
      },
      switchLanguage () {
        if (this.$i18n.locale === 'zh') {
          this.$i18n.locale = 'en'
        } else {
          this.$i18n.locale = 'zh'
        }
      }
    },
    components: {
      headroom,
      iconbox
    },
    mounted: function () {
      // Hack: trigger vue-headroom handler
      window.scrollTo(window.scrollX, window.scrollY + 1)
    },
    created: function () {
      window.addEventListener('resize', this.resize)
      this.resize()
    },
    destroy: function () {
      window.removeEventListener('resize', this.resize)
    }
  }
</script>

<style lang="sass">
  @import 'assets/sass/reset'
  @import 'assets/sass/common'
  @import 'assets/sass/color'
  @import 'assets/sass/nav'
  @import 'assets/sass/section'
  @import 'assets/sass/member'
  @import 'assets/sass/card'
  @import 'assets/sass/layout'
  @import 'assets/sass/responsive'
</style>
