<template>
  <div id="app">
    <h1>Parent: {{ pizzaName }}</h1>
    <app-pizza-component
          v-bind:pizzaName="pizzaName"
          v-bind:pizzaPrice="pizzaPrice"

          v-on:nameChenged="pizzaName = $event"

        ></app-pizza-component>
  </div>
</template>

<script>

import Pizza from './Pizza';      // Локальный Регистрация Компонентов

export default {
  name: 'app',
  data() {
    return {
      pizzaName: "Деревенская",
      pizzaPrice: 300
    }
  },
 
  components: {
    appPizzaComponent: Pizza,            // Локальный Регистрация Компонентов
  }
}
</script>

