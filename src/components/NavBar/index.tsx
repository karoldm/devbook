import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import {
  Button,
  Container,
  Input,
  SearchContainer,
  SearchContent,
} from "./style";

import logo from "../../assets/logo.png";
import searchIcon from "../../assets/search-icon.svg";

export function NavBar() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  function handleSearch() {
    if (search.trim() === "") {
      alert("Campo vazio!");
      return;
    }

    navigate(`/results/${search}`);

    setSearch("");
  }

  const submitForm = (event: React.FormEvent) => {
    event.preventDefault();
    handleSearch();
  }

  return (
    <>
      <Container>
        <Link to="/">
          <img src={logo} alt="devbook" />
        </Link>
        <SearchContainer>
          <SearchContent onSubmit={submitForm}>
            <Input
              type="search"
              placeholder="Pesquisar"
              onChange={(event) => setSearch(event.target.value)}
              value={search}
            />
            <Button type="submit">
              <img src={searchIcon} alt="search" />
            </Button>
          </SearchContent>
        </SearchContainer>
      </Container>
    </>
  );
}
