import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'      // Импортирование Router
// import router from "./routes"

// #region Создание Роутера Router
import Home from "./pages/Home"
import Pizzas from "./pages/Pizzas"

Vue.use(VueRouter)

let router = new VueRouter({
  routes: [
    {
      path: "",               // localhost:8080
      component: Home,
    },
    {
      path: "/pizzas",        // localhost:8080/pizzas
      component: Pizzas,
    }
  ],
  mode: "history",
})
// #endregion

new Vue({
  el: '#app',
  render: h => h(App),
  router,                 // Регистрация Роутера Router
  // router:Router,
})
