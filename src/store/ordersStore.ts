import { defineStore } from 'pinia';

export const useOrderStore = defineStore('orders', {
  state: () => ({
    orders: <any[]>([])
  }),
  getters: {
    getOrders: (state) => state.orders
  },
  actions: {
    addOrders(orders_data: Array<Object>) {
      this.orders = orders_data;
    }
  }
});