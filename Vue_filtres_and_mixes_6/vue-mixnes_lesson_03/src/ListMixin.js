export default {
  data() {
    return {
      search: "",
      names: ["Konstantin", "Anna", "Vladimir", "Yakub"],
    }
  },

  computed: {
    fileredNames() {
      return this.names.filter(name => {
        // return name.toLowerCase().indexOf(this.search) !== -1;
        return name.indexOf(this.search) !== -1;
      })
    }
  },
  created() {
    console.log("Created");
  },
}
