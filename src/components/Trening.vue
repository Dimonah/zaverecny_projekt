<template>
  <div class="trening">
    <h1>Tréningové plány</h1>
    <div v-if="exercises && Object.keys(exercises).length > 0">
      <div v-for="category in Object.keys(exercises)" :key="category" class="exercise-category">
        <h2>{{ category }}</h2>
        <ul>
          <li v-for="exercise in exercises[category]" :key="exercise.id" class="exercise-item">
            {{ exercise.name }}
            <span v-if="exercise.duration">- {{ exercise.duration }}</span>
            <span v-if="exercise.repetitions">({{ exercise.repetitions }} opakovaní)</span>
            <span v-if="exercise.sets">({{ exercise.sets }} série)</span>
          </li>
        </ul>
      </div>
    </div>
    <div v-else>
      <p>Žiadne tréningové plány k dispozícii.</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    exercises: Object
  },
};
</script>

<style>
.trening {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

h1 {
  color: #333;
}
h2 {
  color: #333;
}

.exercise-category {
  margin-bottom: 20px;
}

ul {
  list-style: none;
  padding: 0;
}

.exercise-item {
  margin-bottom: 8px;
}
</style>
