<template>
  <div id="app">
    <!-- Image and text -->
    <nav
      id="nav"
      class="navbar navbar-light bg-light"
      style="padding-left: 30px; padding-right: 30px"
    >
      <a class="navbar-brand" href="#"> Buy&Sell </a>

      <router-link to="/">Home</router-link> |
      <router-link to="/Login">Prijava</router-link> |
      <router-link to="/SignUp">Registracija</router-link>
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
