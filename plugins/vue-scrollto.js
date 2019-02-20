import Vue from 'vue'
import VueScrollTo from 'vue-scrollto'

Vue.use(VueScrollTo, {
  container: '#scroll_wrapper',
  duration: 500,
  easing: [0, 0, 0.1, 1],
  offset: 0,
  force: true
})