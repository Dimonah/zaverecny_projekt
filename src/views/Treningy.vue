<template>
  <div>
    <Trening v-if="Object.keys(treningExercises).length > 0" :exercises="treningExercises" />
  </div>
</template>

<script>
import data from "@/data.json";
import Trening from "../components/Trening.vue";

export default {
  name: "Treningy",
  components: {
    Trening,
  },
  data() {
    return {
      treningExercises: data.exercises,
    };
  },
};
</script>
