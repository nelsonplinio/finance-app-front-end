import React from 'react';

import { NavLink } from 'react-router-dom';

import { Container } from './styles';

import Logo from '../../assets/logo.svg';

interface HeaderProps {
  size?: 'small' | 'large';
}

const Header: React.FC<HeaderProps> = ({ size = 'large' }: HeaderProps) => (
  <Container size={size}>
    <header>
      <img src={Logo} alt="GoFinances" />
      <nav>
        <NavLink
          to="/"
          exact
          activeStyle={{
            borderBottom: 'solid 2px #FF872C',
          }}
        >
          Listagem
        </NavLink>
        <NavLink
          to="/import"
          activeStyle={{
            borderBottom: 'solid 2px #FF872C',
          }}
        >
          Importar
        </NavLink>
      </nav>
    </header>
  </Container>
);

export default Header;
