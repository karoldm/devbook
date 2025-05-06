import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { searchUsers } from "../../services/searcUsers";

import octocat from "../../assets/octocat.png";
import searchIcon from "../../assets/search-icon.svg";

import { CardUser } from "../../components/CardUser";
import { Loading } from "../../components/Loading";
import {
  Banner,
  Button,
  Container,
  Input,
  SearchContainer,
  TopUsersCards,
  TopUsersContainer,
} from "./style";

type User = {
  name: string;
  login: string;
  avatar_url: string;
  bio: string;
};

export function Home() {
  const [topUsers, setTopUsers] = useState<User[]>([]);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  function handleSearch() {
    if (search.trim() === "") {
      alert("Campo vazio!");
      return;
    }

    navigate(`/results/${search}`);

    setSearch("");
  }

  async function getUsers() {
    try {
      setLoading(true);

      const params = {
        q: "followers:>=1000",
        per_page: 10,
        page: 1,
      };

      const res = await searchUsers(params);

      if (res) {
        setTopUsers(res as User[]);
      }
    } catch (err) {
      alert(err);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getUsers();
  }, []);

  const submitForm = (event: React.FormEvent) => {
    event.preventDefault();
    handleSearch();
  };

  return (
    <Container>
      <Banner>
        <div>
          <span>Stalk people on Github!</span>
          <SearchContainer onSubmit={submitForm}>
            <Input
              type="search"
              placeholder="Pesquisar"
              onChange={(event) => setSearch(event.target.value)}
              value={search}
            />
            <Button type="submit">
              <img src={searchIcon} alt="search icon" />
            </Button>
          </SearchContainer>
        </div>
        <img src={octocat} alt="octocat" />
      </Banner>
      <TopUsersContainer>
        {loading ? (
          <Loading />
        ) : (
          <>
            <h2 style={{ marginLeft: "1.5rem" }}>Top users</h2>
            <TopUsersCards>
              {topUsers.map((user: User, index) => (
                <CardUser key={user.login} {...user} />
              ))}
            </TopUsersCards>
          </>
        )}
      </TopUsersContainer>
    </Container>
  );
}
