import type { Products } from '../../redux/Types/VehiclesTypes';
import { Reviews } from '../Reviews/Reviews';
import { VehicleImages } from '../VehicleImages/VehicleImages';

type VehicleById = {
  vehicleById: Products;
};

export const VehicleDetail = ({ vehicleById }: VehicleById) => {
  const { brand, images, price, reviews, stock, thumbnail, title } =
    vehicleById;

  return (
    <div>
      <p>
        {brand} {title}
      </p>
      <img src={thumbnail} alt="vehicle" />
      <VehicleImages images={images} />
      <p>Vehicles count: {stock}</p>
      <p>Price: {price}</p>
      <Reviews reviews={reviews} />
    </div>
  );
};
