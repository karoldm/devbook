import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  padding: 0 1rem;

  position: fixed;
  top: 0;
  left: 0;

  background: #000;

  a img {
    max-width: 100%;
  }

  z-index: 100;
`;

export const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem 0;
  flex: 1;
`;

export const SearchContent = styled.div`
  display: flex;
  background: #dcdaf6;
  border-radius: 22px;
  border: 3px solid var(--primary);
`;

export const Input = styled.input`
  border-radius: 22px 0 0 22px;
  border: 0;
  outline: none;
  padding: 0 1rem;
  width: 18rem;
  background: #dcdaf6;

  font-weight: normal;
  font-size: 1.5rem;
  line-height: 2.2rem;
  color: #656565;
`;

export const Button = styled.button`
  background: var(--primary);
  border: 0;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 50%;

  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 1.3rem;
  }
`;
