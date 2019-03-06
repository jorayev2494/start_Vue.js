<template>
  <div id="app">
    <h1>{{ msg }}</h1>
    <app-pizza-component></app-pizza-component>
  </div>
</template>

<script>

import Pizza from './Pizza';      // Локальный Регистрация Компонентов

export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    appPizzaComponent: Pizza,            // Локальный Регистрация Компонентов
  }
}
</script>

