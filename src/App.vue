<template>
  <div id="app">
    <NavBar/>
    <router-view/>
    <Footer/>
  </div>
</template>
<script>
import NavBar from "./components/navbar";
import Principal from "./components/principal";
import Footer from "./components/footer";
export default {
  components: { NavBar, Footer }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.img-responsive {
  max-height: 500px;
  height: 70%;
  width: auto;
}
@font-face {
  font-family: "Bacon_Bad";
  src: url("./assets/Bacon_Bad.ttf");
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: "Bacon_Bad";
  src: url("./assets/Bacon_Bad.ttf");
  /* IE9 Compat Modes */
  src: url("./assets/Bacon_Bad.ttf?#iefix") format("embedded-opentype"),
    /* IE6-IE8 */ url("./assets/Bacon_Bad.ttf") format("woff2"),
    /* Super Modern Browsers */ url("./assets/Bacon_Bad.ttf") format("woff"),
    /* Pretty Modern Browsers */ url("./assets/Bacon_Bad.ttf")
      format("truetype");
  /* Safari, Android, iOS */
}
</style>
