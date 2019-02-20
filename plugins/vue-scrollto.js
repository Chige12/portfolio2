import Vue from 'vue'
import VueScrollTo from 'vue-scrollto'

Vue.use(VueScrollTo, {
  container: '#scroll_wrapper',
  duration: 700,
  easing: [0, 0, 0.1, 1],
  offset: -100,
  force: true
})