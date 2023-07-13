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
        <li class="nav-item">
          <router-link to="/Login" class="nav-link">Login</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/SignUp" class="nav-link">Registracija</router-link>
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
