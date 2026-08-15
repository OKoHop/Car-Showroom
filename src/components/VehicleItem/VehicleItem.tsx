import type { Products } from '../../redux/Types/VehiclesTypes';
import { StyledNavLink } from './VehicleItem.style';

type VehicleItemProp = {
  vehicle: Products;
};

export const VehicleItem = ({ vehicle }: VehicleItemProp) => {
  return (
    <li>
      <StyledNavLink to={`${vehicle.id}`}>
        <div>{`${vehicle.brand} ${vehicle.title}`}</div>
        <img src={vehicle.thumbnail} alt="vehicle" />
        <div>Price: {vehicle.price}</div>
      </StyledNavLink>
    </li>
  );
};
