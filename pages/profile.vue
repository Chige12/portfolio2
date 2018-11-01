<template lang="pug">
  .nuxt
    .profile
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
  data() {
    return {
      now_page:"Profile"
    }
  }
}
</script>
<style lang="scss">
@import "~/assets/scss/variables.scss";
@import "~/assets/scss/mixin.scss";
.nuxt {padding: 18px 0;}
</style>
