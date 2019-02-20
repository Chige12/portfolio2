<template lang="pug">
  .nuxt
    .profile
      Header(:now_page="now_page" ref="header")
      .profile_wrapper(@scroll="headerState")
        //- profileMenu
        //- 
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
      header_state_once:true,
    }
  },
  methods: {
    headerState(e){
      if(e.target.scrollTop <= 180){
        if(this.header_state_once == false){
          this.$refs.header.headerState("Open");//Header Open
          this.header_state_once = true;
        }
      }else if(this.header_state_once == true){
          this.$refs.header.headerState("Fold");//Header Close
          this.header_state_once = false;
      }
    }
  }
}
</script>
<style lang="scss">
@import "~/assets/scss/variables.scss";
@import "~/assets/scss/mixin.scss";
.nuxt {padding: 18px 0;height: 100%;}
.profile {
  height: 100%;
  position: relative;
  .profile_wrapper {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow-y: overlay;
  }
}
</style>
