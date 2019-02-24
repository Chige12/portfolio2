<template lang="pug">
  .links
    .prof-sec-title
      .prof-sec-title-line
      .prof-sec-title-box SNS / Links
    .links-wrapper
      a.link(v-for="link in links" :href="link.link" target="_blank")
        .link-box(:style="`background-color:#${link.color}`")
          img.icon(:src="`../img/icons/${link.icon}.svg`")
          .link-contents
            .link-bg
            .link-text
              .name {{link.name}}
              .user {{link.user}}
            img.link-icon(src="~/assets/img/icon/link.svg")
</template>
<script>
import links_data from '~/assets/json/links.json'
export default {
  data(){
    return {
      links: links_data
    }
  }
}
</script>
<style lang="scss">
@import "~/assets/scss/variables.scss";
@import "~/assets/scss/mixin.scss";
.links {
  margin-top: 100px;
  .links-wrapper {
    margin-top: 40px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    a.link{
      width: calc(100% / 2.6);
      margin: 0.5px;
      .link-box {
        display: flex;
        flex-wrap: nowrap;
        height: auto;
        .icon {
          width: 70px;
          height: 70px;
          padding: 10px;
        }
        .link-contents {
          position: relative;
          width: 100%;
          z-index: 0;
          .link-bg {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(#000,0.3); 
            z-index: -1;
            transition: .4s $bezier-fast-ease-out;
            opacity: 1;
          }
          .link-text {
            height: 70px;
            padding: 8px 0;
            padding-left: 20px;
            overflow: hidden;
            .name {
              @include noto-font(2rem,#fff);
              padding: 15px 0;
              transition: .4s $bezier-fast-ease-out;
            }
            .user {
              @include noto-font(1.2rem,#fff);
              padding-top: 20px;
              transition: .4s $bezier-fast-ease-out;
            }
          }
          .link-icon {
            position: absolute;
            margin: auto;
            top: 0;
            bottom: 0;
            right: 20px;
            width: 18px;
          }
        }
      }
      &:hover {
        .link-box {
          .link-contents {
            .link-bg {
              width: 0%;
              opacity: 0;
            }
            .link-text {
              .name {
                padding-top: 6px;
                padding-bottom: 4px;
              }
              .user {
                padding-top: 0;
              }
            }
          }
        }
      }
    }
  }
}
</style>
