<template>
  <b-nav>
    <b-nav-item disabled>Casa do Bacon</b-nav-item>
    <b-nav-item active to="/">Principal</b-nav-item>
    <b-nav-item to="/carnes">Nossas Carnes</b-nav-item>
    <b-nav-item to="/faleConosco">Fale Conosco</b-nav-item>
  </b-nav>
</template>
<script>
import { BNav, BNavItem } from "bootstrap-vue";
export default {
  name: "NavBar",
  components: { BNav, BNavItem }
};
</script>
<style>
</style>
