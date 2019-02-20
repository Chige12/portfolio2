<template lang="pug">
  .skills
    .skills-title
      .skills-title-line
      .skills-title-box Skills
</template>
<script>
export default {

}
</script>
<style lang="scss">
@import "~/assets/scss/variables.scss";
@import "~/assets/scss/mixin.scss";
.skills {
  margin-top: 100px;
  .skills-title {
    position: relative;
    width: 100%;
    height: 2rem;
    .skills-title-line {
      position: absolute;
      margin: auto;
      width: calc(80%);
      height: 1px;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: $theme-navy;
      margin: auto;
      z-index: -1;
    }
    .skills-title-box {
      margin: auto;
      width: 160px;
      height: 2rem;
      text-align: center;
      background: #fff;
      @include roboto-medium(2rem);
    }
  }
}
</style>
