import styled from "styled-components";

export const Container = styled.div`
  margin-top: 88px;
  padding-bottom: 3rem;

  display: flex;
  flex-direction: column;
  gap: 4rem;

  width: 100%;
`;

export const Banner = styled.section`
  background: var(--filter-background);

  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 1rem 0 1rem 1rem;

  > img {
    max-width: 24%;
  }

  > div {
    display: flex;
    flex-direction: column;

    span {
      color: white;
      font-size: 32px;
    }
  }
`;

export const SearchContainer = styled.div`
  display: flex;
  margin-top: 16px;
  background: #dcdaf6;
  border-radius: 8px;
`;

export const Input = styled.input`
  width: 100%;
  border-radius: 8px;
  border: 0;
  outline: none;
  padding: 0 0.5rem;
  background: #dcdaf6;

  font-weight: normal;
  font-size: 1rem;
  color: #656565;
`;

export const Button = styled.button`
  background: var(--primary);
  border: 0;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 0 8px 8px 0;

  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 1.5rem;
  }
`;

export const TopUsersContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 1.5rem 0;
  gap: 2rem;
  margin: 0 3rem;
  background: var(--filter-background);

  border-radius: 8px;

  overflow-x: scroll;

  &::-webkit-scrollbar {
    height: 8px;
  }

  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.2);
  }

  &::-webkit-scrollbar-thumb {
    background-color: var(--filter-background);
    border-radius: 8px;
  }

  h2 {
    color: white;
    align-self: start;
  }
`;

export const TopUsersCards = styled.section`
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: auto;
  grid-auto-flow: column;
  gap: 2rem;
`;
