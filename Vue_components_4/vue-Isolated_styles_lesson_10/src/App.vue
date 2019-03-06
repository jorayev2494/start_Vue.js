<template>
  <div id="app">

    <app-pizza-component></app-pizza-component>

    <app-counter-component></app-counter-component>
    
  </div>
</template>

<script>

import Pizza from './Pizza';            // Локальный Регистрация Компонентов
import Counter from './Counter'         // Локальный Регистрация Компонентов

export default {
  name: 'app',
  components: {
    appPizzaComponent: Pizza,            // Локальный Регистрация Компонентов
    appCounterComponent: Counter,        // Локальный Регистрация Компонентов
  }
}
</script>

<style>

</style>

