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
            a.item(@click="$scrollTo(3)") 介绍
            a.item(@click="$scrollTo(4)") 服务
            a.item(@click="$scrollTo(5)") 成员
            a.item(@click="$scrollTo(6)") 合作
            a.item(@click="$scrollTo(7)") 加入
            a.item(href="https://github.com/shuopensourcecommunity") GITHUB
            a.item(href="https://wiki.shuosc.org/") WIKI
            a.item(href="https://blog.shuosc.org/") BLOG
    flat-surface-shader.shader(type="canvas", :light="shaderLightOptions", :mesh="shaderMeshOptions")
    header
      .title 上海大学开源社区
      .subtitle Shanghai University Open Source Community
      .main-buttons
        el-button(type="primary", size="large", @click="$scrollTo(7)") 加入我们
        el-button.detailed-button(size="large", @click="$scrollTo(3)") 了解更多
    section
      .container
        .title 上海大学开源爱好者的交流平台
        .hr
        .quote In real open source, you have the right to control your own destiny. —— Linus Torvalds
        el-row(:gutter="30")
          el-col(:sm="12", :xs="24")
            .detail
              iconbox
              .content
                .header 「自由、开放、平等」
                .text 我们秉承自由软件运动之精神，弘扬黑客（Hacker）文化，传播先进的开源技术方案，鼓励源代码开放，培养自由平等的社区氛围，致力为世界开源事业作出贡献。
          el-col(:sm="12", :xs="24")
            .detail
              iconbox
              .content
                .header 公共社区服务
                .text.
                  我们面向全校师生举办定期的技术分享活动，并通过自建的平台服务进行线上弹幕直播。同时，我们每周会在微信公众号、博客等平台推送原创的翻译资料与技术文章。
                  我们提供开源镜像、校内&amp;谷歌代理、代码托管、验证码识别等服务，为广大师生进行学术研究、技术研发给予各类支持。
        el-row(:gutter="30")
          el-col(:sm="12", :xs="24")
            .detail
              iconbox
              .content
                .header 技术交流社群
                .text.
                  社区自 2010 年成立以来，已历经六届。这里有就职于微软、摩根士丹利、百度、腾讯、阿里等企业的已毕业成员，有正在清北交复浙乃至海外攻读硕博学位的高材生，
                  还有知名开源项目的贡献者。社区中校内同学与往届成员保持密切的联系，开展各式各样的技术交流， 衍生出前端技术、Python、Java 等专题兴趣小组。
                  这样良好的技术交流氛围，是社区宝贵的财富，也吸引了校内各类的技术爱好者们参与到社区活动与建设中来。
          el-col(:sm="12", :xs="24")
            .detail
              iconbox
              .content
                .header 线下活动
                .text.
                  除了技术分享，我们还会定期举办「Geek Party」茶话会，促进社区成员之间交流。同时，我们与校外企业、技术组织维系长期合作关系，
                  不定期组织志愿者参加大型开源及技术专题活动，帮助同学们获知业界技术动向，了解开源事业发展。
    section
      .container.service
        .title.text-center 社区服务
        .hr.element-center
        el-row.text-center(:gutter="30")
          el-col(:sm="8", :xs="24")
            i.fa.fa-tablet.badge
            .header 上大助手
            .text.
              开源的校园门户系统，实现可定制的校园信息接口集中化服务。
              目前支持排课助手、校园安全地图、晨跑课外活动查询、成绩查询等诸多功能。
            .more
              a(href="https://www.shuhelper.cn/") 查看详细
          el-col(:sm="8", :xs="24")
            i.fa.fa-database.badge
            .header 开源镜像站
            .text.
              一个以普及开源软件，方便校内用户高校访问开源项目资源的非盈利计划。
              提供 Ubuntu、CentOS、Arch、 OpenSUSE、Apache 等项目源的镜像，
              为校内开源技术爱好者提供高速的源服务。
            .more
              a(href="https://mirrors.shuosc.org") 查看详细
          el-col(:sm="8", :xs="24")
            i.fa.fa-flask.badge
            .header 实验场
            //- .text #[a(href="http://bbs.shuosc.org") 社区论坛]
            .text #[a(href="https://git.shuosc.org") 代码托管]
            //- .text #[a(href="https://g6.shuosc.org") 搜索反向代理]
            .text #[a(href="https://shuer.link") SHUER.LINK]
            .text #[a(href="https://github.com/shuopensourcecommunity/anti-captcha.shuosc.org") 验证码识别]
    section
      .container.member
        .title.text-center 社区成员
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
        .title.text-center 合作
        .hr.element-center
        .sponsor
          a(href="http://chinagdg.org/p/gdg-shanghai/")
            img(width="225",height="75",src="./assets/images/gdg-logo.png")
          a(href="https://www.synyi.com")
            img(width="250",height="50",src="./assets/images/synyi-logo.png")
          a(href="https://nita.shu.edu.cn")
            img(width="190",height="75",src="./assets/images/nita-logo.png")
          a(href="https://geekpie.org")
            img(width="250", height="54",src="./assets/images/geekpie-logo.png")
          a(href="https://lug.ustc.edu.cn")
            img(height="75",src="./assets/images/lug-ustc-logo.png")
    section.joinus
      .container.text-center
        .title 加入
        .hr.element-center
        .text 如果你对计算机技术充满兴趣，或是愿意参与到我们的活动中来，欢迎加入我们！
        //- .text 17级QQ群：146685225 （推荐新同学加入）
        .text QQ主群：24061199 （加群请简单备注说明来历）
        .text
          a(href="https://t.me/joinchat/ErK1eQ6s9-axpVr75Oiwww") #[i.fa.fa-telegram] Telegram
        .text.wechat 微信公众号
        img(src="./assets/images/wx-qrcode.png")
        .text 详细的加入说明以及招募信息，请#[a(href="https://wiki.shuosc.org/about") 参见]
        .text 若有任何问题或建议，也可直接#[a(href="mailto:contact@shuosc.org") 联系我们]
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
        {name: 'Cosformula', title: '现社区负责人', avatar: CosformulaAvatar, skills: ['SHU Helper', 'Web Development', 'Python', 'Javascript']},
        {name: 'Eric Wang', title: '运营 & 宣传', avatar: EricwangAvatar, skills: ['Machine Learning', 'Python']},
        {name: 'Diggerdu', title: '讲师 & 技术研发', avatar: DiggerduAvatar, skills: ['SHUOSC Monitor', 'Deep Learning', 'Tensorflow', 'Python']},
        {name: 'Npa', title: '技术研发', avatar: NpaAvatar, skills: ['SHU Anti-captcha', 'Deep Learning', 'Web Development', 'Python']},
        {name: 'Zhonger', title: '技术研发 & 服务器维护', avatar: ZhongerAvatar, skills: ['SHUOSC Mirrors', 'Javascript', 'Ops']},
        {name: 'Yisaer', title: '讲师 & 技术研发', avatar: YisaerAvatar, skills: ['Java', 'C / C++', 'System Programming']},
        {name: 'LongFangSong', title: '技术研发', avatar: LongFangSongAvatar, skills: ['Opencv Doc-cn', 'Python', 'C / C++', 'System Programming']},
        {name: 'Adrian', title: '讲师 & 技术研发', avatar: AdrianDuanAvatar, skills: ['SHUer Link', 'Javascript', 'Web Development']},
        {name: 'Kastnerorz&Iris', title: '运营 & 技术研发', avatar: KIAvatar, skills: ['Web Development', 'Java', 'Deep Learning']}
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
