<template>
  <div id="app">
    <h1>Parent: {{ pizzaName }}</h1>
    <!-- <app-pizza-component v-bind:pizzaName="pizzaName" v-bind:pizzaPrice="pizzaPrice"></app-pizza-component> -->
    <app-pizza-component v-bind:pizzaPrice="pizzaPrice"></app-pizza-component>
  </div>
</template>

<script>

import Pizza from './Pizza';      // Локальный Регистрация Компонентов

export default {
  name: 'app',
  data () {
    return {
      pizzaName: "Деревенская",
      // pizzaName: 1,
      // pizzaPrice: "Str",
      pizzaPrice: 300
    }
  },
  components: {
    appPizzaComponent: Pizza,            // Локальный Регистрация Компонентов
  }
}
</script>

