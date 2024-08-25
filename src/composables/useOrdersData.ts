import api from '../axios';
import { ref } from 'vue';
import { useOrderStore } from '../store/ordersStore';
import { useDialogStore } from '../store/dialogStore';

export function useData() {
  const orderStore = useOrderStore();
  const data = ref<any[]>([]);
  const error = ref<string | null>(null);
  const loading = ref(true);
  const dialogStore = useDialogStore();

  const fetchData = async () => {
    try {
        const response = await api.get('orders', {
            params: {
                _sort: 'createdAt',
                _order: 'desc',
            }
        });
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

  const createOrder = async (order: string, price: Number|string, category: string, type: string) => {
    let response = await api.post('orders', {
        "order": order,
        "price": price,
        "category": category,
        "type": type,
        "create_at": new Date() 
    })
    orderStore.addOrders([...orderStore.getOrders, response.data]);
    orderStore.addPaginateOrders([...orderStore.getPaginatedOrders, response.data]);
    dialogStore.setDialogOpen(false);
  }

  return {
    fetchPaginateData,
    fetchData,
    createOrder,
    data,
    error,
    loading
  };
}