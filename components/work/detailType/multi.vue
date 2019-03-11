<template lang="pug">
.type-multi
  .columns
    .column.column-left
      DefaultText(v-if="nowContent.content.text" :nowContent="nowContent")
      LinkList(v-if="nowContent.content.links" :nowContent="nowContent")
      VideoFormat(v-if="nowContent.content.video" :nowContent="nowContent")
    .column.column-right
      ImagesList(v-if="nowContent.content.imgs" :nowContent="nowContent")
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
.type-multi{
  margin-bottom: 80px;
  .columns{
    display: flex;
    flex-wrap: nowrap;
    width: 100%;
    .column {
      width: 80%;
      &-left{
        padding-right: 24px;
      }
      &-right{
        padding-left: 0px;
      }
    }
  }
}
</style>

