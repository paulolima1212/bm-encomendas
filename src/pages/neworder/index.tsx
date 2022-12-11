import cuid from 'cuid';

import {
  PlusCircle,
  MinusCircle,
  ShoppingCart,
  Trash,
  PencilLine,
  FloppyDisk,
} from 'phosphor-react';
import { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';

import { Header } from '../../components/Header';

import {
  ButtonCartEncomenda,
  ButtonContainer,
  ButtonCriarEncomendaContainer,
  FieldsContainer,
  FieldsItemContainer,
  InputContainer,
  InputContainerBigger,
  InputContainerDefault,
  InputContainerSmall,
  InputQuantityContainer,
  TableContainer,
  WaperButtonContainer,
  WaperContainer,
  WarperTableContainer,
} from './newencomendas.styles';

interface NewProdcutProps {
  id: string;
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

  const descPrincipal = useRef<HTMLInputElement>(null);
  const descVariant = useRef<HTMLInputElement>(null);
  const peso = useRef<HTMLInputElement>(null);
  const price = useRef<HTMLInputElement>(null);

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

    console.log(newOrder);
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
    const descriptionProduct =
      descPrincipal.current!.value + ' - ' + descVariant.current!.value;
    const weightProduct = peso.current!.value;
    const priceProduct = price.current!.value;

    console.log(descriptionProduct, weightProduct, priceProduct);

    if (
      descriptionProduct !== '' &&
      weightProduct !== '' &&
      priceProduct !== '' &&
      quantity !== 0
    ) {
      const newItem: NewProdcutProps = {
        id: cuid(),
        pesoProduct: weightProduct,
        price: priceProduct,
        product: descriptionProduct,
        quantity: quantity,
      };

      setOrder((prev) => [...prev, newItem]);

      descPrincipal.current!.value = '';
      descVariant.current!.value = '';
      peso.current!.value = '';
      price.current!.value = '';
      setQuantity(0);
    }
  }

  function handleDeleteItem(id: string) {
    const newList = order.filter((item) => item.id !== id);

    setOrder(newList);
  }

  function handleEditItem(id: string) {
    const newList = order.filter((item) => item.id !== id);
    order.filter((item) => {
      if (item.id === id) {
        descPrincipal.current!.value = item.product.split('-')[0];
        descVariant.current!.value = item.product.split('-')[1];
        peso.current!.value = item.pesoProduct;
        price.current!.value = item.price;
        setQuantity(item.quantity);
      }
    });

    setOrder(newList);
  }

  return (
    <WaperContainer>
      <Header title='Bolacha Maria - Registo Encomendas' />
      <form onSubmit={handleSubmit(handleCreateNewOrder)}>
        <FieldsContainer>
          <h3>Dados encomenda</h3>
          <div>
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
          </div>
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
        <datalist id='description'>
          <option value='Bolo rei' />
          <option value='Pão de ló' />
          <option value='Rabanada' />
        </datalist>
        <datalist id='variant'>
          <option value='Chocolate' />
          <option value='tradicional' />
          <option value='nutella' />
        </datalist>
        <datalist id='price'>
          <option value='19.99€' />
          <option value='18.99€' />
          <option value='17.99€' />
        </datalist>

        <FieldsItemContainer>
          <ButtonCriarEncomendaContainer type='submit'>
            <FloppyDisk size={25} /> Salvar encomenda
          </ButtonCriarEncomendaContainer>
          <h3>Novo item</h3>
          <div>
            <InputContainerDefault
              ref={descPrincipal}
              type='text'
              list='description'
            />
            <InputContainerBigger
              ref={descVariant}
              type='text'
              list='variant'
            />
            <InputContainerSmall ref={peso} type='text' list='peso' />
            <InputContainerSmall ref={price} type='text' list='price' />

            <div className='buttons'>
              <button onClick={handleDecreaseQuantity}>
                <MinusCircle size={25} />
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
                <PlusCircle size={25} />
              </button>
            </div>

            <ButtonContainer>
              <ButtonCartEncomenda onClick={handleAddProductInCart}>
                <ShoppingCart size={25} />
              </ButtonCartEncomenda>
            </ButtonContainer>
          </div>
        </FieldsItemContainer>
        <TableContainer>
          <table>
            <thead>
              <tr>
                <th>Descrição</th>
                <th>Peso</th>
                <th>Valor</th>
                <th>Quantidade</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {order.map((item) => {
                return (
                  <tr key={item.id}>
                    <td>{item.product}</td>
                    <td>{item.pesoProduct}</td>
                    <td>{item.price}</td>
                    <td>{item.quantity}</td>
                    <td>
                      <ButtonContainer>
                        <ButtonCartEncomenda
                          onClick={() => handleEditItem(item.id)}
                        >
                          <PencilLine size={25} />
                        </ButtonCartEncomenda>
                        <ButtonCartEncomenda
                          onClick={() => handleDeleteItem(item.id)}
                        >
                          <Trash size={25} />
                        </ButtonCartEncomenda>
                      </ButtonContainer>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </TableContainer>
      </WarperTableContainer>
    </WaperContainer>
  );
}
