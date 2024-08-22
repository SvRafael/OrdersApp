import { defineStore } from 'pinia';

export const useOrderStore = defineStore('orders', {
  state: () => ({
    orders: <any[]>([]),
    orders_paginated: <any[]>([])
  }),
  getters: {
    getOrders: (state) => state.orders,
    getPaginatedOrders: (state) => state.orders_paginated
  },
  actions: {
    addOrders(orders_data: Array<Object>) {
      this.orders = orders_data;
    },
    addPaginateOrders(orders_data: Array<Object>) {
        this.orders_paginated = orders_data;
      },
  }
});