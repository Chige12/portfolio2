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
          nuxt-link(to="/works").el.design Design
          nuxt-link(to="/works").el.video Video
          nuxt-link(to="/works").el.web Web
          nuxt-link(to="/works").el.ilust Ilust
          nuxt-link(to="/works").el.others Others
        .sns-links
          a(@click="OpenPopUp()").sns-icon
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
    transition(name="popup")
      .popup(v-if="popup")
        .popup-back(@click="ClosePopUp()")
        .popup-box
          .select-contents
            .select-content
              button(@click="OpenMailer()") メールアプリを立ち上げます
            .select-content
              button(@click="CopyMail()") アドレスをクリップボードにコピーします
            .select-content
              button(@click="ClosePopUp()").cancel キャンセル
          .sub-popup(v-if="sub_popup")
            .result {{sub_popup_result}}
            button(@click="ClosePopUp()").ok OK
</template>

<script>
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
    methods: {
      OpenPopUp() {
        this.popup = true;
      },
      ClosePopUp() {
        this.popup = false;
        this.sub_popup = false;
      },
      OpenMailer() {
        this.sub_popup = true;
        this.sub_popup_result = "アプリを立ち上げています"
        var address, subject, body;
        address = this.mail;
        subject = '【ポートフォリオサイトのリンクより送信】';
        body = '以下に内容をどうぞ。';
        location.href = 'mailto:' + address + '?subject=' + subject + '&body=' + body;
      },
      CopyMail() {
        this.sub_popup = true;
        if(this.execCopy(this.mail)){
          this.sub_popup_result = "コピーしました";
        }
        else {
          this.sub_popup_result = "このブラウザでは対応していません";
        }
      },
      execCopy(string) {
        var temp = document.createElement('div');
        temp.appendChild(document.createElement('pre')).textContent = string;
        var s = temp.style;
        s.position = 'fixed';
        s.left = '-100%';
        document.body.appendChild(temp);
        document.getSelection().selectAllChildren(temp);
        var result = document.execCommand('copy');
        document.body.removeChild(temp);
        // true なら実行できている falseなら失敗か対応していないか
        return result;
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
              color: $theme-gray;
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
          .back-circle-mail {@include fan-clipping(38px,44px,$theme-green);}
          .back-circle-twitter {@include fan-clipping(38px,44px,$official-twitter);}
          .back-circle-github {@include fan-clipping(38px,44px,$theme-mint);}
          .back-circle-hatena {@include fan-clipping(38px,44px,$theme-gray);}
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
  .popup {
    position: absolute;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    .popup-back {
      position: absolute;
      width: 100vw;
      height: 100vh;
      top: 0;
      left: 0;
      background: $theme-navy+ee;
      cursor: pointer;
    }
    .popup-box {
      position: absolute;
      width: 400px;
      height: 240px; 
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      margin: auto;
      background: #fff;
      overflow: hidden;
      cursor:default;
      animation: open-popup-box .3s $bezier-fast-ease-out .2s both;
      .select-contents {
        padding: 8px;
        height: 100%;
        .select-content {
          width: 100%;
          height: (100% / 3);
          padding: 8px;
          &:nth-child(1) button{
            animation: open-popup-button .4s $bezier-fast-ease-out .4s both;
          }
          &:nth-child(2) button{
            animation: open-popup-button .4s $bezier-fast-ease-out .35s both;
          }
          &:nth-child(3) button{
            animation: open-popup-button .4s $bezier-fast-ease-out .3s both;
          }
          button {
            width: 100%;
            height: 100%;
            @include noto-font();
            line-height: 1.5;
            cursor: pointer;
            background: #fff;
            border:none;
            transition: .3s $bezier-fast-ease-out;
            &:hover {
              background: $theme-navy;
              color: #ddd;
            }
          }
          .cancel:hover {
            background: $sub-red;
            color: #fff;
          }
        }
      }
      .sub-popup {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        background: $theme-navy;
        animation: open-popup-button .5s $bezier-fast-ease-out 0s both;
        .result {
          text-align: center;
          padding: 80px 0;
          @include noto-font(1.8rem,#fff);
          line-height: 1.5;
        }
        button.ok {
          position: absolute;
          width: 100%;
          left: 0;
          bottom: 0;
          height: 60px;
          @include noto-font(1.6rem,#fff);
          line-height: 1.5;
          cursor: pointer;
          color: #ddd;
          background: $theme-navy;
          border:none;
          transition: .3s $bezier-fast-ease-out;
          &:hover {
            background: $sub-red;
            color: #ddd;
          }
        }
      }
    }
  }
  @keyframes open-popup-box{
    0% {width: 0;}
    100% {width: 400px;}
  }
  @keyframes open-popup-button {
    0% {transform: translateY(-240px);}
    100% {transform: translateY(0);}
  }
  .popup-enter-active, .popup-leave-active {
    transition: .3s;
  }
  .popup-enter, .popup-leave-to {
    opacity: 0;
  }
}

</style>
