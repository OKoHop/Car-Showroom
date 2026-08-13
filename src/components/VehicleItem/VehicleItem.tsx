import { NavLink } from 'react-router-dom';
import type { Products } from '../../redux/Types/VehiclesTypes';

type VehicleItemProp = {
  vehicle: Products;
};

export const VehicleItem = ({ vehicle }: VehicleItemProp) => {
  return (
    <li>
      <NavLink to={`${vehicle.id}`}>
        {`${vehicle.brand} ${vehicle.title}`}
        <img src={vehicle.thumbnail} alt="vehicle" />
        Price: {vehicle.price}
      </NavLink>
    </li>
  );
};
