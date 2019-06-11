<template>
  <section id="faleconosco">
    <div class="container">
      <div v-if="mostraErro" class="row">
        <p style="color:red">Preencha todos os campos.</p>
      </div>

      <h2 class="text-center font-title">Entre em contato conosco! Vamos amar atende-lo :)</h2>
      <!--Section description-->
      <p class="text-center">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae
        asperiores eligendi natus modi facere. Aliquam explicabo, vitae ea, corporis dolor magni nisi veniam asperiores
        consequatur sapiente modi natus minus ipsam!
      </p>

      <div class="row">
        <!--Grid column-->
        <div class="col-md-12">
          <form id="contact-form" name="contact-form" method="POST">
            <div class="row">
              <div class="col-md-6">
                <div class="md-form mb-0">
                  <input v-model="nome" type="text" id="name" name="name" class="form-control">
                  <label for="name" class>Nome Completo</label>
                </div>
              </div>
              <div class="col-md-6">
                <div class="md-form mb-0">
                  <input v-model="email" type="text" id="email" name="email" class="form-control">
                  <label for="email" class>e-mail para contato</label>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-12">
                <div class="md-form mb-0">
                  <input v-model="subject" type="text" id="subject" name="subject" class="form-control">
                  <label for="subject" class>Título</label>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-12">
                <div class="md-form">
                  <textarea
                  v-model="message"
                    type="text"
                    id="message"
                    name="message"
                    rows="2"
                    class="form-control md-textarea"
                  ></textarea>
                  <label for="message">Deixe aqui sua mensagem</label>
                </div>
              </div>
            </div>
            <button
              @click="validaForm"
              type="button"
              class="btn btn-danger text-white"
            >Clique aqui para enviar</button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data: () => ({
    nome: '',
    email: '',
    subject: '',
    message: '',
    mostraErro: false
  }),
  methods: {
    validaForm () {
      this.mostraErro = !this.nome || !this.email || !this.subject || !this.message
    }
  }
}
</script>
