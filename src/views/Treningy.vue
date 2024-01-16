<template>
  <div class="treningy">
    <Trening v-if="Object.keys(treningExercises).length > 0" :exercises="treningExercises" />

    <div v-if="Object.keys(treningExercises).length > 0" v-for="category in Object.keys(treningExercises)" :key="category" class="category">
      <h2 class="category-title">{{ category }}</h2>
      <ul class="exercise-list">
        <li v-for="exercise in treningExercises[category]" :key="exercise.id" class="exercise">
          {{ exercise.name }}
          <span v-if="exercise.duration" class="exercise-duration">- {{ exercise.duration }}</span>
          <span v-if="exercise.repetitions" class="exercise-repetitions">({{ exercise.repetitions }} opakovania)</span>
          <span v-if="exercise.sets" class="exercise-sets">({{ exercise.sets }} série)</span>
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
      treningExercises: {},
    };
  },
  components: {
    Trening,
  },
  mounted() {
    this.loadData();
  },
  methods: {
    loadData() {
      const jsonUrl = './src/data.json';

      axios
        .get(jsonUrl)
        .then((response) => {
          this.treningExercises = response.data.exercises;
        })
        .catch((error) => {
          console.error('Chyba pri načítaní údajov:', error);
        });
    },
  },
};
</script>

<style scoped>

.category {
  /* Styles for the category container */
  margin-bottom: 20px;
}

.category-title {
  /* Styles for the category title */
  color: #333;
  font-size: 1.5em;
}

.exercise-list {
  list-style-type: none;
  padding: 0;
}

.exercise {
  margin-bottom: 10px;
}

.exercise-duration,
.exercise-repetitions,
.exercise-sets {
  color: #777;
  font-size: 0.9em;
}
</style>
