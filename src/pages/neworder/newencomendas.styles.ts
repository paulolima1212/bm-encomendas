import styled from 'styled-components';

export const WaperContainer = styled.div`
  height: 100vh;
  width: 100%;
  background: ${({ theme }) => theme['gray-400']};
  display: flex;
  flex-direction: column;
  gap: 3rem;
  overflow: hidden;
  padding: 2rem;
`;

export const FieldsContainer = styled.div`
  height: 10rem;
  width: 100%;
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.black};
  gap: 3rem;
  margin-left: 4rem;
  text-align: center;

  label {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  input {
    height: 3.2rem;
    width: 15rem;
    border-radius: 4px;
    background: ${({ theme }) => theme['gray-300']};
    border: 0;
    border-bottom: solid 4px transparent;
    padding: 1rem;

    &:focus {
      border-bottom: solid 3px ${({ theme }) => theme['green-500']};
      background: ${({ theme }) => theme['gray-100']};
    }
  }

  #num_encomenda {
    background: ${({ theme }) => theme['gray-400']};
  }
`;

export const WarperTableContainer = styled.div`
  height: 100%;
  width: 100%;
  color: ${({ theme }) => theme.white};
  padding: 2rem 3rem;
  background: ${({ theme }) => theme['gray-400']};
  border-radius: 8px;

  table {
    width: 100%;
    border-collapse: collapse;
    min-width: 600px;
    color: ${({ theme }) => theme.black};

    .peso {
      width: 8rem;
    }

    th {
      background: ${({ theme }) => theme['gray-500']};
      padding: 1rem;
      padding-left: 2rem;
      text-align: left;
      color: ${({ theme }) => theme['gray-600']};
      font-weight: 900;
      font-size: 1.2rem;
      line-height: 1.6;

      &:first-child {
        border-top-left-radius: 8px;
        padding-left: 1.5rem;
      }

      &:last-child {
        border-top-right-radius: 8px;
        padding-right: 1.5rem;
        max-width: 5%;
      }
    }

    td {
      background: ${({ theme }) => theme['gray-300']};
      border-top: 4px solid ${({ theme }) => theme['gray-800']};
      padding: 1rem;
      font-size: 1.6rem;
      line-height: 1.6;
      width: 15%;

      &:first-child {
        width: 15%;
        padding-left: 1.5rem;
      }

      &:last-child {
        padding-right: 1.5rem;
        max-width: 5%;
      }

      input {
        background: transparent;
        border: 0;
        border-bottom: solid 1px ${({ theme }) => theme['gray-800']};
        margin-left: 1rem;
      }

      span {
        padding: 0 1.12rem;

        input {
          text-align: center;
          margin-right: 1rem;
        }
      }

      button {
        display: inline;
        justify-content: center;
        align-items: center;
        border: none;
        background: transparent;
        cursor: pointer;
        color: ${({ theme }) => theme['green-500']};
        font-weight: 800;
      }
    }
  }
`;

export const InputContainer = styled.input`
  height: 3.2rem;
  width: 13rem;
  background: ${({ theme }) => theme['gray-300']};
`;

export const InputQuantityContainer = styled.input`
  height: 3.2rem;
  width: 2rem;
  background: ${({ theme }) => theme['gray-300']};
  text-align: center;
`;

export const InputPesoContainer = styled.input`
  height: 3.2rem;
  width: 2rem;
  background: ${({ theme }) => theme['gray-300']};
  text-align: center;
`;

export const ButtonCriarEncomendaContainer = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  border: none;
  padding: 1.5rem 1rem;
  background: ${({ theme }) => theme['green-500']};
  color: ${({ theme }) => theme.white};
  font-weight: 800;
  gap: 0.5rem;
  cursor: pointer;
`;

export const ButtonCartEncomenda = styled.button`
  height: 1rem;
  width: 1rem;
`;

export const WaperButtonContainer = styled.div`
  display: flex;
  flex: 1;
  padding: 0 2rem;
  gap: 2.5rem;

  .buttons {
    display: flex;
  }
`;
