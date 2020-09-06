import React from 'react';

import {
  Container,
  LeftSide,
  CenterSide,
  RightSide,
  FormWrapper,
  SearchBar,
  SearchButton,
  SearchIcon,
  Wrapper,
  ButtonIcon,
  CameraIcon,
  GridIcon,
  BellIcon
} from './styles';

import YouTubeLogo from '../Static/LogoSmall';
import BurgerMenu from '../BurgerMenu';

const Header: React.FC = () => {
  return (
      <Container>
        <LeftSide>
          <BurgerMenu />
          <YouTubeLogo />
        </LeftSide>
        <CenterSide>
          <FormWrapper>
            <SearchBar placeholder="Pesquisar" />
            <SearchButton>
              <SearchIcon />
            </SearchButton>
          </FormWrapper>
        </CenterSide>
        <RightSide>
          <Wrapper>
            <ButtonIcon>
              <CameraIcon />
            </ButtonIcon>
            <ButtonIcon>
              <GridIcon />
            </ButtonIcon>
            <ButtonIcon>
              <BellIcon />
            </ButtonIcon>
          </Wrapper>
        </RightSide>
      </Container>
  );
}

export default Header;