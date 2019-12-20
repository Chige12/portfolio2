<template lang="pug">
  .provisional
    .container
      h1 こちらは ちげ の仮のポートフォリオサイトです。
      p 現在、
        nuxt-link(to="/") https://chige12.work（ポートフォリオサイト）
        | を改修中なので、スタイルが崩れたりしています。
      p PCの方はある程度みれる状態だと思うので、ぜひアクセスしてみてください。
      p スマホの方のためにも完成するまでの間、こちらに必要最低限の情報を載せておこうと思います。

    .container
      h2 SNS
      ul
        li
          p Mail : tige1215.technic[at]gmail.com
        li(v-for="sns in snss")
          a(:href="sns.link") {{sns.name}} : {{sns.user}}
    .container
      h2 Skills
      ul
        li(v-for="skill in skills")
          p
            | {{skill.small_name}} {{skill.name}}
            span(v-if="skill.sets")  ({{skill.sets}})
    .container
      h2 Works
      .work_lists
        .work_list(v-for="work in works")
          video(v-if="work.top_video" :src="`../img/works/contents/${work.id}/${work.top_video}`" autoplay loop muted).work_content-img
          img(v-if="work.top_img" :src="`../img/works/contents/${work.id}/${work.top_img}`").work_content-img
          h3 {{work.title}}
          p {{work.top_text}}
          p(v-if="work.content.links")
            span Link: 
            a(:href="work.content.links[0].url" )
              span {{work.content.links[0].name}} 
              small ({{work.content.links[0].url}})
</template>
<script>
import links_data from '~/assets/json/links.json'
import skills_data from '~/assets/json/skills.json'
import works_data from '~/assets/json/works.json'
export default {
  layout: 'prev_default',
  data(){
    return {
      snss: links_data,
      skills: skills_data,
      works: works_data
    }
  }
}
</script>
<style lang="scss" scoped>
.provisional {
  max-width: 800px;
  width: auto;
  margin: 18px;
  font-size: 16px;
  line-height: 1.6;
}
.container {
  margin: 60px 0;
}
.work_list {
  margin: 36px 0;
}
.work_content-img {
  max-width: 100%;
  width: 500px;
  display: block;
}
</style>