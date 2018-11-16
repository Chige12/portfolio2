<template lang="pug">
.popup-wrapper
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
    data() {
      return {
        popup:false,
        sub_popup:false,
        sub_popup_result:"",
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
.popup-wrapper {
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
