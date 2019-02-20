<template lang="pug">
  .work_contents
    .contents_wrapper#contents_wrapper(@scroll="headerState")
      ContentsMenu(:filter="filter" :url_hash="url_hash" :contents="contents" ref="contents_menu" @ToggleShowTag="ToggleShowTag")
      ContentsList(:filter="filter" :contents="contents" ref="contents_list" @toggleFilter="toggleFilterTag" @OpenDetail="OpenDetail").contents_list
      
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
  mounted() {
    //子のcomputed（検索結果のコンテンツ）にアクセス
    this.$watch(() => this.$refs.contents_list.filteredContents, (value) => { this.rewriteFC(value);})
  },
  data () {
    return {
      filter:{
        search:"",
        tags:[],
      },
      header_state_once: true
    }
  },
  methods: {
    headerState(e){
      if(e.target.scrollTop <= 180){
        if(this.header_state_once == false){
          this.$emit('header-state',"Open");
          this.$refs.contents_menu.headerState(false);
          this.header_state_once = true;
          console.log("false")
        }
      }else if(this.header_state_once == true){
          this.$emit('header-state',"Fold");
          this.$refs.contents_menu.headerState(true);
          this.header_state_once = false;
          console.log("true")
      }
    },
    tagReset(){
      this.filter.tags = [];
    },
    rewriteFC(contents){
      this.$emit('rewriteFC',contents);
    },
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
    },
    OpenDetail(rect,content_id){
      this.$emit('OpenDetail',rect,content_id);
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
