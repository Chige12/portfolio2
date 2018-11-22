<template lang="pug">
  .contents_menu(:class="{'contents_menu_fold':contents_menu_fold}")
    .menu_heading Keyword search
    .menu_content
      input(type="text" v-model="filter.search").search
    .tag-watch(@click="toggleEye()")
      .tag-watch-text {{eye}}
      font-awesome-icon(icon="eye" v-if="eye=='Hide all tags'").eye-icon
      font-awesome-icon(icon="eye-slash" v-if="eye=='Show all tags'").eye-icon
    .menu_heading Tag filtering
    .menu_content.tags
      .taglist(v-for="(TagList,topic_id) in TagsList" @click="toggleFilterTag(TagList)")
        .taghole(:class="'taghole-'+TagList" :style="{'border-right': FilterTagholeCheck(TagList)}" )
        .tagname(:class="'tagname-'+TagList" :style="{'background': FilterTagnameCheck(TagList)}" )
          span(:class="{'no-slide':!filterTagCheck(TagList)}") {{TagList}}
          font-awesome-icon(icon="circle" v-if="filterTagCheck(TagList)").check-icon.check-icon-circle
          font-awesome-icon(icon="plus-circle" v-if="filterTagCheck(TagList)").check-icon.check-icon-plus
          font-awesome-icon(icon="check-circle" v-else="filterTagCheck(TagList)").check-icon
</template>
<script>
export default {
  props: ["filter","url_hash","contents"],
  data () {
    return {
      tags:["design","video","web","illust"],//defaultのfilteringタグ
      eye:"Show all tags",//デフォルトでContentsのタグ非表示
      contents_menu_fold:false
    }
  },
  methods: {
    headerState(state){
      this.contents_menu_fold = state;
    },
    toggleEye(){
      if(this.eye=='Show all tags'){
        this.eye = 'Hide all tags'
        this.$emit('ToggleShowTag','Display')
      }else{
        this.eye = 'Show all tags'
        this.$emit('ToggleShowTag','Remove')
      }
    },
    hashTag(tag){//Hash読み込み用
      this.$parent.filter.tags = [];
      switch (tag) {
        case"design": case"video": case"web": case"illust":
          this.$parent.filter.tags.push(tag); break;
        default: 
          for (let i = 0; i < (this.TagsList.length-4); i++) {
            this.$parent.filter.tags.push(this.TagsList[i+4]);
          } break;
      }
    },
    toggleFilterTag(tag){//UI操作用
      if(this.filter.tags.indexOf(tag) == -1){
        this.$parent.filter.tags.push(tag);//tag追加
      }else{
        this.$parent.filter.tags.splice(this.filter.tags.indexOf(tag),1);//tag削除
      }
    },
    filterTagCheck(tag){
      if(this.filter.tags.indexOf(tag) == -1){
        return true;
      }else{
        return false;
      }
    },
    FilterTagholeCheck(tag){
      if(this.filter.tags.indexOf(tag) != -1){
        switch (tag) {
          case"design": return "6px solid #73833f"; break; //$theme-green-1
          case"video":  return "6px solid #479a89"; break; //$theme-mint-1
          case"web":    return "6px solid #343141"; break; //$theme-navy
          case"illust": return "6px solid #C42A66"; break; //$theme-pink
          default:      return "6px solid #707069"; break; //$theme-gray-2
        }
      }
    },
    FilterTagnameCheck(tag){
      if(this.filter.tags.indexOf(tag) != -1){
        switch (tag) {
          case"design": return "#73833f"; break; //$theme-green-1
          case"video":  return "#479a89"; break; //$theme-mint-1
          case"web":    return "#343141"; break; //$theme-navy
          case"illust": return "#C42A66"; break; //$theme-pink
          default:      return "#707069"; break; //$theme-gray-2
        }
      }
    }
  },
  computed: {
    TagsList(){
      var tagsList = this.tags;
      for (let i = 0; i < this.contents.length; i++) {
        for (let j = 0; j < this.contents[i].tags.length; j++) {
          if(tagsList.indexOf(this.contents[i].tags[j]) == -1){
            tagsList.push(this.contents[i].tags[j]);
          }
        }
      }
      return tagsList;
    }
  }
}
</script>
<style lang="scss">
@import "~/assets/scss/variables.scss";
@import "~/assets/scss/mixin.scss";
.contents_menu {
  position: fixed;
  top: 18px + 170px;
  left: 35px;
  width: 170px;
  pointer-events: none;
  transition: .3s $bezier-fast-ease-out;
  .tag-watch{
    display: flex;
    width: 100%;
    margin: 4px 0;
    margin-bottom: 16px;
    pointer-events: auto;
    cursor: pointer;
    color: $theme-gray-text;
    .tag-watch-text {
      @include roboto-medium(1.4rem);
      padding: 2.4px 0;
      width: 9rem;
    }
    .eye-icon {
      font-size: 20px;
      padding: 2px;
    }
  }
  .menu_heading {
    @include roboto-medium(1.4rem);
    color: $theme-gray-text;
    margin: 4px 0;
  }
  .menu_content {
    margin-bottom: 16px;
    .search {
      padding: 4px;
      width: 170px;
      @include noto-font(1.4rem,$theme-gray-text);
      border: 1px solid $theme-gray;
      pointer-events: auto;
    }
    .taglist {
      width: auto;
      display: flex;
      margin: 2px;
      @include noto-font(1.5rem,#fff);
      line-height: 1.6rem;
      cursor: pointer;
      pointer-events: auto;
      .taghole {
        width: 0;
        border-top: 6px solid transparent;
        border-bottom: 6px solid transparent;
        border-right: 6px solid $theme-gray-1;
        height: 100%;
        transition: .2s $bezier-fast-ease-out;
      }
      .tagname {
        position: relative;
        background: $theme-gray-1;
        padding: 4px 12px 6px 16px;
        transition: .2s $bezier-fast-ease-out;
        span {
          display: block;
          transform: translateX(0);
          transition: .2s $bezier-fast-ease-out;
          &.no-slide {
            transform: translateX(4px);
          }
        }
        .check-icon {
          position: absolute;
          margin: auto;
          top:0;
          bottom: 0;
          left: 0;
          font-size: 14px;
          line-height: 14px;
          color: white;
          transition: all .2s $bezier-fast-ease-out;
          &-plus {
            transform:scale(.36) translateX(-12px);
          }
          &-circle {
            transform:scale(.36) translateX(-12px);
            opacity: 1;
          }
        }
      }
      &:hover {
        .taghole { 
          border-right: 6px solid $theme-gray-2;
          &-design {border-right: 6px solid $theme-green-1;}
          &-video  {border-right: 6px solid $theme-mint-1;}
          &-web    {border-right: 6px solid $theme-navy;}
          &-illust {border-right: 6px solid $theme-pink;}
        }
        .tagname {
          background: $theme-gray-2;
          &-design {background: $theme-green-1;}
          &-video  {background: $theme-mint-1;}
          &-web    {background: $theme-navy;}
          &-illust {background: $theme-pink;}
          span {
            transform: translateX(4px);
          }
          .check-icon {
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
  .menu_content.tags {
    display:flex;
    flex-wrap: wrap;
  }
}
.contents_menu_fold {
  top: 18px + 170px;
} 
</style>
