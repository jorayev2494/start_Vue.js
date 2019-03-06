import Vue from 'vue'
// import App from './App.vue'


Vue.component("my-counter", {
  template: `
            <div>
              <h1>Счетчик: {{ counter }}</h1>
              <button v-on:click="counter++">+1</button>
            </div>
            `,
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    add: function() {
      this.counter++;
    }
  },
});

new Vue({
    el: '#app',

    // render: h => h(App)
    // render(h) {
    //     h(App)
    // },
})
