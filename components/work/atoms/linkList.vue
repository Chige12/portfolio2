<template lang="pug">
.link-lists
  .link-list-wrapper(v-for="link in nowContent.content.links")
    a(:href="link.url")
      .link-box
        .link-title {{link.name}}
        img.link-icon(src="~/assets/img/icon/link.svg")
</template>
<script>
export default {
  props: ["nowContent"]
}
</script>
<style lang="scss" scoped>
@import "~/assets/scss/variables.scss";
@import "~/assets/scss/mixin.scss";
.link-lists{
  margin-bottom: 54px;
  .link-list-wrapper{
    margin: 2px 0;
    .link-box{
      display: inline-block;
      position: relative;
      padding: 12px 18px;
      background: $theme-navy;
      .link-title{
        @include noto-font(1.6rem,#fff);
        padding-right: 30px;
      }
      .link-icon{
        position: absolute;
        margin: auto;
        top: 0;
        right: 18px;
        bottom: 0;
        display: block;
        width: 16px;
        height: 16px;
      }
    }
  }
}
</style>