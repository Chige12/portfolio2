<template lang="pug">
  .topics
    .carousel
      .topic(v-for="(topic,topic_id) in temp_topics" :class="{'topic-display':DisplayCarousel(topic_id)}")
        nuxt-link(:to="'/works#'+topic.id" :class="`topic-`+topic.color").backcolor
          video(v-if="topic.video" :src="`img/works/${topic.video}`" autoplay loop muted).topic-img
          img(v-if="topic.img" :src="`img/works/${topic.img}`").topic-img
          .stripe
          .title: h1 {{topic.title}}
          .discription: p {{topic.disc}}
      .topic-prev(@click="PrevSelector(1)" :class="{'hide-prev':hide_prev_btn}")
        font-awesome-icon(icon="angle-left").icon-angle.icon-angle-prev
      .topic-next(@click="NextSelector(1)")
        font-awesome-icon(icon="angle-right").icon-angle.icon-angle-next
    .selector
      button.select-prev(@click="PrevSelector(1)" :class="{'hide-prev':hide_prev_btn}")
        font-awesome-icon(icon="angle-left").icon-angle.icon-angle-prev
      .select-num(v-for="(number, number_id) in CarouselNumber")
        button.number(@click="NextSelector(number_id)") {{number}}
      button.select-next(@click="NextSelector(1)")
        font-awesome-icon(icon="angle-right").icon-angle.icon-angle-next

</template>

<script>
export default {
  props: ["topics"],
  data () {
    return {
      disp_num : 3,
      car_num : 5,
      car_topIndex : 0,
      temp_topics : [],
      hide_prev_btn : true
    }
  },
  mounted () {
    window.addEventListener('keydown', (e) => {
      this.KeyDown(e)
    })
    this.car_num = this.topics.length;
    this.car_topIndex = 0;
    this.temp_topics = [];
    for (let i = 0; i < this.disp_num; i++) { //初期表示
      this.temp_topics.push(this.addTopic(i,true));
    }
    this.temp_topics.push(this.addTopic(this.disp_num,false));
    this.temp_topics.push(this.addTopic(this.disp_num+1,false));
  },
  methods: {
    KeyDown(event) {
      var keyCode = event.keyCode;
      if(keyCode == 39){
        this.NextSelector(1)
      }
      if(keyCode == 37){
        this.PrevSelector(1)
      }
    },
    PrevSelector(n_prev){//戻る
      if(this.car_topIndex <= 0){
        this.hide_prev_btn = true;
      }else{
        this.car_topIndex -= n_prev;
        if(this.car_topIndex == 0){
          this.hide_prev_btn = true;
        }
        this.DisplayCarousel();
      }
    },
    NextSelector(n_next){//進む
      this.hide_prev_btn = false;
      this.car_topIndex += n_next;
      while (this.temp_topics.length < this.car_topIndex+this.disp_num+2){
        this.temp_topics.push(this.addTopic(this.temp_topics.length,false));
      }//.unshift
      this.DisplayCarousel();
    },
    addTopic(index,display){
      var org_index = index % this.car_num;
      var add_topic = this.topics[org_index];
      add_topic.display = display;
      return add_topic;
    },
    DisplayCarousel(i) {
      return (this.car_topIndex <= i) && (i < (this.car_topIndex + this.disp_num))
    }
  },
  computed: {
    CarouselNumber() {
      var carousel_num = [];
      for (let i = 0; i < this.disp_num; i++) {
        carousel_num.push( String((this.car_topIndex + i) % this.car_num +1) );
      }
      return carousel_num;
    }
  }
}
</script>

<style lang="scss">
@import "~/assets/scss/variables.scss";
@import "~/assets/scss/mixin.scss";
@import "~/assets/scss/animation.scss";

.topics {
  .carousel {
    position: relative;
    width: 100%;
    height: 330px;
    display: flex;
    flex-wrap: nowrap;
    .topic-prev {
      position: absolute;
      top: 0;
      left: 0;
      width: 36px;
      height: 330px;
      background: $theme-navy;
      cursor: pointer;
      transition: .3s ease-in-out;
      opacity: 0;
      &:hover {
        opacity: .6;
      }
    }
    .icon-angle {
      position: absolute;
      margin: auto;
      top: 0;
      bottom: 0;
      left: 7px;
      font-size: 45px;
      line-height: 45px;
      color: white;
    }
    .icon-angle-prev {
      animation : prevIcon 1.6s ease infinite;
    }
    .icon-angle-next {
      animation : nextIcon 1.6s ease infinite;
    }
    .hide-prev {
      cursor: unset;
      &:hover {
        opacity: 0;
      }
    }
    .topic-next {
      position: absolute;
      top: 0;
      right: 0;
      width: calc(100%/3);
      height: 330px; 
      background: $theme-navy;
      cursor: pointer;
      transition: .3s ease-in-out;
      opacity: 0;
      &:hover {
        opacity: .6;
      }
    }
    .topic {
      position: relative;
      width: 0;
      height: 330px;
      overflow: hidden;
      transition: .5s $bezier-fast-ease-out;
      &-display {
        width: calc(100%/3);
      }
      .backcolor{
        display: block;
        width: 100%;
        height: 100%;
      }
      &-green {
        background: $theme-green;
      }
      &-gray {
        background: $theme-gray;
      }
      &-pink {
        background: $theme-pink;
      }
      .topic-img {
        position: absolute;
        margin: auto;
        display: block;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
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
          width: 50rem;
          margin: 0;
          padding-left: 68px;
          padding-top: .84rem;
          @include noto-font(2.4rem,$theme-navy);
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
          width: 36rem;
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
          width: 80%;
        }
        .title {
          width:40rem;
        }
        .discription {
          width:36rem;
        }
      }
    }
  }
  .selector {
    display: inline-flex;
    flex-wrap: nowrap;
    margin-top: 12px;
    padding-left: 32px;
    button{
      position: relative;
      background: $theme-gray;
      width: 48px;
      height: 36px;
      margin: 0 2px;
      border: none;
      transition: .3s ease;
      @include roboto-black(2.3rem);
      color: white;
      cursor: pointer;
      .icon-angle {
        position: absolute;
        margin: auto;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        font-size: 26px;
        line-height: 26px;
        color: white;
      }
      .icon-angle-prev:hover {animation : prevIcon 1.6s ease infinite;}
      .icon-angle-next:hover {animation : nextIcon 1.6s ease infinite;}

      &:hover {
        background: $theme-navy;
      }
    }
    .select-prev, .select-next {
      width: 28px;
      margin: 0 8px;
    }
    .hide-prev {
      opacity: .2;
      cursor: unset;
      &:hover {
        background: $theme-gray;
      }
    }
  }
}



.topic-enter-active, .topic-leave-active {
  transition: width .5s;
}

.topic-enter, .topic-leave-to {
  width: 0;
}


</style>

