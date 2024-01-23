<template>
  <footer class="footer">
    <div class="footer-content">
      <div class="footer-section">
        <h2>Kontakt</h2>
        <p>Email: info@mojweb.com</p>
        <p>Telefónne číslo: +123 456 789</p>
      </div>
      <div class="footer-section">
        <h2>Odkazy</h2>
        <router-link to="/" class="footer-link">Úvod</router-link>
        <router-link to="/zivotosprava" class="footer-link">Životospráva</router-link>
        <router-link to="/treningy" class="footer-link">Tréningy</router-link>
        <router-link to="/kontakt" class="footer-link">Kontakt</router-link>
      </div>
      <div class="footer-section">
        <h2>Sociálne siete</h2>
        <a href="#" class="footer-link">Facebook</a>
        <a href="#" class="footer-link">Twitter</a>
        <a href="#" class="footer-link">Instagram</a>
      </div>
    </div>
    <div class="footer-bottom">
      <p>&copy; 2024 Môj web</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
};
</script>

<style>
.footer {
  background-color: #333;
  color: white;
  padding: 20px;
  position:sticky;
}

.footer-content {
  display: flex;
  justify-content: space-between;
}

.footer-section {
  flex: 1;
  margin-right: 20px;
}

h2 {
  color: #fff;
}

.footer-link {
  display: block;
  color: #fff;
  margin-bottom: 5px;
  text-decoration: none;
}

.footer-link:hover {
  text-decoration: underline;
}

.footer-bottom {
  margin-top: 20px;
  text-align: center;
}
</style>
