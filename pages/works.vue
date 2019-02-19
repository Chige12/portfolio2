<template lang="pug">
  .nuxt
    .works
      WorkContents(:url_hash="urlHash" :contents="contents" ref="work_contents" @header-state="headerState" @rewriteFC="rewriteFC" @OpenDetail="OpenDetail").pre-workcontents
      Header(:now_page="now_page" ref="header")
    ContentsDetail(:url_hash="urlHash" :contents="contents" :open="detail_open" :filtered_contents="filtered_contents" ref="contents_detail")
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
    ContentsDetail,
    WorkContents
  },
  watch: {
    '$route': 'getUrlHash'
  },
  mounted() {
    var temp_contents = contents_data
    var temp_state = {
      box_lock:false,
      tag_eye:false
    }
    for (let i = 0; i < temp_contents.length; i++) {
      temp_contents[i].state = temp_state;
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
    getUrlHash () {
      this.urlHash = location.hash;
      if(this.urlHash){
        var tag = false;
        console.log(this.urlHash);
        for (let i = 0; i < this.tags.length; i++) {
          if(this.urlHash == "#"+this.tags[i]){ tag = true; }
          break;
        }
        if(tag==true){//hashがtagなら
          //call child method
          this.$refs.work_contents.hashTag(this.urlHash.slice(1));
        }else{
          this.$nextTick(() => {
            this.detail_open = true;
            this.detail_close_once = true;
          })
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
    },
    OpenDetail(rect,content_id){
      this.$refs.contents_detail.OpenDetail(rect,content_id);
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