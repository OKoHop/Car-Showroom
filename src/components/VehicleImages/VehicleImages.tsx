import { nanoid } from 'nanoid';

type ImagesProps = {
  images: string[];
};

export const VehicleImages = ({ images }: ImagesProps) => {
  return (
    <>
      {images.map((image: string) => {
        return <img key={nanoid()} src={image} alt="vehicle" />;
      })}
    </>
  );
};
