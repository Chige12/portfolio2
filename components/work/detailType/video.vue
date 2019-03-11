<template lang="pug">
.type-video
  VideoFormat(v-if="nowContent.content.video" :nowContent="nowContent")
  DefaultText(v-if="nowContent.content.text" :nowContent="nowContent")
  LinkList(v-if="nowContent.content.links" :nowContent="nowContent")
</template>
<script>
import DefaultText from '~/components/work/atoms/defaultText.vue'
import ImagesList from '~/components/work/atoms/imagesList.vue'
import LinkList from '~/components/work/atoms/linkList.vue'
import VideoFormat from '~/components/work/atoms/videoFormat.vue'

export default {
  props: ["nowContent"],
  components: {
    DefaultText,
    ImagesList,
    LinkList,
    VideoFormat
  }
}
</script>
<style lang="scss">

</style>