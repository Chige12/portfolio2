<template lang="pug">
  .nuxt
    .works
      WorkContents(:url_hash="urlHash" :contents="contents" ref="work_contents" @header-state="headerState" @rewriteFC="rewriteFC").pre-workcontents
      Header(:now_page="now_page" ref="header")
    GlobalMenu(:now_page="now_page")
    ContentsDetail(:url_hash="urlHash" :contents="contents" :open="detail_open" :filtered_contents="filtered_contents")
</template>
<script>
import Header from '~/components/header.vue'
import GlobalMenu from '~/components/globalMenu.vue'
import WorkContents from '~/components/work/contents.vue'
import ContentsDetail from '~/components/work/contentsDetail.vue'
import contents_data from '~/assets/json/works.json'

export default {
  components: {
    Header,
    GlobalMenu,
    ContentsDetail,
    WorkContents
  },
  watch: {
    '$route': 'getUrlHash'
  },
  mounted() {
    var temp_contents = contents_data
    for (let i = 0; i < temp_contents.length; i++) {
      temp_contents[i].state = {};
      temp_contents[i].state.box_lock = false;
      temp_contents[i].state.tag_eye = false;
    }
    this.contents = temp_contents;
    this.filtered_contents = temp_contents;

    this.$nextTick(() => {
      this.getUrlHash();
    });
  },
  data() {
    return {
      now_page:"Works",
      tags:["design","video","web","illust","others"],//hashからfilteringするタグ
      urlHash: "",
      contents: [],
      filtered_contents: [],
      detail_open: false,
      detail_close_once: false
    }
  },
  methods: {
    headerState(state){
      this.$refs.header.headerState(state);
    },
    OpenContent(urlHash){
      var hoge = 1
    },
    getUrlHash () {
      this.urlHash = location.hash;
      if(this.urlHash){
        var tag = false;
        console.log(this.urlHash);
        for (let i = 0; i < this.tags.length; i++) {
          if(this.urlHash == "#"+this.tags[i]){ tag = true; }
        }
        if(tag==true){//hashがtagなら
          //call child method
          this.$refs.work_contents.hashTag(this.urlHash.slice(1));
        }else{
          this.$nextTick(() => {
            this.detail_open = true;
            this.detail_close_once = true;
          })
          this.OpenContent(this.urlHash);
        }
      }else{
        //call child method
        this.detail_open = false;
        if(this.detail_close_once = false){
          this.$refs.work_contents.tagReset();
        }
        this.detail_close_once = false;
      }
    },
    rewriteFC(contents){
      this.filtered_contents = contents;
    }
  }
}
</script>
<style lang="scss">
@import "~/assets/scss/variables.scss";
@import "~/assets/scss/mixin.scss";
.nuxt {padding: 18px 0;height: 100%;}
.works {
  height: 100%;
  position: relative;
  .pre-workcontents {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
}
</style>