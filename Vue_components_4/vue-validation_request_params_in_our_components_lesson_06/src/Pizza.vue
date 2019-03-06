<template>
  <div>
    <h2>Pezza Name: {{ pizzaName }} / {{ reverseName }}</h2>
    <p>Price: {{ pizzaPrice }}</p>
  </div>
</template>

<script>
  export default {
    // props: ["pizzaName", "pizzaPrice",],

    // props: {
    //   pizzaName: String,
    //   pizzaPrice: Number,
    // },

    props: {
      pizzaName: {
        type: String,
        // required: true,
        default: "Default Pizza Name",
      }
    },

    computed: {
      reverseName() {
        return this.pizzaName.split('').reverse().join('');
      }
    },
  }
</script>
