import { Key, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { searchUsers } from '../../services/searcUsers';

import { Container, UsersContainer, Title } from './style';

import { CardUser } from '../../components/CardUser';

import octocat from '../../assets/octocat.png';

type User = {
  name: string;
  login: string;
  avatar_url: string;
  bio: string;
}

const teste: User[] = [
  {
    name: 'karol',
    login: 'karoldm',
    avatar_url: octocat,
    bio: 'string'
  },

];

export function Results() {
  const [results, setResults] = useState<User[]>([]);
  const { search } = useParams();


  async function getUsers() {
    const params = {
      q: search
    }

    await searchUsers(params).then((res) => setResults(res!));
  }

  useEffect(() => {
    getUsers();
  }, [getUsers]);

  return (
    <Container>
      <Title>Resultados para {search}</Title>
      <UsersContainer>
        {teste.map((user: User, key: Key) => {
          return <CardUser {...user} key={key} />
        })}
      </UsersContainer>
    </Container>
  );
}