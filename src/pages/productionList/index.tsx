import { useEffect, useState } from 'react';
import { WaperContainer } from './prouctionlist.styles';
import { NewOrderProps } from '../neworder';

export function ProductionList() {
  const [listOrder, setListOrder] = useState<NewOrderProps[]>([]);

  useEffect(() => {
    const orderJSON = localStorage.getItem('@bolachamaria:encomendas');

    if (orderJSON) {
      setListOrder(JSON.parse(orderJSON));
    }
  }, []);

  const listProducts = listOrder.reduce(
    (acc, order) => {
      return acc;
    },
    {
      id: 0,
      name: '',
      phone: '',
      dateTime: '',
      products: [],
      statusOrder: '',
    }
  );

  console.log(listOrder);
  return (
    <WaperContainer>
      <h1>production list</h1>
    </WaperContainer>
  );
}
