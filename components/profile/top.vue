<template lang="pug">
  .top
    .top-header
      img(src="~/assets/img/tottori-sakyu.jpg").top-image
      .real-name
        .en Uchida Keita
        .jp 内田啓太
      .caption Sept. 2018 in 鳥取砂丘
    .detail
      .my-icon
        img(src="~/assets/img/Chige.png").my-icon-img
        .caption My Icon
      .detail-list
        .detail-title Details
        ul
          li(v-for="detail in details")
            .propaty - {{detail.propaty}}
            .value {{detail.value}}
    .comments
      .comments-text
        .comments-text-wrapper
          p(v-for="comment in comments" v-html="comment")
      .fav-photo
        img(src="~/assets/img/sushi.jpg").fav-photo-img
        .caption 脂の乗った寒ブリ

</template>
<script>
export default {
  data () {
    return {
      details: [
        {propaty: "Pen name",value: "ちげ (Chige)"},
        {propaty: "Birthday",value: "1998/12/15"},
        {propaty: "Age",value: "20"},
        {propaty: "Living", value: "Kyoto"},
        {propaty: "Affiliation", value: "奈良高専 専攻科 (NITNC)"}
      ],
      comments: [
        "鍋はすき焼き、寿司は寒ブリが好きです。",
        "電気電子システムコース専攻だし、今まで学んできたのは電気工学だけど、",
        "これから Web 系のヒューマンインターフェースの研究をやろうとしている。",
        "デザインもエンジニアリングも頑張りたいな。"
      ]
    }
  },
  mounted(){
    //年齢変更
    var today = new Date();
    var temp_age = today.getFullYear() - 1998 - 1;
    var month = today.getMonth()+1;
    var date = today.getDate();
    if(month >= 12 && date >= 15){
      temp_age = temp_age + 1
    }
    for (let i = 0; i < this.details.length; i++) {
      if(this.details[i].propaty == "Age"){
        this.details[i].value = String(temp_age);
      }
    }
  }
}
</script>
<style lang="scss">
@import "~/assets/scss/variables.scss";
@import "~/assets/scss/mixin.scss";
.top {
  .caption {
      position: absolute;
      top: 0px;
      right: 0px;
      padding: 8px 12px;
      background: rgba($theme-navy,0.7);
      color: #fff;
      @include noto-font(1.1rem,#fff);
      transition: 1s $bezier-fast-ease-out;
      opacity: 0;
    }
  .top-header {
    position: relative;
    width: 100%;
    height: auto;
    .top-image {
      display: block;
      width: 100%;
    }
    .real-name {
      position: absolute;
      bottom: 28px;
      left: 32px;
      padding:0;
      .en {
        @include roboto-medium(4rem);
        color: #fff;
      }
      .jp {
        @include noto-font(1.6rem,#fff);
        font-weight: bold;
      }
    }
    &:hover {
      .caption {
        opacity: 1;
      }
    }
  }
  .detail {
    display: flex;
    flex-wrap: nowrap;
    margin-top: 20px;
    height: 210px;
    .my-icon {
      position: relative;
      display: block;
      flex-basis: 210px;
      width: 210px;
      height: 210px;
      background: $theme-green;
      &-img {
        width: 100%;
        height: 100%;
      }
      &:hover{
        .caption{
          opacity: 1;
        }
      }
    }
    .detail-list{
      margin: 0;
      padding: 20px 24px;
      margin-left: 20px;
      background: $theme-mint;
      flex-basis: 0;
      flex-grow: 1;
      width: 100%;
      height: 210px;
      .detail-title {
        margin-bottom: 12px;
        @include roboto-medium(1.5rem);
        color: #fff;
      }
      ul {
        display: grid;
        grid-auto-flow: column;
        list-style: none;
        width:100%;
        padding: 0;
        grid-template-rows:auto auto auto auto auto;
        grid-template-columns: auto auto;
        li {
          display: inline-block;
          padding-left: 18px;
          position: relative;
          vertical-align: baseline;
          margin-bottom:8px;
          .propaty {
            display: inline-block;
            @include roboto-medium(1.5rem);
            color: #fff;
            vertical-align: baseline;
            width: 100px;
          }
          .value {
            display: inline-block;
            @include noto-font(1.7rem, #fff);
            font-feature-settings: "pkna";
            vertical-align:baseline;
            width: 50%;
          }
        }
      }
    }
  }
  .comments {
    display: flex;
    flex-wrap: nowrap;
    margin-top: 20px;
    height: 210px;
    .comments-text {
      margin: 0;
      padding: 42px 36px;
      margin-right: 20px;
      background: $theme-navy;
      flex-basis: 0;
      flex-grow: 1;
      width: auto;
      height: 210px;
      p {
        margin-bottom: 8px;
        line-height: 1.6;
        @include noto-font(1.6rem,#fff);
      }
    }
    .fav-photo {
      position: relative;
      display: block;
      flex-basis: 210px;
      width: 210px;
      height: 210px;
      background: $theme-pink;
      transition: .2s $bezier-fast-ease-out;
      &-img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
      &:hover {
        flex-basis: 210px * 1.6572;
        width: 210px * 1.6572;
        transition: .4s $bezier-fast-ease-out;
        .caption {
          opacity: 1;
        }
      }
    }
  }
}
</style>
