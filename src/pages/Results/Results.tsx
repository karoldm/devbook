import { Key, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { searchUsers } from '../../services/searcUsers';

import { Container, UsersContainer, Title } from './style';

import { CardUser } from '../../components/CardUser';

type User = {
  name: string;
  login: string;
  avatar_url: string;
  bio: string;
}

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
  }, [search]);

  return (
    <Container>
      <Title>Resultados para {search}</Title>
      <UsersContainer>
        {results.map((user: User, key: Key) => {
          return <CardUser {...user} key={key} />
        })}
      </UsersContainer>
    </Container>
  );
}