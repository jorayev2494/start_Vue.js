<template>
  <div id="app">

    <app-pizza-component>
      <h2>{{ pizzaNmae }}</h2>
      <p>Lorem, ipsum dolor.</p>

      <h2 slot="title">{{ pizzaNmae }}</h2>
      <p  slot="text">Lorem, ipsum dolor.</p>
    </app-pizza-component>

  </div>
</template>

<script>

import Pizza from './Pizza';            // Локальный Регистрация Компонентов

export default {
  name: 'app',
  data() {
    return {
      pizzaNmae: "Маргарита",
    }
  },
  components: {
    appPizzaComponent: Pizza,            // Локальный Регистрация Компонентов
  }
}
</script>

<style scoped>
  /* h2 {
    color: red;
  } */
</style>

