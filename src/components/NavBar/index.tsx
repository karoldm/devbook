import { ReactNode, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { Container, SearchContainer, Input, Button, SearchContent } from './style';

import logo from '../../assets/logo.png';
import searchIcon from '../../assets/search-icon.svg';


export function NavBar() {
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  function handleSearch() {
    if (search.trim() === '') {
      alert("Campo vazio!");
      return;
    }

    setSearch('');
    navigate(`/results/${search}`);

  }

  return (
    <>
      <Container>
        <Link to='/' ><img src={logo} alt='devbook logo image' /></Link>
        <SearchContainer>
          <SearchContent >
            <Input
              type='search'
              placeholder='Pesquisar'
              onChange={event => setSearch(event.target.value)}
            />
            <Button onClick={handleSearch}><img src={searchIcon} alt='search' /></Button>
          </SearchContent>
        </SearchContainer>
      </Container>
    </>
  );
}