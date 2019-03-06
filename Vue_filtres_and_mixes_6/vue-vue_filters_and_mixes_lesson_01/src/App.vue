<template>
  <div id="app">
    <h2>{{ title }}</h2>
    <h2>{{ title | uppercase }}</h2>
    <h2>{{ title | snippet }}</h2>
    <h2>{{ title | snippet | uppercase }}</h2>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      title: "Изучаем Филтры",
    }
  },
  filters: {
    // Создани Локального Фиоьтра
    uppercase(value) {
      return value.toUpperCase();
    }
  }
}
</script>
