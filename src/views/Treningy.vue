<template>
    <div>
      <h1>Tréningy</h1>
      <Trening v-if="Object.keys(treningExercises).length > 0" :exercises="treningExercises" />
      
      <div v-if="Object.keys(treningExercises).length > 0" v-for="category in Object.keys(treningExercises)" :key="category">
        <h2>{{ category }}</h2>
        <ul>
          <li v-for="exercise in treningExercises[category]" :key="exercise.id">
            {{ exercise.name }}
            <span v-if="exercise.duration">- {{ exercise.duration }}</span>
            <span v-if="exercise.repetitions">({{ exercise.repetitions }} opakovania)</span>
            <span v-if="exercise.sets">({{ exercise.sets }} série)</span>
          </li>
        </ul>
      </div>
    </div>
  </template>
  
  <script>
  import Trening from '../components/Trening.vue';
  import axios from 'axios';
  
  export default {
    data() {
      return {
        treningExercises: {}
      };
    },
    components: {
      Trening
    },
    mounted() {
      this.loadData();
    },
    methods: {
      loadData() {
        const jsonUrl = './src/data.json';
  
        axios.get(jsonUrl)
          .then(response => {
            this.treningExercises = response.data.exercises;
          })
          .catch(error => {
            console.error('Chyba pri načítaní údajov:', error);
          });
      }
    }
  };
  </script>
  