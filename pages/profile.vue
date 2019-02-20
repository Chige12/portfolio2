<template lang="pug">
  .nuxt
    .profile
      Header(:now_page="now_page" ref="header")
      p 現在制作中です。
</template>
<script>
import Header from '~/components/header.vue'
import Topics from '~/components/index/topics.vue'

export default {
  components: {
    Header,
    Topics
  },
  data() {
    return {
      now_page:"Profile",
    }
  },
  methods: {
    headerState(state){
      this.$refs.header.headerState(state);
    },
    headerState(e){
      if(e.target.scrollTop <= 180){
          this.$emit('header-state',"Open");
          this.$refs.contents_menu.headerState(false);
          this.header_state_once = true;
      }else if(this.header_state_once == true){
          this.$emit('header-state',"Fold");
          this.$refs.contents_menu.headerState(true);
          this.header_state_once = false;
      }
    }
  }
}
</script>
<style lang="scss">
@import "~/assets/scss/variables.scss";
@import "~/assets/scss/mixin.scss";
.nuxt {padding: 18px 0;}
.profile {
  position: relative;
  p {
    font-size: 20px;
    padding-left: 40px;
  }
}
</style>
