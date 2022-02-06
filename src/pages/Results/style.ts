import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 8rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  padding: 2rem 4rem;
  gap: 2rem;
`;

export const Title = styled.h1`
  color: #fff;
`;

export const UsersContainer = styled.main`
  background: var(--filter-background);
  width: 100%;
  padding: 1rem;
  border-radius: 8px;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2rem;
`;