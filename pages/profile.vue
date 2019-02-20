<template lang="pug">
  .nuxt
    .profile
      .profile_wrapper(@scroll="headerState")#scroll_wrapper
        .profile_menu
          nuxt-link(v-scroll-to="'#top'" to :class="{'profile-link-now':link_now=='top'}").profile-link
            .now-line
            .profile-link-text Profile Top
          nuxt-link(v-scroll-to="'#skills'" to :class="{'profile-link-now':link_now=='skills'}").profile-link
            .now-line
            .profile-link-text Skills
          nuxt-link(v-scroll-to="'#experiences'" to :class="{'profile-link-now':link_now=='experiences'}").profile-link
            .now-line
            .profile-link-text Experiences
          nuxt-link(v-scroll-to="'#socials'" to :class="{'profile-link-now':link_now=='socials'}").profile-link
            .now-line
            .profile-link-text Socials
        .profile_main
          ProfileTop.profile_lists#top
          Skills.profile_lists#skills
          Experiences.profile_lists#experiences
          Socials.profile_lists#socials
      Header(:now_page="now_page" ref="header")
</template>
<script>
import Header from '~/components/header.vue'
import Topics from '~/components/index/topics.vue'
import ProfileTop from '~/components/profile/top.vue'
import Skills from '~/components/profile/skills.vue'
import Experiences from '~/components/profile/experiences.vue'
import Socials from '~/components/profile/socials.vue'

export default {
  components: {
    Header,
    Topics,
    ProfileTop,
    Skills,
    Experiences,
    Socials
  },
  data() {
    return {
      now_page:"Profile",
      header_state_once:true,
      rects: {},
      link_now: "top",
    }
  },
  mounted() {
    this.$nextTick(() => {
      var top = document.getElementById('top');
      var skills = document.getElementById('skills');
      var experiences = document.getElementById('experiences');
      var socials = document.getElementById('socials');
      this.rects = {
        top : top.getBoundingClientRect(),
        skills : skills.getBoundingClientRect(),
        experiences : experiences.getBoundingClientRect(),
        socials : socials.getBoundingClientRect()
      }
    });
  },
  methods: {
    headerState(e){
      //headerの開閉処理
      if(e.target.scrollTop <= 180){
        if(this.header_state_once == false){
          this.$refs.header.headerState("Open");//Header Open
          this.header_state_once = true;
        }
      }else if(this.header_state_once == true){
          this.$refs.header.headerState("Fold");//Header Fold
          this.header_state_once = false;
      }
      //side-menu
      var offset = 300;
      var last_items = []
      var priority = false
      for (const key in this.rects) {
        if(e.target.scrollTop >= this.rects[key].top - offset && //要素の上辺が、画面の上辺からoffset分下の位置より上にある時から
          e.target.scrollTop < this.rects[key].top+this.rects[key].height + offset){ //要素の下辺が画面の上辺からoffset分下の位置より上にある時まで
            if(this.link_now !== String(key)){
              this.link_now = String(key)
            }
        }
        var height = document.documentElement.clientHeight
        if(e.target.scrollTop+height >= this.rects[key].top+this.rects[key].height + 18 && //要素の下辺が、画面の下辺より上にある時から
          e.target.scrollTop < this.rects[key].top - offset){ //要素の上辺が、画面の上辺からoffset分下の位置より下ある時まで
            if (last_items.indexOf(key) == -1){
              last_items.push(key)
              priority = true
            }
        }
      }
      if(priority == true){
        console.log(last_items)
        this.link_now = String(last_items[last_items.length - 1])
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
    .profile_menu {
      position: fixed;
      top: 188px;
      left: 35px;
      width: 170px;
      height:auto;
      .profile-link {
        position: relative;
        display: block;
        padding: 6px 0;
        .profile-link-text {
          @include roboto-medium(1.6rem);
          line-height: 1.9rem;
          color: $theme-gray-text;
          transition: .3s $bezier-fast-ease-out;
          background: #fff;
          padding-right: 20px;
          display: inline-block;
          width: auto;
        }
        .now-line {
          position: absolute;
          display: block;
          margin: auto;
          top: 0;
          bottom: 0;
          right: 0;
          width: 0;
          height: 1px;
          background: $theme-navy;
          transition: .3s $bezier-fast-ease-out;
          z-index: -1;
        }
        &:hover {
          .profile-link-text {
            padding-left: 4px;
            padding-right: 20px - 4px;
            color: $theme-gray-2;
          }
          .now-line {
            width: 20px;
          }
        }
        &-now {
          .profile-link-text {
            padding-left: 4px;
            padding-right: 20px - 4px;
            font-size: 1.7rem;
            color: $theme-navy;
          }
          .now-line {
            width: 100% !important;
          }
        }
      }
    }
    .profile_main {
      padding-top: 170px;
      padding-left: 170px + 35px + 26px;
      padding-right: 365px + 45px + 26px;
      .profile_lists {
        margin-bottom: 30px;
      }
    }
  }
}
</style>
