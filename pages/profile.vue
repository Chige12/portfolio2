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
