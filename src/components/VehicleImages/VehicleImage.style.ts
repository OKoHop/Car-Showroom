import styled from 'styled-components';

export const StyledImgList = styled.ul`
  display: flex;
  flex-direction: raw;
  flex-wrap: wrap;
`;

export const StyledLi = styled.li`
  width: 100px;
  height: auto;

  @media (min-width: 768px) {
    width: 150px;
  }

  @media (min-width: 1024px) {
    width: 200px;
  }

  @media (min-width: 1440px) {
    width: 200px;
  }
`;
