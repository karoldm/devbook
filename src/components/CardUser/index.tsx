import { CSSProperties } from "react";
import { Link } from "react-router-dom";
import { Container, UserInfo } from "./style";

type User = {
  name: string;
  login: string;
  avatar_url: string;
  bio: string;
};

type Props = User & {
  style?: CSSProperties;
};

export function CardUser({ name, login, avatar_url, bio, style }: Props) {
  return (
    <Link style={style} to={`/profile/${login}`}>
      <Container>
        <img src={avatar_url} alt={`${name} Avatar`} />
        <UserInfo>
          <strong>{name}</strong>
          <strong>{"@" + login}</strong>
        </UserInfo>
        <p>{bio}</p>
      </Container>
    </Link>
  );
}
