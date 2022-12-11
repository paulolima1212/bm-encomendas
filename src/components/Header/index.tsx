import { ShoppingCart } from 'phosphor-react';
import { HeaderContainer } from './header.styles';

interface HeaderProps {
  title: string;
}

export function Header({ title }: HeaderProps) {
  return (
    <HeaderContainer>
      <h1>{title}</h1>
      <span>
        <ShoppingCart size={25} />
      </span>
    </HeaderContainer>
  );
}
