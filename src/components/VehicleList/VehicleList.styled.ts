import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  align-items: center;

  @media (min-width: 768px) {
    display: grid;
    grid-gap: 15px;
    grid-template-columns: 300px 300px;
  }

  @media (min-width: 1024px) {
    display: grid;
    grid-gap: 20px;
    grid-template-columns: 300px 300px 300px;
  }
`;
