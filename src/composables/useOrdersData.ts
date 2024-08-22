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

  const fetchPaginateData = async (page?: Number) => {
    try {
        const response = await api.get('orders', {params: {
            _sort: 'createdAt',
            _order: 'desc',
            _page: page
        }});
        orderStore.addPaginateOrders(response.data);
        return response.data;
      } catch (err) {
        error.value = 'Erro ao buscar dados';
      } finally {
        loading.value = false;
      }
  }

  return {
    fetchPaginateData,
    fetchData,
    data,
    error,
    loading
  };
}