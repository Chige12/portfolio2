<template lang="pug">
  .nuxt
    .works
      Header(:now_page="now_page")
      WorkContents(:url_hash="urlHash" :contents="contents" ref="contents")
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
      tags:["design","video","web","illust","others"],
      urlHash: "",
      contents: contents_data
    }
  },
  methods: {
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
          this.$refs.contents.hashTag(this.urlHash.slice(1))
        }else{
          this.OpenContent(this.urlHash);
        }
      }
    }
  }
}
</script>
<style lang="scss">
@import "~/assets/scss/variables.scss";
@import "~/assets/scss/mixin.scss";
.nuxt {padding: 18px 0;}
</style>