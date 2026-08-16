import styled from 'styled-components';

type SectionProps = {
  bgimage: string;
};

export const StyledHero = styled.section<SectionProps>`
  position: relative;
  width: 100%;
  height: 30vh;
  //   min-height: 300px;
  background-image: url(${props => props.bgimage});
  background-size: cover;
  background-position: center right;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  color: #ffffff;
  overflow: hidden;
  border-radius: 10px;

  @media (min-width: 768px) {
    height: 30vh;
  }

  @media (min-width: 1024px) {
    height: 40vh;
  }

  @media (min-width: 1440px) {
    height: 50vh;
  }
`;

export const StyledHeroDiv = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    rgba(10, 12, 16, 0.85) 0%,
    rgba(10, 12, 16, 0.5) 50%,
    rgba(10, 12, 16, 0.1) 100%
  );
  z-index: 1;
`;

export const HeroContainer = styled.div`
  position: relative;
  z-index: 2;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 0 20px;
`;
