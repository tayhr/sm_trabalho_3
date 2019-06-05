import Vue from 'vue'
import Router from 'vue-router'
import Principal from "./components/principal"
import FaleConosco from "./components/fale_conosco"
import Carnes from "./components/carnes"
Vue.use(Router)

export default new Router({
  routes: [
  {
    path: "/",
    component: Principal
  },
  {
    path: "/faleconosco",
    component: FaleConosco
  },  
  {
    path: "/carnes",
    component: Carnes
  }
  ]
})
