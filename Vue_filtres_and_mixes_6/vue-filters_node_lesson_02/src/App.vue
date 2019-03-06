<template>
  <div id="app">
    <h2>{{ title }}</h2>

    <input type="text" v-model="search" />

    <ul>
      <li v-for="name in fileredNames" :key="name">{{ name }}</li>
    </ul>

  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      search: "",
      title: "Изучаем Филтры",
      names: ["Konstantin", "Anna", "Vladimir", "Yakub"],
    }
  },

  computed: {
    fileredNames() {
      return this.names.filter(name => {
        return name.toLowerCase().indexOf(this.search) !== -1;
        // return name.indexOf(this.search) !== -1;
      })
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
