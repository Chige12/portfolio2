<template lang="pug">
  .layout-default
    .screen-band-top
    .screen-band-bottom
    nuxt
    GlobalMenu
    .provisional_access_wrapper(v-if="see")
      .provisional_access
        h2 ! 注意 !
        p このページは現在製作中です。
        p 表示時に崩れていない場合は [このまま見る] を、崩れている場合は [仮ページを見る] を押してください。
        .provisional_access__btn_wrapper
          button.provisional_access__btn(@click="seeThisPage()") このまま見る
          button.provisional_access__btn(@click="accessProvi()") 仮ページを見る
</template>

<script>
import GlobalMenu from '~/components/globalMenu.vue'

export default {
  components: {
    GlobalMenu
  },
  data(){
    return {
      see: true
    }
  },
  methods: {
    seeThisPage() {
      this.see = false
    },
    accessProvi() {
      this.$router.push('provisional')
    }
  }
}
</script>

<style lang="scss">
@import "~/assets/scss/normalize.scss";
@import "~/assets/scss/variables.scss";
@import "~/assets/scss/mixin.scss";

html {
  font-family: $noto-font, "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 62.5%;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  margin: 0;
  width: 100%;
  height: 100%;
  color: $theme-navy;
}
body {
  margin: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
*, *:before, *:after {
  box-sizing: border-box;
  margin: 0;
}
a:link { 
  color: $theme-mint;
  text-decoration: none;
}
a:visited { color: $theme-mint; }
:focus {outline: none;}


.layout-default {
  position: relative;
  width: 100vw;
  height: 100vh;
}
.screen-band-top {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 18px;
  background: $theme-navy;
}
.screen-band-bottom {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 18px;
  background: $theme-navy;
}

.provisional_access_wrapper {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba($theme-navy, 0.4);
}
.provisional_access {
  h2 {
    text-align: center;
    margin-bottom: 18px;
  }
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  width: calc(100% - 60px);
  max-width: 800px;
  height: min-content;
  padding: 50px 28px 64px;
  z-index: 99999;
  background: $theme-navy;
  font-size: 18px;
  color: $white;
  line-height: 1.8;
  border-radius: 20px;
  &__btn_wrapper {
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
  }
  &__btn {
    width: 100%;
    padding: 12px 18px;
    margin: 4px;
    background: $white;
    border: none;
    color: $theme-navy;
    cursor: pointer;
    transition: .3s $bezier-fast-ease-out;
    &:hover {
      background: $theme-mint;
    }
  }
}
@media screen and (max-width: 500px) {
  .provisional_access {
    &__btn_wrapper {
      flex-wrap: wrap;
    }
  }
}
</style>

