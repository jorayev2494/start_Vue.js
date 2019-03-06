import Home from "./pages/Home"
import Pizzas from "./pages/Pizzas"

export default new VueRouter({
  routes: [
    {
      path: "",               // localhost:8080
      component: Home,
    },
    {
      path: "/pizzas",        // localhost:8080/pizzas
      component: Pizzas,
    }
  ]
})
