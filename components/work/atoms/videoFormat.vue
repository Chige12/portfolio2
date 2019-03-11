<template lang="pug">
.video-format
  .video-title 
  .embedded(v-if="nowContent.content.video.embedded")
    .video-wrapper(v-html="nowContent.content.video.url_tag")
  .notembedded(v-if="nowContent.content.video.embedded==false")
    .video-box(v-for="video in nowContent.content.video.link")
      video.video(:src="`../img/works/contents/${nowContent.id}/${video}`" loop autoplay controls)
</template>
<script>
export default {
  props: ["nowContent"]
}
</script>
<style lang="scss" scoped>
@import "~/assets/scss/variables.scss";
@import "~/assets/scss/mixin.scss";
.video-format {
  margin: 30px 0;
  margin-bottom: 54px;
}
.notembedded{
  display: flex;
  flex-wrap: nowrap;
  .video-box{
    width: 100%;
    padding: 2px;
    video{
      width: 100%;
      height: auto;
    }
  }
}

</style>