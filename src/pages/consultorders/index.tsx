import { PencilSimpleLine, SignOut, Trash } from 'phosphor-react';
import { Header } from '../../components/Header';
import {
  ButtonContainer,
  WaperContainer,
  WaperFields,
  WarperTableContainer,
} from './consultorders.styles';

export function ConsultOrders() {
  return (
    <WaperContainer>
      <Header title='Consulta Encomendas' />
      <WarperTableContainer>
        <table>
          <thead>
            <tr>
              <th>
                <WaperFields>
                  <span>Encomenda</span>
                  <input type='text' className='filterField active' />
                </WaperFields>
              </th>
              <th>
                <WaperFields>
                  <span>Cliente</span>
                  <input type='text' className='filterField' />
                </WaperFields>
              </th>
              <th>
                <WaperFields>
                  <span>Tlm/Tlf</span>
                  <input type='text' className='filterField' />
                </WaperFields>
              </th>
              <th>
                <WaperFields>
                  <span>Recolha</span>
                  <input type='text' className='filterField' />
                </WaperFields>
              </th>
              <th>
                <span>Tarefas</span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Nº 0001</td>
              <td>Paulo Lima</td>
              <td>966434548</td>
              <td>12/12/2022 10:00</td>
              <td>
                <ButtonContainer>
                  <button>
                    <SignOut size={20} />
                  </button>
                  <button>
                    <PencilSimpleLine size={20} />
                  </button>
                  <button>
                    <Trash size={20} />
                  </button>
                </ButtonContainer>
              </td>
            </tr>
            <tr>
              <td>Nº 0001</td>
              <td>Paulo Lima</td>
              <td>966434548</td>
              <td>12/12/2022 10:00</td>
              <td>
                <ButtonContainer>
                  <button>
                    <SignOut size={20} />
                  </button>
                  <button>
                    <PencilSimpleLine size={20} />
                  </button>
                  <button>
                    <Trash size={20} />
                  </button>
                </ButtonContainer>
              </td>
            </tr>
            <tr>
              <td>Nº 0001</td>
              <td>Paulo Lima</td>
              <td>966434548</td>
              <td>12/12/2022 10:00</td>
              <td>
                <ButtonContainer>
                  <button>
                    <SignOut size={20} />
                  </button>
                  <button>
                    <PencilSimpleLine size={20} />
                  </button>
                  <button>
                    <Trash size={20} />
                  </button>
                </ButtonContainer>
              </td>
            </tr>
            <tr>
              <td>Nº 0001</td>
              <td>Paulo Lima</td>
              <td>966434548</td>
              <td>12/12/2022 10:00</td>
              <td>
                <ButtonContainer>
                  <button>
                    <SignOut size={20} />
                  </button>
                  <button>
                    <PencilSimpleLine size={20} />
                  </button>
                  <button>
                    <Trash size={20} />
                  </button>
                </ButtonContainer>
              </td>
            </tr>
            <tr>
              <td>Nº 0001</td>
              <td>Paulo Lima</td>
              <td>966434548</td>
              <td>12/12/2022 10:00</td>
              <td>
                <ButtonContainer>
                  <button>
                    <SignOut size={20} />
                  </button>
                  <button>
                    <PencilSimpleLine size={20} />
                  </button>
                  <button>
                    <Trash size={20} />
                  </button>
                </ButtonContainer>
              </td>
            </tr>
            <tr>
              <td>Nº 0001</td>
              <td>Paulo Lima</td>
              <td>966434548</td>
              <td>12/12/2022 10:00</td>
              <td>
                <ButtonContainer>
                  <button>
                    <SignOut size={20} />
                  </button>
                  <button>
                    <PencilSimpleLine size={20} />
                  </button>
                  <button>
                    <Trash size={20} />
                  </button>
                </ButtonContainer>
              </td>
            </tr>
            <tr>
              <td>Nº 0001</td>
              <td>Paulo Lima</td>
              <td>966434548</td>
              <td>12/12/2022 10:00</td>
              <td>
                <ButtonContainer>
                  <button>
                    <SignOut size={20} />
                  </button>
                  <button>
                    <PencilSimpleLine size={20} />
                  </button>
                  <button>
                    <Trash size={20} />
                  </button>
                </ButtonContainer>
              </td>
            </tr>
          </tbody>
        </table>
      </WarperTableContainer>
    </WaperContainer>
  );
}
