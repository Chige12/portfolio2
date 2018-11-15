<template lang="pug">
  .work_contents
    .contents_wrapper
      .contents_menu
        .menu_heading Search
        .menu_content
          input(type="text").search
        .menu_heading Tags
        .menu_content.tags
          .taglist(v-for="TagList in TagsList")
            nuxt-link(:to="'./works#'+TagList") {{TagList}}
      .contents_list
</template>

<script>
export default {
  props: ["url_hash","contents"],
  data () {
    return {
      tags:["design","video","web","illust"]
    }
  },
  methods: {
    
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
.work_contents {
  width: 100%;
  padding-right: 410px;
  .contents_wrapper {
    width: 100%;
    display: flex;
    padding-left: 35px;
    .contents_menu {
      width: 170px;
      .menu_heading {
        @include roboto-medium(1.3rem);
        color: $theme-gray-text;
        margin: 2px 0;
      }
      .menu_content {
        margin-bottom: 12px;
        .search {
          padding: 4px;
          width: 170px;
          @include noto-font(1.4rem,$theme-gray-text);
          border: 1px solid $theme-gray;
        }
        .taglist {
          width: auto;
          display: inline-block;
          margin: 2px;
          padding: 4px 8px 5px;
          border-radius: 4px;
          background: $theme-gray;
          transition: .2s $bezier-fast-ease-out;
          &:hover {
            background: $theme-navy;
          }
          a {
            @include noto-font(1.4rem,#fff);
          }
        }
      }
      .menu_content.tags {
        display:flex;
        flex-wrap: wrap;
      }

    }
    .contents_list {
      width: calc(100% - 170px);
      padding: 45px;
    }
  }
}
</style>
