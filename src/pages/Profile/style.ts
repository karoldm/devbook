import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 5rem;
  min-height: 100vh;
  padding: 3rem 4rem;

  display: flex;
  flex-direction: column;
  gap: 2rem;

  h1, h3 {
    color: white;

    > img {
      max-width: 1rem;
    }
  }

  img {
    max-width: 100%;
  }

  details {
  color: #fff;

  summary {
    font-size: 1.2rem;
    font-weight: bold;
  }
}
`;

export const Stats = styled.section`
  background: var(--filter-background);
  padding: 1.5rem;
  border-radius: 8px;
  margin-top: 1rem;

  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
`;

export const Repos = styled.section`
  background: var(--filter-background);
  padding: 1.5rem;
  border-radius: 8px;
  margin-top: 1rem;

  display: flex;
  align-items: center;
  gap: 1.5rem;
  justify-content: space-around;
  flex-wrap: wrap;
`;