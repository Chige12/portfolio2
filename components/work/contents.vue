<template lang="pug">
  .work_contents
    .contents_wrapper
      ContentsMenu(:url_hash="url_hash" :contents="contents" ref="contents_menu")
      ContentsList( :contents="contents" ref="contents_list").contents_list
</template>

<script>
import ContentsMenu from '~/components/work/contentsMenu.vue'
import ContentsList from '~/components/work/contentsList.vue'

export default {
  components:{
    ContentsMenu,
    ContentsList
  },
  props: ["url_hash","contents"],
  data () {
    return {
      filter:{
        serch:[],
        tags:[]
      }
    }
  },
  methods: {
    hashTag(tag){
       this.$refs.contents_menu.hashTag(tag);
    },
  }
}
</script>

<style lang="scss">
@import "~/assets/scss/variables.scss";
@import "~/assets/scss/mixin.scss";
.work_contents {
  width: 100%;
  padding-right: 410px;
  .contents_wrapper {
    width: 100%;
    display: flex;
    padding-left: 35px;
    .contents_list {
      width: calc(100% - 170px);
      padding: 45px;
    }
  }
}
</style>
