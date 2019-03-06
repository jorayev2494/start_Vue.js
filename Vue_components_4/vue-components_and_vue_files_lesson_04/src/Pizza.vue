<template>
  <div>
    <h2>Pezza Name: {{ pizzaName }}</h2>
    <p>Price: {{ pizzaPrice }}</p>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        pizzaName: "Деревенская",
        pizzaPrice: 320,
      }
    },
  }
</script>
