<template lang="pug">
  .header
    a(href="/"): img(src="~/assets/img/chige_logo.svg").header-logo
    .header-text
      .slogan {{slogan}}
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
        [2018,"FORWARD ONLY"]
      ]
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
  transform: translate(0);
  pointer-events: none;
  img.header-logo {
    width: 170px;
    height: 100px;
    padding: 24px 0 22px;
    background: $theme-gray;
    pointer-events: auto;
  }
  .header-text {
    margin-left: 26px;
    padding-top: 12px;
    .slogan {
      @include roboto-medium(2.6rem);
      padding-bottom: 6px;
      transform: skewX(0deg);
      letter-spacing: 0px;
      transition-property: letter-spacing, transform;
      transition-duration: 1s, 2s;
      transition-timing-function: cubic-bezier(0,.86,.13,1), ease-out;
      pointer-events: auto;
      &:hover {
        transform: skewX(-30deg) translateX(10px);
        letter-spacing: 60px;
      } 
    }
    .title {
      @include roboto-medium(1.6rem);
      pointer-events: auto;
    }
  }
}
</style>
