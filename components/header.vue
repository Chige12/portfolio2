<template lang="pug">
  .header(:class="{'header-fold-work':header_state}")
    .white_cover: .stripe
    a(href="/"): img(src="~/assets/img/chige_logo.svg").header-logo
    .header-text
      .slogan: span {{slogan}}
      .title Chige12 Portfolio {{year}} - {{now_page}}
</template>
<script>
export default {
  props: ["now_page"],
  data () {
    return {
      year:"",
      slogan:"",
      slogans: [
        [2017,"Challenging!!!"],
        [2018,"FORWARD ONLY"],
        [2019,"STEP BY STEP"]
      ],
      header_state:false
    }
  },
  mounted () {
    var today = new Date();
    this.year = today.getFullYear();
    for (let i = 0; i < this.slogans.length; i++) {
      if(this.slogans[i][0] == this.year){
        this.slogan = this.slogans[i][1];
      }else{
        this.slogan = this.slogans[this.slogans.length-1][1];
      }
    }
  },
  methods: {
    headerState(State){
      if(State == "Open"){
        this.header_state=false;//開く
      }else if(State == "Fold"){
        this.header_state=true;//畳む
      }
    }
  }
}
</script>
<style lang="scss">
@import "~/assets/scss/variables.scss";
@import "~/assets/scss/mixin.scss";
.header {
  padding: 35px;
  display: flex;
  flex-wrap: nowrap;
  pointer-events: none;
  overflow: hidden;
  transition: .3s $bezier-fast-ease-out;
  .white_cover {
    position: absolute;
    top: 0;
    left: 0;
    width: calc(100% - 45px);
    height: 170px - 15px;
    background: #fffc;
    background: linear-gradient(to bottom, #fff 0%, #fff 40%, #fffc 100%);
    transition: .3s $bezier-fast-ease-out;
    pointer-events: none;
    .stripe {
      @include stripe(.5s,#fff);
      width: 100%;
    }
  }
  img.header-logo {
    width: 170px;
    height: 100px;
    padding: 24px 0 22px;
    background: $theme-gray;
    pointer-events: auto;
    transform: translateX(0);
    transition: .3s $bezier-fast-ease-out;
  }
  .header-text {
    margin-left: 26px;
    padding-top: 12px;
    transition: .3s $bezier-fast-ease-out;
    .slogan {
      @include roboto-medium(2.6rem);
      padding-bottom: 6px;
      transform: skewX(0deg) translateX(0);
      letter-spacing: 0px;
      transition: transform 2s cubic-bezier(0,.86,.13,1);
      pointer-events: auto;
      overflow: hidden;
      span{
        display: block;
        letter-spacing: 0px;
        transition: .3s $bezier-fast-ease-out;
        transition-property: transform, letter-spacing;
        transition-duration: .3s, 1s;
        transition-timing-function: $bezier-fast-ease-out, cubic-bezier(0,.86,.13,1);
        transform: translateY(0);
      }
      &:hover {
        transform: skewX(-30deg) translateX(10px);
        span {
          letter-spacing: 60px;
        }
      } 
    }
    .title {
      @include roboto-medium(1.6rem);
      transition: .3s $bezier-fast-ease-out;
      pointer-events: auto;
      transform: translateY(0);
    }
  }
}
.header-fold-work {
  .white_cover {
    height: 72px;
  }
  .header-text {
    .slogan span {
      transform: translateY(-24px);
    }
    .title {
      transform: translateY(-36px);
    }
  }
}
</style>
