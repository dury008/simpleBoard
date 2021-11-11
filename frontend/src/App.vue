<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <div class="container">
        <router-link class="navbar-brand" to="/main">simple board</router-link>
        <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item active">
              <router-link class="nav-link" to="/main">Community</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/notice">Notice</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/faq">FAQ</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/inquiry">Inquiry</router-link>
            </li>
          </ul>
        </div>
        <ul
          v-show="this.$store.state.login.username != null"
          class="nav navbar-nav"
        >
          <p style="color: black">
            user: {{ this.$store.state.login.username }}
          </p>
          <li class="nav-item">
            <button class="btn" @click="logout">LogOut</button>
          </li>
        </ul>
      </div>
    </nav>
    <router-view></router-view>
    <footer class="py-5 bg-light container-fluid fixed-bottom">
      <div class="container">
        <p class="m-0 text-center text-black">Copyright &copy; dury008 2021</p>
      </div>
      <!-- /.container -->
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    async logout() {
      const res = await this.$store.dispatch('LOGOUT', {
        userId: this.$store.state.login.userId,
      });
      console.log(res);
      this.$router.push({ path: '/login' });
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
