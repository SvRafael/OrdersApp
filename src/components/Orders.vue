<script setup lang="ts">
import style from './Orders.module.css'
// import { onMounted } from 'vue';
import { useData } from '../composables/useOrdersData';
import { onMounted } from 'vue';
import { useOrderStore } from '../store/ordersStore';
import Pagination from '../components/Pagination.vue'

const orderStore = useOrderStore();
const { fetchData, fetchPaginateData } = useData();

onMounted(async () => {
  await fetchData()
  await fetchPaginateData(1)
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
        v-for="order in orderStore.getPaginatedOrders" 
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
    <Pagination />
  </div>
</template>