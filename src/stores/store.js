import { defineStore } from 'pinia';

export const useColorStore = defineStore({
  id: 'color',
  state: () => ({
    isDark:false,
  }),
  actions: {
    toggleDark() {
      this.isDark = !this.isDark;
      console.log(this.isDark)
    },
  },
});
