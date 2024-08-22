<script setup lang="ts">
import style from './Orders.module.css'
// import { onMounted } from 'vue';
import { useData } from '../composables/useOrdersData';
import { onMounted } from 'vue';
import { useOrderStore } from '../store/ordersStore';

const orderStore = useOrderStore();
const { fetchData } = useData();

onMounted(async () => {
  await fetchData()
})

</script>

<template>
  <div :class="style.orders">
    <table :class="style.table">
      <thead :class="style.thead">
        <tr :class="style.tr">
          <th :class="style.th">Pedido</th>
          <th :class="style.th">Preço</th>
          <th :class="style.th">Status</th>
          <th :class="style.th">Categoria</th>
          <th :class="style.th">Tipo</th>
        </tr>
      </thead>
      <tbody 
        v-for="order in orderStore.getOrders" 
        :key="order"
      >
        <tr>
          <td>{{ order.order }}</td>
          <td>{{ order.price }}</td>
          <td>{{ order.status }}</td>
          <td>{{ order.category }}</td>
          <td>{{ order.type }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>