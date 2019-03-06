<template>
  <h1>Счетчик: {{ counter }}</h1>

</template>

<script>
import {eventEmitter} from './main'
  export default {
    data: {
      counter: 0,
    },
    created() {
      eventEmitter.$on("counerUpdated", () => {
        this.counter++;
      });
    },
  }
</script>

