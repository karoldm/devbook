import { useEffect, useState } from 'react';

import { CardUser } from '../../components/CardUser';

import api from '../../services/api';

import octocat from '../../assets/octocat.png';
import searchIcon from '../../assets/search-icon.svg';

import { Container, Banner, TopUsersContainer, Input, Button, SearchContainer, TopUsersCards } from './style';

type User = {
  name: string;
  login: string;
  avatar_url: string;
  bio: string;
}

export function Home() {
  const [topUsers, setTopUsers] = useState<User[]>([]);

  async function getUsers() {
    const res = await api.get('/search/users', {
      params: {
        q: 'followers:>=1000',
        per_page: 10,
        page: 1,
      }
    });

    try {

      if (res.status === 200) {

        res.data.items.forEach(async (user: User) => {

          const res = await api.get(`/users/${user.login}`);

          if (res.status === 200) {
            const { name, bio, avatar_url, login } = res.data;

            setTopUsers([...topUsers, {
              name: name,
              login: login,
              avatar_url: avatar_url,
              bio: bio
            }]);

          }
        });

      }

    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    getUsers();
  }, [getUsers]);

  return (
    <Container>
      <Banner>
        <div>
          <span>Stalk People on</span>
          <span>Github!</span>
          <SearchContainer>
            <Input type='search' placeholder='Pesquisar'></Input>
            <Button><img src={searchIcon} alt='search icon' /></Button>
          </SearchContainer>
        </div>
        <img src={octocat} alt='octocat' />
      </Banner>
      <TopUsersContainer>
        <h2>Top Users</h2>
        <TopUsersCards>
          {topUsers.map((user: User, key: any) => {
            return <CardUser {...user} key={key} />
          })}
        </TopUsersCards>
      </TopUsersContainer>
    </Container >
  );
}