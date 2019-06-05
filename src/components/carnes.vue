<template>
  <section id="carnes">
    <div class="container">
      <div class="row">
        <div class="col-xs-12 text-center">
          <h1 class="font-title">Nossas Carnes</h1>
        </div>
      </div>
      <div v-for="({ img }, i) in getRows" :key="i" class="col-xl-6">
        <div v-for="(item, j) in img" :key="j" class="row">
          <img class="img-responsive" :src="item" alt>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import one from "../assets/portfolio/1.jpg";
import two from "../assets/portfolio/2.jpg";
import three from "../assets/portfolio/3.jpg";
import four from "../assets/portfolio/4.jpg";
export default {
  computed: {
    getRows() {
      return [{ img: [one, two] }, { img: [three, four] }];
    }
  }
};
</script>

