<template>
    <div class="contact">
      <h1>Kontaktujte nás</h1>
      <p>Neváhajte nás kontaktovať!</p>
  
      <form @submit.prevent="submitForm">
        <label for="name">Meno:</label>
        <input type="text" id="name" v-model="formData.name" required>
  
        <label for="email">E-mail:</label>
        <input type="email" id="email" v-model="formData.email" required>
  
        <label for="message">Správa:</label>
        <textarea id="message" v-model="formData.message" required></textarea>
  
        <button type="submit">Odoslať</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        formData: {
          name: '',
          email: '',
          message: ''
        }
      };
    },
    methods: {
      submitForm() {
        console.log('Odoslané:', this.formData);
        this.resetForm();
      },
      resetForm() {
        this.formData = {
          name: '',
          email: '',
          message: ''
        };
      }
    }
  };
  </script>
  
  <style scoped>
  .contact {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
  }
  
  h1 {
    color: #333;
  }
  
  form {
    display: grid;
    grid-gap: 10px;
  }
  
  label {
    font-weight: bold;
  }
  
  textarea {
    height: 100px;
  }
  
  button {
    padding: 10px;
    background-color: #3498db;
    color: #fff;
    cursor: pointer;
    border: none;
    border-radius: 4px;
  }
  </style>
  