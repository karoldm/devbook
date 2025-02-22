import { Key, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { searchUsers } from "../../services/searcUsers";

import { Container, LoadMoreButton, Title, UsersContainer } from "./style";

import { CardUser } from "../../components/CardUser";
import { Loading } from "../../components/Loading";

type User = {
  name: string;
  login: string;
  avatar_url: string;
  bio: string;
};

export function Results() {
  const [results, setResults] = useState<User[]>([]);
  const { search } = useParams();

  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  async function getUsers() {
    try {
      setLoading(true);

      const params = {
        q: search,
        per_page: 10,
        page: page,
      };

      const res = await searchUsers(params);

      if (res) {
        setTimeout(() => {
          setResults((prev) => [...prev, ...res]);
          setLoading(false);
        }, 1000);
      }
    } catch (err) {
      alert(err);
    }
  }

  useEffect(() => {
    getUsers();
  }, [page]);

  return (
    <Container>
      {loading ? (
        <Loading />
      ) : (
        <>
          <Title>
            {results.length} resultados para {search}
          </Title>
          <UsersContainer>
            {results.map((user: User, key: Key) => {
              return <CardUser {...user} key={key} />;
            })}
          </UsersContainer>
          {!loading && (results.length * page) % 10 == 0 && (
            <LoadMoreButton onClick={() => setPage((prev) => prev + 1)}>
              Carregar mais
            </LoadMoreButton>
          )}
        </>
      )}
    </Container>
  );
}
