<template lang="pug">
  .contents-detail
    .c-d-back(:class="{'c-d-back-open': open}")
    .c-d-main(:class="{'c-d-main-open': open}")
      .c-d-wrapper
        .c-d-header
          p.c-d-h-id {{'#' + nowContent.id}}
          .c-d-h-title
            .c-d-h-title-width
              p {{nowContent.title}}
              p.c-d-h-title-display {{nowContent.title}}
          p.c-d-h-top_text {{nowContent.top_text}}
        .c-d-contents
          .c-d-contents-wrapper
            DetailMulti(:content="nowContent" v-if="'multi'== nowContent.type")
            DetailImage(:content="nowContent" v-if="'image'== nowContent.type")
            DetailVideo(:content="nowContent" v-if="'video'== nowContent.type")
        nuxt-link(to="./works" :class="[{'c-d-close-open':open}]" ).c-d-close
          .c-d-close-back(:class="'c-d-close-back-'+ nowContent.tag")
          font-awesome-icon(icon="times").close-icon
        .quick-menu
          .quick-lists
            .quick-list(v-for="(fil_con, fil_con_id) in filtered_contents" :key="fil_con_id + '-fill_con_quick'")
              nuxt-link(:to="'./works#'+fil_con.id" :class="{'click-box-now': url_hash == '#'+fil_con.id}").click-box
                .click-box-back(:class="'click-box-back-'+ fil_con.tags[0]")
          .quick-move
            .quick-move-wrapper
              nuxt-link(:to="'./works#'+moveId(-3)").quick-move-icon.quick-move-icon-up:   font-awesome-icon(icon="angle-up"   ).quick-move-icon-angle
              nuxt-link(:to="'./works#'+moveId(-1)").quick-move-icon.quick-move-icon-left: font-awesome-icon(icon="angle-left" ).quick-move-icon-angle
              nuxt-link(:to="'./works#'+moveId(1)").quick-move-icon.quick-move-icon-right: font-awesome-icon(icon="angle-right").quick-move-icon-angle
              nuxt-link(:to="'./works#'+moveId(3)").quick-move-icon.quick-move-icon-down:  font-awesome-icon(icon="angle-down" ).quick-move-icon-angle
</template>
<script>
import DetailMulti from '~/components/work/detailType/multi.vue'
import DetailImage from '~/components/work/detailType/image.vue'
import DetailVideo from '~/components/work/detailType/video.vue'

export default {
  components: {
    DetailMulti,
    DetailImage,
    DetailVideo
  },
  props: ["url_hash","contents","open","filtered_contents"],
  data () {
    return {
    }
  },
  mounted () {
    window.addEventListener('keydown', (e) => {
      this.KeyDown(e)
    })
  },
  methods: {
    KeyDown(event) {
      var keyCode = event.keyCode;
      console.log(keyCode);
      if(keyCode == 39){//右
        this.$router.push({ path: `./works#${this.moveId(1)}` })
      }
      if(keyCode == 37){//左
        this.$router.push({ path: `./works#${this.moveId(-1)}` })
      }
      if(keyCode == 38){//上
        this.$router.push({ path: `./works#${this.moveId(-3)}` })
      }
      if(keyCode == 40){//下
        this.$router.push({ path: `./works#${this.moveId(3)}` })
      }
      if(keyCode == 8){//backspace
        this.$router.push({ path: `./works` })
      }
    },
    moveId(n){
      var move_id = "";
      var filcons = this.filtered_contents;
      for (var i=0; i < filcons.length; i++) {
        if (this.url_hash == '#'+ filcons[i].id) {
          if (i+n < 0) {
              move_id = filcons[filcons.length-1-((filcons.length- ((i+1)%n) ) % n)].id;
          }else if(i+n >= filcons.length){
            move_id = filcons[(i % n)].id;
          }else{
            move_id = filcons[i+n].id;
          }
          break;
        }
      }
      return move_id;
    }
  },
  computed: {
    nowContent(){
      var now_content = {};
      for (const i in this.filtered_contents) {
        var fil_con = this.filtered_contents[i]
        if (this.url_hash == '#'+ fil_con.id) {
          now_content = fil_con;
          now_content.tag = fil_con.tags[0];
          break;
        }
      }
      return now_content;
    }
  }
}
</script>
<style lang="scss">
@import "~/assets/scss/variables.scss";
@import "~/assets/scss/mixin.scss";
@import "~/assets/scss/animation.scss";

.contents-detail {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  .c-d-back {
    width: 100%;
    height: 100%;
    opacity: 0;
    background: $theme-navy;
    pointer-events: none;
    transition: .3s $bezier-fast-ease-out;
    &-open {
      opacity: 1;
      pointer-events: auto;
    }
  }
  .c-d-main {
    position: absolute;
    top: 0;
    right: 0;
    width: 0%;
    height: 100%;
    padding: 18px;
    transform: translateX(36px);
    background: $theme-navy;
    transition: .4s .2s $bezier-fast-ease-out;
    pointer-events: auto;
    overflow: hidden;
    &-open {
      width: 100%;
      transform: translateX(0);
    }
    .c-d-wrapper{
      position: relative;
      width: 100%;
      height: 100%;
      background: #fff;
      overflow: hidden;
      .c-d-header {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 140px;
        padding: 18px 110px 0px;
        line-height: 1.3;
        p.c-d-h-id {
          @include roboto-medium(1.4rem);
          color: $theme-navy;
        }
        p.c-d-h-top_text {
          padding-top: 6px;
          @include noto-font(1.7rem,$theme-navy);
        }
        .c-d-h-title {
          width: 100%;
          padding-top: 4px;
          @include noto-font(3.2rem,$theme-navy);
          font-weight: 700;
          .c-d-h-title-width {
            position: relative;
            display: inline-block;
            color: transparent;
            user-select: none;
            .c-d-h-title-display {
              user-select: text;
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              pointer-events: auto;
              color: $theme-navy;
            }
          }
        }
      }
      .c-d-contents {
        width: 100%;
        height: 100%;
        padding-right: 86px;
        .c-d-contents-wrapper {
          width: 100%;
          height: 100%;
          padding-top: 140px;
          padding-left: 110px;
          padding-right: 110px - 86px;
          overflow-y: overlay;
        }
      }
      .c-d-close {
        position: absolute;
        top: 0;
        left: 0;
        display: block;
        width: 200px;
        height: 200px;
        background: $theme-gray;
        transform: rotateZ(45deg) translateX(-120%);
        transition: transform .4s .6s $bezier-fast-ease-out;
        cursor: pointer;
        &-open {
          transform: rotateZ(45deg) translateX(-88%);
        }
        .c-d-close-back {
          position: absolute;
          top: 0;
          left: 0;
          display: block;
          width: 200px;
          height: 200px;
          background: $theme-gray;
          transition: .3s $bezier-fast-ease-out;
          &-design {background: $theme-green-1}
          &-video  {background: $theme-mint-1};
          &-web    {background: $theme-navy};
          &-illust {background: $theme-pink};
        }
        .close-icon {
          position: absolute;
          top: 84.5px;
          left: 100px;
          width: 30px;
          height: 30px;
          transform: rotateZ(-45deg);
          font-size:40px;
          color: white;
          transition: .3s $bezier-fast-ease-out;
        }
        &:hover{
          .close-icon {
            left: 156px;
          }
        }
      }
      .quick-menu {
        position: absolute;
        top: 0;
        right: 0;
        width: 86px;
        height: 100%;
        padding: 10px;
        .quick-lists {
          display: flex;
          flex-wrap: wrap;
          width: 100%;
          align-content : flex-start;
          .quick-list {
            padding: 2px;
            .click-box {
              position: relative;
              display: block;
              width: 18px;
              height: 18px;
              background: $theme-gray-li;
              transition: .3s $bezier-fast-ease-out;
              &-now {
                background: $theme-gray-text;
              }
              .click-box-back {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                opacity: 0;
                background: $theme-gray-2;
                transition: .3s $bezier-fast-ease-out;
                &-design {background: $theme-green-1;}
                &-video  {background: $theme-mint-1;}
                &-web    {background: $theme-navy;}
                &-illust {background: $theme-pink;}
              }
              &:hover {
                .click-box-back {
                  opacity: 1;
                }
              }
            }
          }
        }
        .quick-move {
          position: absolute;
          bottom: 0;
          right: 0;
          width: 86px;
          height: 86px;
          padding: 10px;
          .quick-move-wrapper {
            position: relative;
            width: 100%;
            height: 100%;
            .quick-move-icon {
              position: absolute;
              width: 28px;
              height: 28px;
              margin: auto;
              transition: .2s $bezier-fast-ease-out;
              cursor: pointer;
              &-up    {top: 0; left: 0; right: 0;}
              &-left  {top: 0; left: 0; bottom: 0;}
              &-right {top: 0; right: 0; bottom: 0;}
              &-down  {bottom:0; left: 0; right: 0;}
              &-angle {
                width: 28px;
                height: 28px;
                font-size: 40px;
                color: $theme-gray;
                transition: .3s $bezier-fast-ease-out;
              }
              &:hover .quick-move-icon-angle {
                color: $theme-gray-text;
              }
              &-up:hover    {animation : upIcon 1.6s ease infinite;}
              &-left:hover  {animation : prevIcon 1.6s ease infinite;}
              &-right:hover {animation : nextIcon 1.6s ease infinite;}
              &-down:hover  {animation : downIcon 1.6s ease infinite;}
            }
          }
        }
      }
    }
  }
}
</style>

