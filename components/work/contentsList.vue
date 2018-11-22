<template lang="pug">
  .contents-list
    .contents-list-wrapper
      .contents-box(v-for="(content,content_id) in contents")
        nuxt-link(:to="'./works#'+content.id").content-link
          .content-img-cover
            video(v-if="content.top_video" :src="`img/works/${content.top_video}`" autoplay loop muted).content-img
            img(v-if="content.top_img" :src="`img/works/${content.top_img}`").content-img
            .open-info-cover
              .stripe
              font-awesome-icon(icon="info-circle").open-info-icon
          .content-date
            .content-date-box
              font-awesome-icon(icon="clock").date-icon
              .date-text {{content.date}}
          .content-title {{content.title}}
        .content-info
          .info-tag(v-if="content.tags")
            font-awesome-icon(icon="tag" v-if="content.tags.length == 1" :class="'info-tag-icon-'+content.tags[0]" @click="ToggleTag(content_id)").info-tag-icon
            font-awesome-icon(icon="tags" v-if="content.tags.length > 1" :class="'info-tags-icon-'+content.tags[0]" @click="ToggleTag(content_id)").info-tags-icon
            ul.content-tags
              li.taglist(v-for="tag in content.tags" @click="toggleFilterTag(tag)")
                .taghole(:class="'taghole-'+tag")
                .tagname(:class="'tagname-'+tag")
                  span(:class="{'no-slide':!filterTagCheck(tag)}") {{tag}}
                  font-awesome-icon(icon="circle" v-if="filterTagCheck(tag)").check-icon.check-icon-circle
                  font-awesome-icon(icon="plus-circle" v-if="filterTagCheck(tag)").check-icon.check-icon-plus
                  font-awesome-icon(icon="check-circle" v-else="filterTagCheck(tag)").check-icon
</template>
<script>
//{'color': TagIconColor(content.tags[0]),'padding':'3px'}
//{'color': TagIconColor(content.tags[0]),'padding':'2px'}
export default {
  props: ["filter","contents"],
  data () {
    return {
    }
  },
  mounted () {
    console.log(this.tagFiltering());
  },
  methods: {
    toggleFilterTag(tag){
      this.$emit('toggleFilter',tag);
    },
    ToggleDate(content_id){
      var content_date = document.getElementsByClassName('content-date-box');
      content_date[content_id].classList.toggle("content-date-box-lock");
    },
    ToggleShowTag(eye){
      var info_tags = document.getElementsByClassName('info-tag');
      if(info_tags.length){
        if(eye=='Display'){
          for (let i = 0; i < this.contents.length; i++) {
            info_tags[i].classList.add("info-tag-click");
          }
        }else if(eye=='Remove'){
          for (let i = 0; i < this.contents.length; i++) {
            info_tags[i].classList.remove("info-tag-click");
          }
        }
      }
    },
    ToggleTag(content_id){
      var info_tags = document.getElementsByClassName('info-tag');
      info_tags[content_id].classList.toggle("info-tag-click");
    },
    filterTagCheck(tag){
      if(this.filter.tags.indexOf(tag) == -1){
        return true;
      }else{
        return false;
      }
    },
    //filteredContentsに使用
    tagFiltering(){
      var filteredTagContents = [];
      if(this.filter.tags == []){
        filteredTagContents = this.contents;
      }else{
        for (let i = 0; i < this.contents.length; i++) {
          //tagがそのcontentに含まれていたらそのcontentを追加
          for (let j = 0; j < this.filter.tags.length; j++){
            if(this.contents[i].tags.indexOf(this.filter.tags[j]) !== -1 ){
              filteredTagContents.push(this.contents[i]); break;
            }
          }
        }
      }
      return filteredTagContents;
    },
  },
  computed: {
    filteredContents() {
      var seachArray = this.filter.search.split(/\s+/);//seachのtextを配列にする
      //var tagFiltered = this.tagFiltering();//タグでfiltering済みの配列

      var filterCon1 = []
      //関連度の高いものから表示
      for (let i = 0; i < tagFiltered.length; i++) {  
      }
    }
  }
}
</script>
<style lang="scss">
@import "~/assets/scss/variables.scss";
@import "~/assets/scss/mixin.scss";
.contents-list {
  width: 100%;
  padding-right: 410px + 45px - 4px;
  padding-left: 35px + 170px + 26px - 4px;
  .contents-list-wrapper {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    height: auto;
    padding-top: 170px;
    .contents-box{
      position: relative;
      width: calc(100% / 3);
      height: 270px;
      padding: 4px;
      margin-bottom: 20px;
      .content-link {
        position: relative;
        display: block;
        width: 100%;
        height: 100%;
        transition: .3s $bezier-fast-ease-out;
        overflow: hidden;
        .content-img-cover {
          position: relative;
          overflow: hidden;
          width: 100%;
          height: 210px;
          .content-img {
            display: block;
            width: 100%;
            height: 210px;
            object-fit: cover;
          }
          .open-info-cover {
            position: absolute;
            width: 100%;
            height: 0;
            top: 0;
            left: 0;
            background: rgba($theme-navy,0.5);
            transition: .3s $bezier-fast-ease-out;
            overflow: hidden;
            .stripe {
              @include stripe(.5s,$theme-navy);
              width: 100%;
            }
            .open-info-icon {
              position: absolute;
              width: 80px;
              height: 80px;
              margin: auto;
              color: white;
              top: 0;
              bottom: 0;
              left: 0;
              right: 0;
              transform: translateY(200%);
              transition: .3s $bezier-fast-ease-out;
            }
          }
        }
        .content-date {
          position: absolute;
          top: 8px;
          left: 8px;
          .content-date-box {
            background: #fff;
            display: flex;
            padding: 4px 6px;
            @include noto-font(1.4rem,$theme-navy);
            transform: translateY(-34px);
            transition: .2s $bezier-fast-ease-out;
            .date-icon {
              padding-top: 1px;
            }
            .date-text {
              padding-left: 3px;
              padding-bottom: 1px;
            }
          }
          &:hover {
            .content-date-box {
              transform: translateY(0);
            }
          }
          .content-date-box-lock {
            transform: translateY(0);
          }
        }
        &:hover{
          background: rgba($theme-gray-li,0.4);
          .content-img-cover {
            .open-info-cover {
              height: 100%;
              .open-info-icon {
                transform: translateY(0);
              }
            }
          }
        }
      }//end .content-link
      .content-title {
        @include noto-font(1.8rem,$theme-navy);
        font-weight: 700;
        padding-top: 15px;
        padding-left: 32px;
        transition: .3s $bezier-fast-ease-out;
      }
      .content-info {
        position: absolute;
        left: 4px;
        bottom: 18px;
        display: flex;
        .info-tag {
          position: relative;
          cursor: pointer;
          margin: 0;
          padding: 0;
          .info-tag-icon,.info-tags-icon {
            width: 26px;
            height: 26px;
            padding: 2px;//tagとtagsで異なる
            font-size: 22px;
            margin-top: 12px;
            color:$theme-gray-2;
            transform: rotateZ(0deg);
            transition: .2s $bezier-fast-ease-out;
            &-design  {color:$theme-green-1}
            &-video   {color:$theme-mint-1}
            &-web     {color:$theme-navy}
            &-illust  {color:$theme-pink}
          }
          .info-tag-icon {
            padding: 3px;
          }
          ul.content-tags {
            position: absolute;
            top: -36px;
            left: 4px;
            list-style: none;
            display: inline-flex;
            width: 402px;
            padding: 0;
            margin: 0;
            overflow: hidden;
            pointer-events: none;
            li.taglist {
              width: auto;
              display: flex;
              padding: 6px 2px;
              @include noto-font(1.4rem,#fff);
              line-height: 1.5rem;
              cursor: pointer;
              pointer-events: auto;
              transform: translateY(34px);
              &:nth-child(1){transition: .3s 0s $bezier-fast-ease-out;}
              &:nth-child(2){transition: .3s .05s $bezier-fast-ease-out;}
              &:nth-child(3){transition: .3s .1s $bezier-fast-ease-out;}
              &:nth-child(4){transition: .3s .15s $bezier-fast-ease-out;}
              &:nth-child(5){transition: .3s .2s $bezier-fast-ease-out;}
              &:nth-child(6){transition: .3s .25s $bezier-fast-ease-out;}
              .taghole {
                width: 0;
                border-top: 5px solid transparent;
                border-bottom: 5px solid transparent;
                border-right: 5px solid $theme-gray-2;
                height: 100%;
                transition: .3s $bezier-fast-ease-out;
                &-design {border-right: 5px solid $theme-green-1};
                &-video  {border-right: 5px solid $theme-mint-1};
                &-web    {border-right: 5px solid $theme-navy};
                &-illust {border-right: 5px solid $theme-pink};
              }
              .tagname {
                position: relative;
                background: $theme-gray-2;
                padding: 4px 10px 6px 14px;
                transition: .2s $bezier-fast-ease-out;
                &-design {background: $theme-green-1}
                &-video  {background: $theme-mint-1};
                &-web    {background: $theme-navy};
                &-illust {background: $theme-pink};
                span {
                  display: block;
                  transform: translateX(0px);
                  transition: .2s $bezier-fast-ease-out;
                  &.no-slide {
                    transform: translateX(4px);
                  }
                }
                .check-icon{
                  position: absolute;
                  margin: auto;
                  top:0;
                  bottom: 0;
                  left: 0;
                  font-size: 14px;
                  line-height: 1.5rem;
                  color: white;
                  opacity: 1;
                  transition: all .2s $bezier-fast-ease-out;
                  &-plus {
                    transform:scale(.34) translateX(-14px) translateY(-2px);
                  }
                  &-circle {
                    transform:scale(.34) translateX(-14px) translateY(-2px);
                    opacity: 1;
                  }
                }

              }
            }
          }//end ul.content-tags
          &:hover {
            .info-tag-icon,.info-tags-icon {
              transform: rotateZ(45deg);
            }
            ul.content-tags {
              li.taglist {
                transform: translateY(0);
                &:hover {
                  transform: translateY(0);
                  .tagname {
                    span {transform: translateX(4px);}
                    .check-icon {
                      position: absolute;
                      margin: auto;
                      top:0;
                      bottom: 0;
                      left: 0px;
                      font-size: 14px;
                      line-height: 14px;
                      color: white;
                      &-plus {
                        transform:scale(1) translateX(0);
                      }
                      &-circle {
                        transform:scale(1) translateX(0);
                        opacity: 0;
                      }
                    }
                  }
                }
              }
            }
          }
        }
        .info-tag-click {
          .info-tag-icon,.info-tags-icon {
            transform: rotateZ(90deg);
          }
          &:hover {
            .info-tag-icon,.info-tags-icon {
              transform: rotateZ(90deg);
            }
          }
          ul.content-tags {
            li.taglist {
              transform: translateY(0);
            }
          }
        }
      }
    }
  }
}
</style>
