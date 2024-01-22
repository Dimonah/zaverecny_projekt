<template>
  <div :class="{'darkbg':(this.store.isDark)}">
    <button className="changecolor" @click="this.store.toggleDark()">zmena farby pozadia</button>
    <Navigation />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import { useColorStore } from './stores/store.js';
import Navigation from './components/Navigation.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'App',
  components: {
    Navigation,
    Footer,
  },
  data() {
    return {
      store:useColorStore()
    };
  },
  methods: {
  },
};
</script>

<style>
</style>
