<template>
  <section id="principal">
    <div class="container">
      <div class="row">
        <div class="col-xl-12">
          <h1 class="font-title text-center">SOBRE NOS</h1>
          <br>
          <p class="text-center">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            <br>Aperiam dolor officiis,
            voluptatum esse magni est
            voluptas.
          </p>
        </div>
      </div>
      <br>
      <div class="row">
        <div class="col-xl-6">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam dolor officiis, voluptatum esse magni est
            voluptas. Corporis quidem, temporibus voluptatum, nulla commodi, non quos maxime natus voluptatem quaerat
            voluptatibus recusandae!
          </p>
          <ul>
            <li v-for="(t,i) in 15  " :key="i">Lorem ipsum dolor sit amet</li>
          </ul>
        </div>
        <div class="col-xl-6">
          <img class="img-responsive" :src="getImages[0]" alt>
        </div>
      </div>
      <div class="row">
        <div class="col-xl-6">
          <img class="img-responsive" :src="getImages[1]" alt>
        </div>
        <div class="col-xl-6">
          <h1 class="font-title">Nossos cortes</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque beatae aut cupiditate nam. Maiores ea
            aperiam sequi facere non tenetur voluptate, unde autem odio esse quos id perspiciatis libero deserunt. Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Magnam expedita quis itaque doloremque quas fuga ullam
            saepe ratione, illum, nesciunt eos iure nisi quam? Quidem error molestias minima a nihil. Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Laudantium qui eum tenetur aspernatur repudiandae nobis dolorum minus
            iste eaque corrupti dolore repellat vero quis nisi, quidem culpa. Recusandae, libero ipsa?
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import cortes from "../assets/cortes.png";
import equipe from "../assets/equipe.jpg";
export default {
  computed: {
    getImages() {
      return [cortes, equipe];
    }
  }
};
</script>

