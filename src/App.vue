<template>
  <div id="app">
    <Header />
    <nav class="navbar">
      <div class="navbar-start">
        <router-link class="navbar-item is-hoverable is-uppercase has-text-weight-semibold" to="/">Beranda</router-link>
        <router-link class="navbar-item is-hoverable is-uppercase has-text-weight-semibold" to="/recomend">Rekomendasi</router-link>
        <router-link class="navbar-item is-hoverable is-uppercase has-text-weight-semibold" to="/popular">Tempat Populer</router-link>
        <router-link class="navbar-item is-hoverable is-uppercase has-text-weight-semibold" to="/about">Tentang</router-link>
      </div>
      <div class="navbar-end">
        <div class="navbar-item">
          <div class="field has-addons">
            <p class="control">
              <input class="input" type="text" placeholder="Find a post">
            </p>
            <p class="control">
            <button class="button is-success is-light">
              Search
            </button>
            </p>
          </div>
        </div>
      </div>
    </nav>
    <router-view/>
    <Footer/>
  </div>
</template>
<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
}
</script>

<style lang="scss">
#app {
  width: 100% !important;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav a {
  &.router-link-exact-active {
    color: #2c3e50 !important;
    background: #48c774 !important;
    &:hover{
      color:#fff;
      background: #38b965;
    }
  }
}

</style>
