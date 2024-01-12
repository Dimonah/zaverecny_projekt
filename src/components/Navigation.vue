<template>
    <nav class="navbar">
      <div class="nav-links">
        <router-link to="/" class="nav-link">Úvod</router-link>
        <router-link to="/zivotosprava" class="nav-link">Životospráva</router-link>
        <router-link to="/treningy" class="nav-link">Tréningy</router-link>
        <router-link to="/kontakt" class="nav-link">Kontakt</router-link>
      </div>
    </nav>
  </template>
  
  <script>
  export default {
    name: 'Navigation',
  };
  </script>
  