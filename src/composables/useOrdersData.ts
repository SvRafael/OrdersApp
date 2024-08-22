import api from '../axios';
import { ref } from 'vue';
import { useOrderStore } from '../store/ordersStore';

export function useData() {
  const orderStore = useOrderStore();
  const data = ref<any[]>([]);
  const error = ref<string | null>(null);
  const loading = ref(true);

  const fetchData = async () => {
    try {
      const response = await api.get('orders');
      orderStore.addOrders(response.data);
      return response.data;
    } catch (err) {
      error.value = 'Erro ao buscar dados';
    } finally {
      loading.value = false;
    }
  };

  return {
    fetchData,
    data,
    error,
    loading
  };
}