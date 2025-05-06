import styled from "styled-components";

export const Container = styled.div`
  margin-top: 5rem;
  min-height: 100vh;
  padding: 2rem;

  display: flex;
  flex-direction: column;
  gap: 2rem;

  h1,
  h3 {
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
  padding: 1rem;
  border-radius: 8px;
  margin-top: 1rem;

  display: flex;
  gap: 2rem;
  align-items: start;
  justify-content: start;
  flex-wrap: wrap;
`;

export const Repos = styled.section`
  padding: 1rem;
  border-radius: 8px;
  margin-top: 1rem;

  display: flex;
  align-items: center;
  gap: 2rem;
  justify-content: start;
  flex-wrap: wrap;
`;
