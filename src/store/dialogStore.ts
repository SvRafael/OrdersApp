import { defineStore } from 'pinia';

export const useDialogStore = defineStore('dialog', {
  state: () => ({
    open: <boolean>(false),
  }),
  getters: {
    getDialogIsOpen: (state) => state.open,
  },
  actions: {
    setDialogOpen(status: boolean) {
      this.open = status;
    },
  }
});