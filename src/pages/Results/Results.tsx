import { Key, useCallback, useEffect, useState } from "react";
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

  const getUsers = useCallback(async (search, page) => {
    try {
      setLoading(true);

      const params = {
        q: search,
        per_page: 10,
        page: page,
      };

      const res = await searchUsers(params);

      if (res) {
        if (page === 1) {
          setResults(res);
        } else {
          setResults((prev) => [...prev, ...res]);
        }
        window.scrollTo({
          top: document.body.scrollHeight,
          behavior: "smooth",
        });
      }
    } catch (err) {
      alert(err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    // Resetar a página quando o termo de pesquisa mudar
    setPage(1);
    setResults([]);
    getUsers(search, 1);
  }, [search, getUsers]);

  useEffect(() => {
    // apenas para paginação
    if (page > 1) {
      getUsers(search, page);
    }
  }, [page, search, getUsers]);

  return (
    <Container>
      {!loading && (
        <Title>
          {results.length} resultados para {search}
        </Title>
      )}

      <UsersContainer>
        {results.map((user: User, key: Key) => {
          return <CardUser {...user} key={key} />;
        })}
      </UsersContainer>
      {!loading && results.length !== 0 && (results.length * page) % 10 === 0 && (
        <LoadMoreButton onClick={() => setPage((prev) => prev + 1)}>
          Carregar mais
        </LoadMoreButton>
      )}

      {loading && (
        <Loading />
      )}
    </Container>
  );
}
