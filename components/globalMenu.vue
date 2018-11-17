<template lang="pug">
  .global-menu
    .global-menu-wrapper
      a(href="/"): .circle-dot
        .circle-dot-green
        .circle-dot-mint
        .circle-dot-navy
        .circle-dot-pink
      .page-links
        .link-cover(v-for="(page, key) in page_list" :key="key")
            nuxt-link(:to="'/'+page.link").link
              .link-over.o-gray: .link-over-text.t-gray {{page.name}}
              .link-over.o-green: .link-over-text.t-green {{page.name}}
              .link-text {{page.name}}
      .about-me
        .profile
          a(href="/"): img(src="~/assets/img/Chige.png")
          .name
            .jp ちげ
            .id Chige12
        .elements
          nuxt-link(to="./works#design").el.design Design
          nuxt-link(to="./works#video").el.video Video
          nuxt-link(to="./works#web").el.web Web
          nuxt-link(to="./works#illust").el.ilust Ilust
          nuxt-link(to="./works#others").el.others Others
        .sns-links
          a(@click="OpenMailPopUp()").sns-icon
            .back-circle-mail
              .circle-left: .inner
              .circle-right: .inner
            img(src="~/assets/img/icon/mail.svg")
          a(href="https://twitter.com/Chige12_").sns-icon
            .back-circle-twitter
              .circle-left: .inner
              .circle-right: .inner
            img(src="~/assets/img/icon/twitter.svg")
          a(href="https://github.com/Chige12").sns-icon
            .back-circle-github
              .circle-left: .inner
              .circle-right: .inner
            img(src="~/assets/img/icon/github.svg")
          a(href="http://chige.hatenablog.com/").sns-icon
            .back-circle-hatena
              .circle-left: .inner
              .circle-right: .inner
            img(src="~/assets/img/icon/hatena-blog.svg")
    PopupMail(ref="mail")
</template>

<script>
import PopupMail from '~/components/popup/mail.vue'

  export default {
    props: ["now_page"],
    data() {
      return {
        popup:false,
        sub_popup:false,
        sub_popup_result:"",
        page_list: [
          {name:"Profile",link:"profile"},
          {name:"Works",  link:"works"},
          {name:"Contact",link:"contact"}
        ],
        mail: "chige12tanu@gmail.com"
      }
    },
    components: {PopupMail},
    methods: {
      OpenMailPopUp() {
        //call child method
        this.$refs.mail.OpenPopUp();
      }
    }
  }
</script>

<style lang="scss">
@import "~/assets/scss/variables.scss";
@import "~/assets/scss/mixin.scss";
.global-menu {
  .global-menu-wrapper {
    position: absolute;
    top: 0;
    right: 45px;
    width: 365px;
    height: 100vh;
    background: $white;
    padding: 0 75px;
    overflow: hidden;
    .circle-dot {
      margin-top: 80px;
      width: 115px;
      height: 17px;
      display: flex;
      flex-wrap: nowrap;
      justify-content: space-between;
      &-green {@include circle-dot(17px,$theme-green);}
      &-mint  {@include circle-dot(17px,$theme-mint);}
      &-navy  {@include circle-dot(17px,$theme-navy);}
      &-pink  {@include circle-dot(17px,$theme-pink);}
    }
    .page-links {
      margin-top: 32px;
      overflow: hidden;
      .link-cover {
        overflow: hidden;
        margin: 36px 0;
        height: 3.6rem;
        transition: .5s $bezier-fast-ease-out;
        &-delete {
        margin: 0;
        height: 0; 
        }
        .link {
          position: relative;
          display: block;
          .link-text {
            display: block;
            margin: 0;
            @include roboto-medium(3.2rem);
          }
          .link-over, .link-over .link-over-text {
            position: absolute;
            width: 12rem;
            height: 100%;
            top: 0;
            left: 0;
            display: block;
            @include roboto-medium(3.2rem);
            user-select: none;
          }
          .link-over {
            background: #fff;
            overflow: hidden;
            transform: translateX(-12rem);
            .link-over-text {
              transform: translateX(12rem);
            }
          }
          .o-gray {
            transition: .6s $bezier-fast-ease-out;
            z-index: 21;
            .t-gray {
              transition: .6s $bezier-fast-ease-out;
              color: $theme-gray-1;
              z-index: 22;
            }
          }
          .o-green {
            transition: .6s .2s $bezier-fast-ease-out;
            z-index: 23;
            .t-green {
              transition: .6s .2s $bezier-fast-ease-out;
              color: $theme-green;
              z-index: 24;
            }
          }
          &:hover {
            .link-over {
              transform: translateX(0);
              .link-over-text {
                transform: translateX(0);
              }
            }
          }
        }
      }
    }
    .about-me {
      position: absolute;
      bottom: 50px;
      left: 0;
      right: 0;
      margin: 0 75px;
      .profile {
        display: flex;
        flex-wrap: nowrap;
        margin-bottom: 20px;
        img {
          width: 90px;
          height: 90px;
        }
        .name {
          margin-left: 8px;
          padding-top: 24px;
          .jp {
            @include noto-font(2.4rem,$theme-gray-text);
          }
          .id {
            @include noto-font(1.8rem,$theme-gray-text);
          }
        }
      }
      .elements {
        display: flex;
        flex-wrap: wrap;
        margin-bottom: 36px;
        .el {
          padding: 2px 0;
          margin-right: 1rem;
          @include noto-font(2rem);
        }
        .design {color: $theme-green;}
        .video {color: $theme-mint;}
        .web {color: $theme-navy;}
        .ilust {color: $theme-pink;}
        .others {color: $theme-gray-text;}
      }
      .sns-links {
        display: flex;
        flex-wrap: nowrap;
        justify-content: space-between;
        a.sns-icon {
          position: relative;
          width: 38px;
          height: 38px;
          cursor: pointer;
          .back-circle-mail {@include fan-clipping(38px,44px,$theme-green-li);}
          .back-circle-twitter {@include fan-clipping(38px,44px,$official-twitter);}
          .back-circle-github {@include fan-clipping(38px,44px,$theme-mint-li);}
          .back-circle-hatena {@include fan-clipping(38px,44px,$theme-gray-1);}
          img {
            position: absolute;
            top: 0;
            left: 0;
            width: 38px;
            height: 38px;
            pointer-events: none;
          }
        }
      }
    }
  }
}

</style>
