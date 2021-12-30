import { useEffect, useState, Key } from 'react';
import { useNavigate } from 'react-router-dom';

import { searchUsers } from '../../services/searcUsers';

import { CardUser } from '../../components/CardUser';

import octocat from '../../assets/octocat.png';
import searchIcon from '../../assets/search-icon.svg';

import {
  Container,
  Banner,
  TopUsersContainer,
  Input,
  Button,
  SearchContainer,
  TopUsersCards
} from './style';


type User = {
  name: string;
  login: string;
  avatar_url: string;
  bio: string;
}

export function Home() {
  const [topUsers, setTopUsers] = useState<User[]>([]);
  const [search, setSearch] = useState('');
  const navigate = useNavigate();


  function handleSearch() {
    if (search.trim() === '') {
      alert("Campo vazio!");
      return;
    }

    navigate(`/results/${search}`);

    setSearch('');
  }


  async function getUsers() {
    const params = {
      q: 'followers:>=1000',
      per_page: 10,
      page: 1,
    }

    const res = await searchUsers(params);

    if (res) {
      setTopUsers(res);
    }
  }

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <Container>
      <Banner>
        <div>
          <span>Stalk People on</span>
          <span>Github!</span>
          <SearchContainer>
            <Input
              type='search'
              placeholder='Pesquisar'
              onChange={event => setSearch(event.target.value)}
            />
            <Button onClick={handleSearch}><img src={searchIcon} alt='search icon' /></Button>
          </SearchContainer>
        </div>
        <img src={octocat} alt='octocat' />
      </Banner>
      <TopUsersContainer>
        <h2>Top Users</h2>
        <TopUsersCards>
          {topUsers.map((user: User, key: Key) => {
            return <CardUser {...user} key={key} />
          })}
        </TopUsersCards>
      </TopUsersContainer>
    </Container >
  );
}