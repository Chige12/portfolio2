<template lang="pug">
  .global-menu
    .global-menu-wrapper(:class="{'menu-close':menu_close}")
      .menu-button(@click="CloseMenu()"): .circle-dot
        .circle-dot-green
        .circle-dot-mint
        .circle-dot-navy
        .circle-dot-pink
      .page-links
        .link-cover(v-for="(page, key) in page_list" :key="key")
            nuxt-link(:to="'/'+page.link" :class="{'now-link':NowLink(page.link)}" @click="ReloadPath()").link
              .link-over.o-gray: .link-over-text.t-gray {{page.name}}
              .link-over.o-green: .link-over-text.t-green {{page.name}}
              .link-text {{page.name}}
      .about-me
        .profile
          a(href="/profile"): img(src="~/assets/img/Chige.png")
          .name
            .jp ちげ
            .id Chige12
        .elements
          nuxt-link(to="./works#design").el.design Design
          nuxt-link(to="./works#video").el.video Video
          nuxt-link(to="./works#web").el.web Web
          nuxt-link(to="./works#illust").el.ilust Illust
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
    data() {
      return {
        menu_close: false,
        page_list: [
          {name:"Index",link:""},
          {name:"Profile",link:"profile"},
          {name:"Works",  link:"works"},
          {name:"Contact",link:"contact"}
        ],
        mail: "chige12tanu@gmail.com",
        path: "",
      }
    },
    components: {PopupMail},
    mounted() {
      //this.ReloadPath()
    },
    methods: {
      OpenMailPopUp() {
        //call child method
        this.$refs.mail.OpenPopUp();
      },
      CloseMenu(){
        if(this.menu_close==false){
          this.menu_close=true
        }else{
          this.menu_close=false
        }
      },
      NowLink(page_link){
        if(`/${page_link}`==this.path){
          return true;
        }
      },
      ReloadPath(){
        this.path = location.pathname
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
    transition: .5s $bezier-fast-ease-out;
    .menu-button{
      position: absolute;
      top: 18px + 35px + 50px - 7px - 20px - 1px;
      left: 75px - 30px;
      padding: 20px 30px;
      width: min-content;
      cursor: pointer;
      transition: .5s $bezier-fast-ease-out;
      .circle-dot {
        width: 110px;
        height: 16px;
        display: flex;
        flex-wrap: nowrap;
        justify-content: space-between;
        transition: .5s $bezier-fast-ease-out;
        &-green {@include circle-dot(16px,$theme-green);}
        &-mint  {@include circle-dot(16px,$theme-mint);}
        &-navy  {@include circle-dot(16px,$theme-navy);}
        &-pink  {@include circle-dot(16px,$theme-pink);}
      }
    }
    .page-links {
      margin-top: 138px;
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
            color: $theme-navy;
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
        .now-link {
          .link-over.o-gray {
            transform: translateX(0);
            .link-over-text.t-gray {
              transform: translateX(0);
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
      transition: .5s $bezier-fast-ease-out;
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
  .menu-close {
    top: 18px + 35px;
    height: 14px + (16px * 2);
    width: 70px + (24px * 2);
    border-radius: 30px;
    padding: 0;
    .menu-button{
      top: 0;
      left: 0;
      padding: 16px 24px;
      .circle-dot {
        width: 70px;
        height: 14px;
        &-green {@include circle-dot(14px,$theme-green);}
        &-mint  {@include circle-dot(14px,$theme-mint);}
        &-navy  {@include circle-dot(14px,$theme-navy);}
        &-pink  {@include circle-dot(14px,$theme-pink);}
      }
    }
    &:hover{
      width: 365px;
      padding: 0 75px;
      background: #eee;
      .menu-button{
        left: (365px / 2) - (110px / 2) - 30px;
        padding: 16px 30px;
        width: 100%;
      }
      .circle-dot {
        width: 110px;
        height: 14px;
      }
    }
    .about-me {
      bottom: -90vh;
    }
  }
}

</style>
