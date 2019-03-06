<template>
  <div id="app">
    <h1>Parent: {{ pizzaName }}</h1>
    <app-pizza-component
      v-bind:pizzaName="pizzaName"
      v-bind:pizzaPrice="pizzaPrice"

      v-bind:changeFunc="changeNameToPizza"
      v-on:nameChange="pizzaName = $event"
      v-on:counterUpdated="counter = $event"
      >

    </app-pizza-component>

  <hr>

  <app-counter-component></app-counter-component>

  </div>
</template>

<script>

import Pizza from './Pizza';      // Локальный Регистрация Компонентов
import Counter from './Counter'   // Локальный Регистрация Компонентов

export default {
  name: 'app',
  data() {
    return {
      pizzaName: "Деревенская",
      pizzaPrice: 300
    }
  },
  methods: {
    changeNameToPizza() {
      this.pizzaName = "Pizza"
    }
  },

  components: {
    appPizzaComponent: Pizza,            // Локальный Регистрация Компонентов
    appCounterComponent: Counter,        // Локальный Регистрация Компонентов
  }
}
</script>

