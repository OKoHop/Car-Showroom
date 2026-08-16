import type { Products } from '../../redux/Types/VehiclesTypes';
import { AddReviewForm } from '../AddReviewForm/AddReviewForm';
import { Reviews } from '../Reviews/Reviews';
import { VehicleImages } from '../VehicleImages/VehicleImages';
import { StyledImg } from './VehicleDetail.style';

type VehicleById = {
  vehicleById: Products;
};

export const VehicleDetail = ({ vehicleById }: VehicleById) => {
  const { brand, images, price, reviews, stock, thumbnail, title } =
    vehicleById;

  return (
    <div>
      <StyledImg>
        <img src={thumbnail} alt="vehicle" />
      </StyledImg>

      <VehicleImages images={images} />
      <p>
        {brand} {title}
      </p>
      <p>Vehicles count: {stock}</p>
      <p>Price: {price}</p>
      <Reviews reviews={reviews} />
      <AddReviewForm />
    </div>
  );
};
