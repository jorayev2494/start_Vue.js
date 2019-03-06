<template>
  <div>
    <h2>Pezza Name: {{ pizzaName }} / {{ reverseName }}</h2>
    <p>Price: {{ pizzaPrice }}</p>
    <button v-on:click="changeName">Change Name</button>
  </div>
</template>

<script>
  export default {
    props: ["pizzaName", "pizzaPrice"], // changeFunc - Получение функци из Родительского Vue
    methods: {
      changeName() {
        this.pizzaName = "Маргарита lesson-8";
        this.$emit("nameChenged", this.pizzaName);
      },
    },
    computed: {
      reverseName() {
        return this.pizzaName.split('').reverse().join('');
      }
    },
  }
</script>
