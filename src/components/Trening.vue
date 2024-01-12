<template>
    <div>
      <h1>Tréningové plány</h1>
      <div v-if="exercises && Object.keys(exercises).length > 0">
        <div v-for="category in Object.keys(exercises)" :key="category">
          <h2>{{ category }}</h2>
          <ul>
            <li v-for="exercise in exercises[category]" :key="exercise.id">
              {{ exercise.name }}
              <span v-if="exercise.duration">- {{ exercise.duration }}</span>
              <span v-if="exercise.repetitions">({{ exercise.repetitions }} opakovania)</span>
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
    name: 'Trening',
    };
  </script>
  