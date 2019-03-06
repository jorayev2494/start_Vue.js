<template>

  <div>
    <h1>List Names</h1>

    <input type="text" v-model="search" />

    <ul>
      <li v-for="name in fileredNames" :key="name">{{ name }}</li>
    </ul>
  </div>

</template>

<script>
import ListMixin from "./ListMixin"
  export default {
    mixins: [ListMixin]
  }
</script>
