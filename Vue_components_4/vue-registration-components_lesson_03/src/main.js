import Vue from 'vue'
// import App from './App.vue'

// #region
  /**
   * Глобальный Vue переменный: <my-code-component></my-code-component>
   * И зарегистрировали глобальный компонент
   * "Он доступен у нас в любых приложении"
   */
  Vue.component("my-global-component", {
    template: `<div>
        <h2>Глобальный Компонент <br> Счетчик: {{ counter }}</h2>
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
//#endregion

new Vue({
  el: '#app',
  // render: h => h(App)
})

// #region Создание Локального компонента и Зарегистрировать
  let localComponent = {
    template: `<div>
        <h2>Локальный Компонент <br> Счетчик: {{ counter }}</h2>
        <button @click="counter++">+1</button>
    </div>`,
    data() {
      return {
        counter: 0,
      }
    },
  }

  new Vue({
    el: '#app2',
    components: {
      // "my-local-component": localComponent,
      myLocalComponent: localComponent,
    }
    // render: h => h(App)
  })
//#endregion
