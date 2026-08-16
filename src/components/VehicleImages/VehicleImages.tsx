import { nanoid } from 'nanoid';
import { StyledImgList, StyledLi } from './VehicleImage.style';

type ImagesProps = {
  images: string[];
};

export const VehicleImages = ({ images }: ImagesProps) => {
  return (
    <StyledImgList>
      {images.map((image: string) => {
        return (
          <StyledLi key={nanoid()}>
            <img src={image} alt="vehicle" />
          </StyledLi>
        );
      })}
    </StyledImgList>
  );
};
