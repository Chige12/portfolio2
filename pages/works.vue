<template lang="pug">
  .nuxt
    .works
      WorkContents(:url_hash="urlHash" :contents="contents" ref="work_contents" @header-state="headerState").pre-workcontents
      Header(:now_page="now_page" ref="header")
    GlobalMenu(:now_page="now_page")
</template>
<script>
import Header from '~/components/header.vue'
import GlobalMenu from '~/components/globalMenu.vue'
import WorkContents from '~/components/work/contents.vue'
import contents_data from '~/assets/json/works.json'

export default {
  components: {
    Header,
    GlobalMenu,
    WorkContents
  },
  watch: {
    '$route': 'getUrlHash'
  },
  mounted() {
    this.$nextTick(() => {
      this.getUrlHash();
    });
  },
  data() {
    return {
      now_page:"Works",
      tags:["design","video","web","illust","others"],//hashからfilteringするタグ
      urlHash: "",
      contents: contents_data
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
          this.OpenContent(this.urlHash);
        }
      }else{
        //call child method
        this.$refs.work_contents.tagReset();
      }
    }
  }
}
</script>
<style lang="scss">
@import "~/assets/scss/variables.scss";
@import "~/assets/scss/mixin.scss";
.nuxt {padding: 18px 0;}
.works {
  position: relative;
  .pre-workcontents {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: calc(100vh - 36px);
  }
}
</style>