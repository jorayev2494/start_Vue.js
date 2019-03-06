<template>
  <div>
    <h2>Pezza Name: {{ pizzaName }} / {{ reverseName }}</h2>
    <p>Price: {{ pizzaPrice }}</p>
    <button v-on:click="changeName">Change Name</button>
    <button v-on:click="changeFunc()">Change from parent</button>
    <button v-on:click="updateCounter">Update Counter</button>
  </div>
</template>

<script>

import {eventEmitter} from './main'

  export default {
    props: ["pizzaName", "pizzaPrice", "changeFunc"],
    methods: {
      changeName() {
        this.pizzaName = "Маргарита lesson-8";
        this.$emit("nameChenged", this.pizzaName);
      },
      updateCounter() {
        eventEmitter.$emit("counterUpdated");
      }
    },
    computed: {
      reverseName() {
        return this.pizzaName.split('').reverse().join('');
      }
    },
  }
</script>
