import Vue from 'vue'
import App from './App.vue'
// import Pizza from './Pizza'                     // Глобальный Регистрация Компонентов

// Vue.component("app-pizza-component", Pizza);    // Глобальный Регистрация Компонентов

new Vue({
  el: '#app',
  render: h => h(App)
})

