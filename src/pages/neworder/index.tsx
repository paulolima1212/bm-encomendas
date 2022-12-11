import { PlusCircle, MinusCircle, ShoppingCart } from 'phosphor-react';
import { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';

import { Header } from '../../components/Header';

import {
  ButtonCartEncomenda,
  ButtonCriarEncomendaContainer,
  FieldsContainer,
  InputContainer,
  InputQuantityContainer,
  WaperButtonContainer,
  WaperContainer,
  WarperTableContainer,
} from './newencomendas.styles';

interface NewProdcutProps {
  product: string;
  pesoProduct: string;
  quantity: number;
  price: string;
}

interface NewOrderProps {
  id: number;
  name: string;
  phone: string;
  dateTime: string;
  products: NewProdcutProps[];
}

export function NewOrder() {
  const [quantity, setQuantity] = useState(0);
  const [order, setOrder] = useState<NewProdcutProps[]>([]);
  const [newOrder, setNewOrder] = useState<NewOrderProps>({} as NewOrderProps);
  const [idActiveOrder, setIdActiveOrder] = useState(0);
  const [products, setProducts] = useState<NewProdcutProps[]>();

  const descPrincipal = useRef<HTMLTableDataCellElement>(null);
  const descVariant = useRef<HTMLInputElement>(null);
  const peso = useRef<HTMLInputElement>(null);
  const price = useRef<HTMLTableCellElement>(null);

  const { register, handleSubmit, reset } = useForm();

  function handleIncreaseQuantity() {
    setQuantity((prev) => prev + 1);
  }

  function handleDecreaseQuantity() {
    if (quantity >= 1) {
      setQuantity((prev) => prev - 1);
    }
  }

  function handleCreateNewOrder(data: any) {
    const activeOrder = {
      id: idActiveOrder,
      name: data.name,
      phone: data.phone,
      dateTime: data.dateTime,
      products: order,
    };

    setNewOrder(activeOrder);
    setIdActiveOrder(0);
    setOrder([]);
    reset();
  }

  function handleChangeQuantity() {
    const quantity = document.getElementById('quantity') as HTMLInputElement;
    setQuantity(Number(quantity.value));
  }

  function handleAddProductInCart() {
    if (descPrincipal.current!.innerText !== '' && peso.current!.value !== '') {
      console.log('pass');
      const product =
        descPrincipal.current?.parentElement?.innerText +
        ' ' +
        descPrincipal.current!.innerText;

      const pesoProduct = peso.current!.value;

      const newProduct = {
        product,
        pesoProduct,
        quantity,
        price: price.current!.innerText,
      };

      setOrder((prev) => [...prev, newProduct]);

      const idOrder = document.getElementById(
        'num_encomenda'
      ) as HTMLInputElement;
      if (Number(idOrder.value) === 0) {
        setIdActiveOrder(Math.floor(1000 + Math.random() * 9000));
      }
    }
  }

  return (
    <WaperContainer>
      <Header title='Bolacha Maria - Registo Encomendas' />
      <form onSubmit={handleSubmit(handleCreateNewOrder)}>
        <FieldsContainer>
          <label htmlFor='num_encomenda'>
            <span>Nº Encomenda</span>
            <InputContainer
              {...register('idOrder')}
              value={idActiveOrder}
              readOnly
              id='num_encomenda'
            />
          </label>
          <label htmlFor='nome_cliente'>
            <span>Nome cliente</span>
            <input type='text' id='nome_cliente' {...register('name')} />
          </label>
          <label htmlFor='telemovel'>
            <span>Telemovel</span>
            <input type='number' id='telemovel' {...register('phone')} />
          </label>
          <label htmlFor='data_entrega'>
            <span>Data/Hora</span>
            <input
              type='datetime-local'
              id='data_entrega'
              {...register('dateTime')}
            />
          </label>
          <ButtonCriarEncomendaContainer type='submit'>
            <PlusCircle size={25} /> Nova Encomenda
          </ButtonCriarEncomendaContainer>
        </FieldsContainer>
      </form>
      <WarperTableContainer>
        <datalist id='products'>
          <option value='Chocolate' />
          <option value='Tradicional' />
          <option value='Chocolate branco' />
        </datalist>
        <datalist id='peso'>
          <option value='1.5kg' />
          <option value='1kg' />
          <option value='500g' />
        </datalist>
        <table>
          <thead>
            <tr>
              <th>Descrição</th>
              <th>Variante</th>
              <th>Peso</th>
              <th>Valor</th>
              <th>Quantidade</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td ref={descPrincipal}>Bolo rei</td>
              <td>
                <input type='text' ref={descVariant} />
              </td>
              <td>
                <input type='text' list='peso' className='peso' ref={peso} />
              </td>
              <td ref={price}>19.99</td>
              <td>
                <WaperButtonContainer>
                  <div className='buttons'>
                    <button onClick={handleDecreaseQuantity}>
                      <MinusCircle />
                    </button>
                    <span>
                      <InputQuantityContainer
                        placeholder='0'
                        onChange={handleChangeQuantity}
                        value={quantity}
                        id='quantity'
                        min={0}
                      />
                    </span>
                    <button onClick={handleIncreaseQuantity}>
                      <PlusCircle />
                    </button>
                  </div>
                </WaperButtonContainer>
              </td>
              <td>
                <ButtonCartEncomenda onClick={handleAddProductInCart}>
                  <ShoppingCart size={25} />
                </ButtonCartEncomenda>
              </td>
            </tr>
          </tbody>
        </table>
      </WarperTableContainer>
    </WaperContainer>
  );
}
