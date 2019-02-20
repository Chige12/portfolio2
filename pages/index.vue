<template lang="pug">
  .nuxt
    .index
      Header(:now_page="now_page" ref="header")
      section.reel
        .play-video(@click="")
          video(src="").reel-video
          .stripe
          .title: h1 PLAY REEL?
          .discription: p 2015~2018年に制作した動画から、お気に入りのものをピックアップして再編集したものです。
      Topics(:topics="topics")
</template>

<script>
import Header from '~/components/header.vue'
import Topics from '~/components/index/topics.vue'

export default {
  components: {
    Header,
    Topics
  },
  data() {
    return {
      now_page:"Index",
      topics : [
        {
          id: "pro_karuta",
          title: "プログラミング言語かるた",
          img: "go-haskell3ds-b.png",
          disc: "クラウドファンディングで目標金額の270%を達成した、話題の人気商品。",
          color: "green"
        },
        {
          id: "git_karuta",
          title: "Gitコマンドかるた",
          img: "gitkaruta.png",
          disc: "プログラミング言語かるた第二弾。Gitのコマンドをかるたで楽しく学習しよう！",
          color: "gray"
        },
        {
          id: "rewrite_kosen",
          title: "高専映像塾キャッチ",
          video: "content/rewrite-kosen.mp4",
          disc: "高専映像塾のキャッチのデザインとプロモーション用の映像を制作。",
          color: "pink"
        },
        {
          id: "phpcon2018_video",
          title: "PHPカンファOPムービー",
          img: "phpconfvideo5.png",
          disc: "「PHPカンファレンス関西2018」のイベントのOP用にムービーを制作。",
          color: "green"
        },
        {
          id: "can_you_read",
          title: "難読地名くいず",
          img: "can-you-read.jpg",
          disc: "友人と全国の難読地名を集めてクイズを制作。デザインとCSSを担当。",
          color: "gray"
        }
      ]
    }
  }
}
</script>

<style lang="scss">
@import "~/assets/scss/variables.scss";
@import "~/assets/scss/mixin.scss";

.nuxt {padding: 18px 0;height: 100%;}
.index {
  position: relative;
  section.reel {
    width: 100%;
    height: calc(100vh / 3);
    background: $theme-mint;
    margin-bottom: 12px;
    .play-video {
      position: relative;
      width: 100%;
      height: calc(100vh / 3);;
      overflow: hidden;
      cursor: pointer;
      .reel-video {
        position: absolute;
        margin: auto;
        display: block;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        width: 100%;
      }
      .stripe {
        @include stripe();
      }
      .title {
        position: absolute;
        top: 30px;
        left: 0;
        width:0;
        height: 4.4rem;
        background: #fff;
        transition: .5s .1s $bezier-fast-ease-out;
        overflow: hidden;
        h1 {
          position: absolute;
          top: 0;
          left: 0;
          width: 40rem;
          margin: 0;
          padding-left: 68px;
          @include roboto-black(4rem);
        }
      }
      .discription {
        position: absolute;
        bottom: 38px;
        left: 60px;
        width:0;
        height: 13rem;
        background: #fff;
        transition: .5s .2s $bezier-fast-ease-out;
        overflow: hidden;
        p {
          position: absolute;
          top: 0;
          left: 0;
          width: 34rem;
          margin: 0;
          height: auto;
          padding: 24px;
          @include noto-font(1.8rem,$theme-navy);
          word-wrap: break-word;
          line-height: 1.5;
        }
      }
      &:hover {
        .reel-video {
          transform: scale(1.1);
        }
        .stripe {
          width: 27%;
        }
        .title {
          width:34rem;
        }
        .discription {
          width:34rem;
        }
      }
    }
  }
}
</style>

