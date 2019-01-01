<template lang="pug">
  .nuxt
    .contact
      Header(:now_page="now_page" ref="header")
      p 現在制作中です。
    GlobalMenu(:now_page="now_page")
</template>
<script>
import Header from '~/components/header.vue'
import GlobalMenu from '~/components/globalMenu.vue'

export default {
  components: {
    Header,
    GlobalMenu
  },
  data() {
    return {
      now_page:"Contact",
    }
  }
}

</script>
<style lang="scss">
@import "~/assets/scss/variables.scss";
@import "~/assets/scss/mixin.scss";
.nuxt {padding: 18px 0;}
.contact {
  position: relative;
  p {
    font-size: 20px;
    padding-left: 40px;
  }
}
</style>