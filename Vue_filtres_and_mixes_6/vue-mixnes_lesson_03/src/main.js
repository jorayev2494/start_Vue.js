import Vue from 'vue'
import App from './App.vue'
import ListNames from './ListNames.vue'

// Глобальный объявление Mixin
Vue.mixin({
  beforeUpdate() {
    console.log("Before Updated");
  }
});

Vue.component("app-list-name-component", ListNames);

new Vue({
  el: '#app',
  render: h => h(App)
})
