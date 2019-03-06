<template>
  <div>
    <h2>Pezza Name: {{ pizzaName }} / {{ reverseName }}</h2>
    <p>Price: {{ pizzaPrice }}</p>
    <button v-on:click="changeName">Change Name</button>
    <button v-on:click="changeFunc()">Change from Parent</button>
  </div>
</template>

<script>
  export default {
    props: ["pizzaName", "pizzaPrice", "changeFunc"], // changeFunc - Получение функци из Родительского Vue
    methods: {
      changeName() {
        this.pizzaName = "Маргарита";
        this.$emit("nameChanged", this.pizzaName);
      },
    },
    computed: {
      reverseName() {
        return this.pizzaName.split('').reverse().join('');
      }
    },
  }
</script>
