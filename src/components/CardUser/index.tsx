import { Container, UserInfo } from './style';

type User = {
  name: string;
  login: string;
  avatar_url: string;
  bio: string;
}

export function CardUser(props: User) {
  return (
    <Container>
      <img src={props.avatar_url} alt='user avatar' />
      <UserInfo>
        <strong>{props.name}</strong>
        <strong>{'@' + props.login}</strong>
      </UserInfo>
      <p>{props.bio}</p>
    </Container>
  );
}