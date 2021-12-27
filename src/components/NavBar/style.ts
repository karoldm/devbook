import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  padding: 1rem;

  position: fixed;
  top: 0; left: 0;

  background: #000;

  > img {
    max-width: 30%;
  }

  z-index: 100;

`;

export const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;

  margin-right: 8rem;
`;

export const SearchContent = styled.div`
  display: flex;
  background: #DCDAF6;
  border-radius: 22px;
  border: 3px solid var(--primary);
`;

export const Input = styled.input`
  border-radius: 22px 0 0 22px;
  border: 0;
  outline: none;
  padding: 0 1rem;
  width: 18rem;
  background: #DCDAF6;

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