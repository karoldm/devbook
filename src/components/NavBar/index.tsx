import { Container, SearchContainer, Input, Button, SearchContent } from './style';

import logo from '../../assets/logo.png';
import searchIcon from '../../assets/search-icon.svg';

export function NavBar() {
  return (
    <Container>
      <img src={logo} alt='devbook logo image'></img>
      <SearchContainer>
        <SearchContent >
          <Input type='search' placeholder='Pesquisar' />
          <Button><img src={searchIcon} /></Button>
        </SearchContent>
      </SearchContainer>
    </Container>
  );
}