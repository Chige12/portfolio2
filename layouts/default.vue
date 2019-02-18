<template lang="pug">
  .layout-default
    .screen-band-top
    .screen-band-bottom
    nuxt
    GlobalMenu
</template>

<script>
import GlobalMenu from '~/components/globalMenu.vue'

export default {
  components: {
    GlobalMenu
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
  color: $theme-navy;
  text-decoration: none;
}
a:visited { color: $theme-navy; }
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

</style>

