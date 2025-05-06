import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  padding: 0.5rem 1rem;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;

  background: #000;

  a img {
    max-width: 64%;
  }
`;

export const SearchContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 0;
`;

export const SearchContent = styled.form`
  display: flex;
  background: #dcdaf6;
  border-radius: 22px;
  border: 3px solid var(--primary);
`;

export const Input = styled.input`
  border-radius: 22px 0 0 22px;
  border: 0;
  outline: none;
  padding: 0 0.5rem;
  width: 100%;
  background: #dcdaf6;

  font-weight: normal;
  font-size: 1rem;
  line-height: 1.5rem;
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
    width: 1rem;
  }
`;
