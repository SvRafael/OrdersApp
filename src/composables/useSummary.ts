import { useOrderStore } from '../store/ordersStore';

export function useSummary(){
    const orderStore = useOrderStore();
    const summary = {
        income: 0,
        outcome: 0,
        total: 0,
    }
    const getSummaryData = function(){
        orderStore.getOrders.forEach(order => {
            if(order.type === 'income'){
                summary.total += order.price;
                summary.income += order.price;
              }else{
                summary.total -= order.price;
                summary.outcome += order.price;
              }
        });
        return summary;
    }

    return { getSummaryData };
}