import { useOrderStore } from '../store/ordersStore';

export function useSummary(){
    const orderStore = useOrderStore();
    const getSummaryData = function(){
        const summary = {
            income: 0,
            outcome: 0,
            total: 0,
        }
        orderStore.getOrders.forEach(order => {
            if(order.type === 'ENTRADA'){
                summary.income += order.price;
                summary.total += order.price;
              }else{
                summary.outcome += order.price;
                summary.total -= order.price;
              }
        });
        return summary;
    }

    return { getSummaryData };
}