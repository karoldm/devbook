import styled from "styled-components";

export const Container = styled.div`
  margin-top: 8rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;

  padding: 2rem;
  gap: 2rem;
`;

export const Title = styled.h1`
  color: #fff;
`;

export const UsersContainer = styled.main`
  width: 100%;
  padding: 1rem;
  border-radius: 8px;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2rem;
`;

export const LoadMoreButton = styled.button`
  border: none;
  outline: none;
  border-radius: 32px;
  padding: 0.5rem 1rem;
  background: var(--primary);
  color: white;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
`;
