<template>
  <div class="container">

    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="collapse navbar-collapse">
        <ul class="navbar-nav mr-auto">

          <router-link tag="li" class="nav-item" exact to="/" active-class="active">
            <a class="nav-link">Home</a>
          </router-link>

          <!-- <li class="nav-item">
            <router-link class="nav-link" v-bind:to="'/'">Home</router-link>
          </li> -->

          <!-- <li class="nav-item">
            <router-link class="nav-link" v-bind:to="'/pizzas'">Pizza</router-link>
          </li> -->

          <router-link tag="li" class="nav-item" exact to="/pizzas" active-class="active">
            <a class="nav-link">Pizzas</a>
          </router-link> 

        </ul>
      </div>
    </nav>

    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    }
  }
</script>

<style>

</style>
