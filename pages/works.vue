<template lang="pug">
  .nuxt
    .works
      Header(:now_page="now_page")
    GlobalMenu(:now_page="now_page")
</template>
<script>
import Header from '~/components/header.vue'
import GlobalMenu from '~/components/globalMenu.vue'
import Topics from '~/components/index/topics.vue'

export default {
  components: {
    Header,
    GlobalMenu,
    Topics
  },
  watch: {
    '$route': 'getUrlHash'
  },
  mounted() {
    this.urlHash = location.hash;
    this.getUrlHash();
  },
  data() {
    return {
      now_page:"Works",
      tags:["design","video","web","illust","others","programming"],
      urlHash:""
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
          if(this.urlHash == "#"+this.tags[i]){
            tag = true;
          }
        }
        if(tag==false){
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