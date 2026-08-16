import hero from '../../assets/hero.webp';
import { HeroContainer, StyledHero, StyledHeroDiv } from './Hero.styled';

export const Hero = () => {
  return (
    <StyledHero bgimage={hero}>
      <StyledHeroDiv>
        <HeroContainer></HeroContainer>
      </StyledHeroDiv>
    </StyledHero>
  );
};
