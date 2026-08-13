import { useVehicle } from '../../redux/selectors';
import { VehicleItem } from '../VehicleItem/VehicleItem';
import { List } from './VehicleList.styled';

export const VehicleList = () => {
  const vehicles = useVehicle();

  return (
    <List>
      {vehicles.map(vehicle => {
        return <VehicleItem key={vehicle.id} vehicle={vehicle} />;
      })}
    </List>
  );
};
