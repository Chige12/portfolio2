<template lang="pug">
  .work_contents
    .contents_wrapper
      ContentsMenu(:filter="filter" :url_hash="url_hash" :contents="contents" ref="contents_menu" @ToggleShowTag="ToggleShowTag")
      ContentsList(:filter="filter" :contents="contents" ref="contents_list" @toggleFilter="toggleFilterTag").contents_list
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
    //ContentsMenu methods
    hashTag(tag){
      this.$refs.contents_menu.hashTag(tag);
    },
    toggleFilterTag(tag){
      this.$refs.contents_menu.toggleFilterTag(tag);
    },
    //ContentsList methods
    ToggleShowTag(eye){
      this.$refs.contents_list.ToggleShowTag(eye);
    }
  }
}
</script>

<style lang="scss">
@import "~/assets/scss/variables.scss";
@import "~/assets/scss/mixin.scss";
.work_contents {
  width: 100%;
  .contents_wrapper {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    overflow-y: overlay;
  }
}
</style>
