<template lang="pug">
.defaultText-wrapper
  p.text-box(v-for="text in nowContent.content.text" v-html="text")
</template>
<script>
export default {
  props: ["nowContent"]
}
</script>
<style lang="scss">
@import "~/assets/scss/variables.scss";
@import "~/assets/scss/mixin.scss";
.defaultText-wrapper{
  margin-bottom: 54px;
  p.text-box{
    @include noto-font(1.6rem,$theme-navy);
    line-height: 1.6;
    margin-bottom: 2rem;
    a:link, a:visited{
      color: $theme-mint-a;
      border-bottom: 1px dotted $theme-mint-a;
      transition: .3s $bezier-fast-ease-out;
      &:hover{
        color: $theme-mint-li;
      }
    }
  }
}
</style>