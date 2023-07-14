<template>
  <section class="vh-100" style="background-color: #4249ef">
    <div
      class="about"
      style="padding: 60px; padding-left: 200px; padding-right: 200px"
    >
      <div class="row" style="background-color: #ffffff">
        <h4 class="pt-4">REGISTRACIJA</h4>
        <div class="col"></div>
        <div class="col-5">
          <form class="pt-4">
            <div class="form-group pt-4">
              <label for="exampleInputEmail1">Email adresa</label>
              <input
                type="email"
                v-model="username"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="example@email.com"
              />
            </div>
            <div class="form-group pt-4 pb-4">
              <label for="exampleInputPassword1">Lozinka</label>
              <input
                type="password"
                v-model="password"
                class="form-control"
                id="exampleInputPassword1"
                placeholder="Nova lozinka"
              />
            </div>
            <div class="form-group pt-4 pb-4">
              <label for="exampleInputPassword2">Ponovi lozinku</label>
              <input
                type="password"
                v-model="passwordRepeat"
                class="form-control"
                id="exampleInputPassword2"
                placeholder="Ponovno upiši lozinku"
              />
            </div>
            <div class="pb-4">
              <button type="button" @click="signup" class="btn btn-dark">
                Registracija
              </button>
            </div>
          </form>
        </div>
        <div class="col"></div>
      </div>
    </div>
  </section>
</template>

<script>
import { firebase } from "@/firebase";

export default {
  name: "signup",
  data() {
    return {
      username: "",
      password: "",
      passwordRepeat: "",
    };
  },

  methods: {
    signup() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.username, this.password)
        .then(function () {
          console.log("Uspješna registracija");
        })
        .catch(function () {
          console.error("Došlo je do greške", error);
        });
    },
  },
};
</script>
