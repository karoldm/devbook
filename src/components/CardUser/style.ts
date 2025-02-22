import styled from "styled-components";

export const Container = styled.div`
  width: 15rem;
  height: 25rem;
  display: flex;
  flex-direction: column;
  background: var(--filter-background);

  border-radius: 8px;
  overflow: hidden;

  > img {
    max-width: 100%;
    border-radius: 8px 8px 0 0;
  }

  p {
    color: white;
    padding: 1rem;
    font-size: 0.8rem;
  }
`;

export const UserInfo = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  color: #fff;
  font-size: 1rem;
`;
