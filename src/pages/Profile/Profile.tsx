import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { Container, Repos, Stats } from "./style";

import { api } from "../../services/api";

type Repositorio = {
  name: string;
  id: string;
  url: string;
  owner?: {
    login: string;
  }
};

export function Profile() {
  const [repos, setRepos] = useState<Repositorio[]>([]);
  const { login } = useParams();

  const getRepos = useCallback(async (login) => {
    const res = await api.get(`/users/${login}/repos`);

    try {
      if (res.status === 200) {
        const repositorios: Repositorio[] = [];

        res.data.forEach((repo: Repositorio) => {
          console.log(repo);
          const { name, id, owner } = repo;
          repositorios.push({
            name: name,
            id: id,
            url: `https://github.com/${owner ? owner.login : login}/${name}`,
          });
        });

        setRepos(repositorios);
      }
    } catch (e) {
      console.log(e);
    }
  }, []);

  useEffect(() => {
    getRepos(login);
  }, [login, getRepos]);

  return (
    <Container>
      <h1>{login}</h1>
      <details title="Github stats" open>
        <summary> Github stats</summary>
        <Stats>
          <img
            src={`https://github-readme-stats.vercel.app/api?username=${login}&title_color=FFF&text_color=696969&bg_color=151515&hide_border=true&show_icons=true&icon_color=79FE96`}
            alt="user stats"
          />
          <img
            src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${login}&layout=compact&title_color=FFF&text_color=696969&bg_color=151515&hide_border=true`}
            alt="user stats"
          />
        </Stats>
      </details>
      <details>
        <summary> Repos</summary>
        <Repos>
          {repos.map((repo) => (
            <a href={repo.url} key={repo.id} target="_blank" rel="noreferrer">
              <img
                src={`https://github-readme-stats.vercel.app/api/pin/?username=${login}&repo=${repo.name}&title_color=FFF&text_color=696969&bg_color=151515&hide_border=true&icon_color=79FE96`}
                alt="user repositories"
              />
            </a>
          ))}
        </Repos>
      </details>
    </Container>
  );
}
