import { useEffect, useState } from 'react';
import { WarperContainer } from './prouctionlist.styles';
import { NewOrderProps } from '../neworder';

export function ProductionList() {
  const [listOrder, setListOrder] = useState<NewOrderProps[]>([]);

  useEffect(() => {
    const orderJSON = localStorage.getItem('@bolachamaria:encomendas');

    if (orderJSON) {
      setListOrder(JSON.parse(orderJSON));
    }
  }, []);

  console.log(listOrder);
  return (
    <WarperContainer>
      <h1>production list</h1>
      <table>
        <thead>
          <tr>
            <th>Produto</th>
            <th>Quantidade pedido</th>
          </tr>
        </thead>
      </table>
    </WarperContainer>
  );
}
