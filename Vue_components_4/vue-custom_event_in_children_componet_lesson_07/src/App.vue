<template>
  <div id="app">
    <h1>Parent: {{ pizzaName }}</h1>
    <app-pizza-component
          v-bind:pizzaName="pizzaName"
          v-bind:pizzaPrice="pizzaPrice"

          v-bind:changeFunc="changeNameToPizza"
          v-on:nameChanged="pizzaName = $event"

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
  methods: {
    // Передача функции в Дочерный Vue
    changeNameToPizza() {
      this.pizzaName = "Pizza"
    }
  },
  components: {
    appPizzaComponent: Pizza,            // Локальный Регистрация Компонентов
  }
}
</script>

