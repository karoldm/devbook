import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import { Container, Stats, Repos } from './style';

import { api } from '../../services/api';

import { NavBar } from '../../components/NavBar';

import toggle from '../../assets/toggle.svg';

type Repositorio = {
  name: string;
  id: string;
  url: string;
}

export function Profile() {
  const [repos, setRepos] = useState<Repositorio[]>([]);
  const { login } = useParams();

  async function getRepos() {
    const res = await api.get(`/users/${login}/repos`);

    try {
      if (res.status === 200) {
        const repositorios: Repositorio[] = [];

        res.data.forEach((repo: Repositorio) => {
          const { name, id } = repo;
          repositorios.push({
            name: name,
            id: id,
            url: `https://github.com/${login}/${name}`
          });

        });

        setRepos(repositorios);
      }
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    getRepos();
  }, [login])

  return (
    <Container>
      <NavBar />
      <h1>{login}</h1>
      <h3><img src={toggle} /> Github stats</h3>
      <Stats>
        <img
          src={`https://github-readme-stats.vercel.app/api?username=${login}&title_color=FFF&text_color=696969&bg_color=151515&hide_border=true&show_icons=true&icon_color=79FE96`}
          alt='user stats'
        />
        <img
          src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${login}&layout=compact&title_color=FFF&text_color=696969&bg_color=151515&hide_border=true`}
          alt='user stats'
        />
      </Stats>
      <h3><img src={toggle} /> Repos</h3>
      <Repos>
        {repos.map((repo) =>
          <Link to={repo.url} key={repo.id}>
            <img src={`https://github-readme-stats.vercel.app/api/pin/?username=${login}&repo=${repo.name}&title_color=FFF&text_color=696969&bg_color=151515&hide_border=true&icon_color=79FE96`} alt='user repositories' />
          </Link>
        )}
      </Repos>
    </Container>
  );
}