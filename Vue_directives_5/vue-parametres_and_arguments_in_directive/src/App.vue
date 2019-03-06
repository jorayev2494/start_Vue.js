<template>
  <div id="app">
    <h1 v-colored="'red'">{{ titile }}</h1>
    <h1 v-colored:background="'silver'">{{ titile }}</h1>
    <h1 v-colored:color="'orange'">{{ titile }}</h1>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      titile: "Изучаем Директивы"
    }
  }
}
</script>

