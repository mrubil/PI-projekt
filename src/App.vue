<template>
  <div id="app">
    <!-- Image and text -->
    <nav
      id="nav"
      class="navbar navbar-expand-md navbar-light bg-light"
      style="padding-left: 30px; padding-right: 30px"
    >
      <a class="navbar-brand" href="#">
        Buy<font color="#4249ef">&</font>Sell
      </a>
      <ul class="navbar-nav ml-auto">
        <li class="nav-item">
          <router-link to="/" class="nav-link">Home</router-link>
        </li>
      </ul>
      <ul class="navbar-nav ms-auto">
        <li v-if="!store.currentUser" class="nav-item">
          <router-link to="/Login" class="nav-link">Login</router-link>
        </li>
        <li v-if="!store.currentUser" class="nav-item">
          <router-link to="/SignUp" class="nav-link">Registracija</router-link>
        </li>
        <li v-if="store.currentUser" class="nav-item">
          <a href="#" @click.prevent="logout()" class="nav-link">Odjava</a>
        </li>
      </ul>
    </nav>
    <div class="container">
      <router-view />
    </div>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000000;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #000000;

    &.router-link-exact-active {
      color: #4249ef;
    }
  }
}
</style>

<script>
import store from "@/store";
import { firebase } from "@/firebase";
import router from "@/router";

firebase.auth().onAuthStateChanged((user) => {
  const currentRoute = router.currentRoute;

  console.log("PROVJERA STANJA LOGINA!");
  if (user) {
    // User is signed in.
    console.log("*** User", user.email);
    store.currentUser = user.email;

    if (!currentRoute.meta.needsUser) {
      router.push({ name: "home" });
    }
  } else {
    // User is not signed in.
    console.log("*** No user");
    store.currentUser = null;

    if (currentRoute.meta.needsUser) {
      router.push({ name: "login" });
    }
  }
});

export default {
  name: "app",
  data() {
    return {
      store,
    };
  },
  methods: {
    logout() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.push({ name: "login" });
        });
    },
  },
};
</script>
