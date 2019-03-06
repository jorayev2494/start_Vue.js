import Vue from 'vue'
// import App from './App.vue'

let dataObject = {
  counter: 0,
}

Vue.component("my-code-component", {
  template: `<div>
      <h2>Счетчик: {{ counter }}</h2>
      <button @click="counter++">+1</button>
  </div>`,
  // data() {
  //   return dataObject;
  // },
  data() {
    return {
      counter: 0,
    }
  },
});

new Vue({
  el: '#app',
  // render: h => h(App)
})
