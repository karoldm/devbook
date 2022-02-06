import { Link } from 'react-router-dom';
import { Container, UserInfo } from './style';

type User = {
  name: string;
  login: string;
  avatar_url: string;
  bio: string;
}

export function CardUser({ name, login, avatar_url, bio }: User) {
  return (
    <Link to={`/profile/${login}`}>
      <Container>
        <img src={avatar_url} alt={`${name} Avatar`} />
        <UserInfo>
          <strong>{name}</strong>
          <strong>{'@' + login}</strong>
        </UserInfo>
        <p>{bio}</p>
      </Container>
    </Link>
  );
}