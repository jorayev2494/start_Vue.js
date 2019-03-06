<template>
  <div id="app">
    <h2>{{ title }}</h2>

    <input type="text" v-model="search" />

    <ul>
      <li v-for="name in fileredNames" :key="name">{{ name }}</li>
    </ul>

    <hr>

    <app-list-name-component></app-list-name-component>

  </div>
</template>

<script>

import ListMixin from "./ListNames"

export default {
  data() {
    return {
      title: "Изучаем Миксины",
    }
  },
  mixins: [ListMixin]
}
</script>
