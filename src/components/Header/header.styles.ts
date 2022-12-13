import styled from 'styled-components';

export const HeaderContainer = styled.header`
  width: 100%;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    color: ${({ theme }) => theme.white};
    font-family: 'Roboto', sans-serif;
  }

  span {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 5rem;
    width: 5rem;
    border-radius: 50%;
    color: ${({ theme }) => theme.white};
    background: ${({ theme }) => theme['green-300']};
  }
`;

export const NavContainer = styled.nav`
  display: flex;

  ul {
    display: flex;
    gap: 1rem;

    li {
      a {
        color: ${({ theme }) => theme.white};

        &:hover {
          color: ${({ theme }) => theme['green-500']};
        }
      }
    }
  }
`;
