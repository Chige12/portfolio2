<template lang="pug">
.images-list
  .images-list-wrapper
    .image-oneBox(v-for="(img,img_id) in nowContent.content.imgs" :key="`${img_id}-contentImg`" @click="OpenBigImage(img.src,img.caption)")
      img( :src="`../img/works/contents/${nowContent.id}/${img.src}`")
      .caption(v-if="img.caption") {{img.caption}}
  .big-image(v-if="imageOpen")
    .background-cover
    img( :src="`../img/works/contents/${nowContent.id}/${openImgsrc}`")
    .caption(v-if="openImgcaption") {{openImgcaption}}
    .close-button(@click="CloseBigImage()")
      font-awesome-icon(icon="times").close-icon

</template>
<script>
export default {
  props: ["nowContent"],
  data(){
    return{
      imageOpen:false,
      openImgsrc:"",
      openImgcaption:""
    }
  },
  methods:{
    OpenBigImage(src,caption){
      this.openImgsrc=src;
      this.openImgcaption=caption;
      this.imageOpen=true;
    },
    CloseBigImage(){
      this.imageOpen=false;
    }
  }
}
</script>
<style lang="scss" scoped>
@import "~/assets/scss/variables.scss";
@import "~/assets/scss/mixin.scss";
.images-list{
  width: 100%;
  margin-bottom: 54px;
  .images-list-wrapper{
    .image-oneBox{
      position: relative;
      margin: 4px;
      cursor: pointer;
      img{
        width: 100%;
        height: auto;
        display: block;
      }
      .caption {
        width: 100%;
        height: 3rem;
        background: #ccc;
        text-align: center;
        @include noto-font(1.4rem,$theme-navy);
        line-height: 3rem;
      }
    }
  }
  .big-image{
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 9999;
    .background-cover {
      width: 100%;
      height: 100%;
      background: $theme-navy;
      opacity: .9;
    }
    img{
      position: fixed;
      display: block;
      margin: auto;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      width: calc(100vw - 60px);
      height: calc(100vh - 36px);
      padding-bottom: 30px;
      object-fit: contain;
    }
    .caption{
      position: fixed;
      bottom: 20px;
      left: 0;
      width: 100%;
      height: 30px;
      text-align: center;
      @include noto-font(1.8rem,#fff);
      padding: 6px 0;
    }
    .close-button{
      position: fixed;
      top: 30px;
      right: 30px;
      display: block;
      width: 100%;
      text-align: center;
      padding: 4px;
      width: 40px;
      height: 40px;
      color: #fff;
      cursor: pointer;
      .close-icon {
        width: 28px;
        height: 28px;
        color: #fff;
        transition: .3s $bezier-fast-ease-out;
      }
      &:hover {
        .close-icon {
          color: $sub-red;
        }
      }
    }
  }
}
</style>