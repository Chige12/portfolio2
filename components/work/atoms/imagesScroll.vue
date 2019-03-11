<template lang="pug">
.images-scroll
  .images-scroll-wrapper
    .image-oneBox(v-for="(img,img_id) in nowContent.content.imgs" :key="`${img_id}-contentImg`")
      img( :src="`../img/works/contents/${nowContent.id}/${img.src}`")
</template>
<script>
export default {
  props: ["nowContent"]
}
</script>
<style lang="scss" scoped>
@import "~/assets/scss/variables.scss";
@import "~/assets/scss/mixin.scss";
.images-scroll{
  width: 100%;
  height: 380px;
  margin-bottom: 54px;
  .images-scroll-wrapper{
    overflow-x: overlay;
    overflow-y: hidden;
    display: flex;
    flex-wrap: nowrap;
    .image-oneBox{
      img{
        width: auto;
        height: 380px;
        padding-right: 2px;
      }
    }
  }
}
</style>