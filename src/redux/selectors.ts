import { useSelector } from 'react-redux';
import type { State } from './Types/VehiclesTypes';

export const useVehicle = () => {
  const vehicles = useSelector(
    (state: State) => state.vehicles.vehicles.products
  );
  return vehicles;
};
