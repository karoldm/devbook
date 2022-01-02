import { useNavigate } from 'react-router-dom';

import { Container, UserInfo } from './style';

type User = {
  name: string;
  login: string;
  avatar_url: string;
  bio: string;
}

export function CardUser(props: User) {
  const navigate = useNavigate();

  function handleStatsPage() {

    navigate(`/profile/${props.login}`);

  }

  return (
    <Container onClick={handleStatsPage}>
      <img src={props.avatar_url} alt='user avatar' />
      <UserInfo>
        <strong>{props.name}</strong>
        <strong>{'@' + props.login}</strong>
      </UserInfo>
      <p>{props.bio}</p>
    </Container>
  );
}