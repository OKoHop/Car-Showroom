import { useVehicle } from '../../redux/selectors';
import { VehicleItem } from '../VehicleItem/VehicleItem';

export const VehicleList = () => {
  const vehicles = useVehicle();

  return (
    <ul>
      {vehicles.map(vehicle => {
        return <VehicleItem key={vehicle.id} vehicle={vehicle} />;
      })}
    </ul>
  );
};
