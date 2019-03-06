import Vue from 'vue'
import App from './App.vue'
// Импортироваем наш файл color.js
import MyDirective from './color'

// Зарегистрироваем наш Директиву
Vue.directive("colored", MyDirective);

new Vue({
  el: '#app',
  render: h => h(App)
})
