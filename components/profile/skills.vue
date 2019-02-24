<template lang="pug">
  .skills
    .prof-sec-title
      .prof-sec-title-line
      .prof-sec-title-box Skills
    .skills-box
      .skill(v-for="skill in skills")
        img.icon(:src="`../img/skills/${skill.icon}.svg`")
        .name-box
          .small-name(v-if="skill.small_name") {{skill.small_name}}
          .name {{skill.name}}
          .sets(v-if="skill.sets") {{skill.sets}}
        .description-box(v-if="skill.discription")
          .convex-line
            .triangle-box: .triangle
          .description
            .since(if="skill.since") Learning since 
              span {{skill.since}}
            p(v-for="desc in skill.discription") {{desc}}
</template>
<script>
import skills_data from '~/assets/json/skills.json'

export default {
  data() {
    return {
      skills : skills_data
    }
  }
}
</script>
<style lang="scss">
@import "~/assets/scss/variables.scss";
@import "~/assets/scss/mixin.scss";
.skills {
  margin-top: 100px;
  .skills-box {
    margin-top: 40px;
    padding: 20px 40px;
    background: $theme-dark-gray;
    color: #fff;
    .skill {
      display: flex;
      flex-wrap: nowrap;
      align-items: center;
      height: auto;
      margin: 24px 0;
      .icon {
        width: 24px;
        height: 24px;
      }
      .name-box {
        padding: 8px 0;
        padding-left: 24px;
        width: 20rem;
        .small-name {
          font-size: 1.4rem;
          padding-left: .1rem;
        }
        .name {
          font-size: 2.2rem;
        }
        .sets {
          padding-top: 4px;
          color: $theme-gray;
          font-size: 1.4rem;
        }
      }
      .description-box {
        align-self: stretch;
        display: flex;
        flex-wrap: nowrap;
        align-items: center;
        height: auto;
        .convex-line {
          position: relative;
          flex-basis: 12px;
          width: 12px;
          height: 100%;
          border-right: 1px solid $theme-gray;
          .triangle-box {
            position: absolute;
            margin: auto;
            top: 0;
            bottom: 0;
            right: -1px;
            width: 12px;
            height: 12px * 1.15;
            overflow: hidden;
            .triangle {
              position: absolute;
              margin: auto;
              top: 0;
              bottom: 0;
              right: -7px;
              width: 12px;
              height: 12px;
              background: $theme-dark-gray;
              border: 1px solid $theme-gray;
              transform: rotateZ(45deg)
            }
          }
        }
        .description {
          .since {
            color: $theme-gray-text;
            font-size: 1.2rem;
            padding-bottom: 2px;
            span {
              font-size: 1.3rem;
            }
          }
          width: 100%;
          padding-left: 24px;
          padding-bottom: 4px;
          display: block;
          color: $theme-gray;
          font-size: 1.55rem;
          line-height: 1.5;
          font-feature-settings: "pkna";
        }
      }
    }
  }
}
</style>
