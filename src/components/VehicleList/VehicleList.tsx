import { useMemo } from 'react';
import { useVehicle } from '../../redux/selectors';
import { VehicleItem } from '../VehicleItem/VehicleItem';
import { List } from './VehicleList.styled';

type searchQuery = {
  searchQuery: string;
};

export const VehicleList = ({ searchQuery }: searchQuery) => {
  const vehicles = useVehicle();

  const filterVehicle = useMemo(() => {
    const lowerCaseSearch = searchQuery.toLowerCase().trim();
    return vehicles.filter(
      vehicle =>
        vehicle.brand.toLowerCase().includes(lowerCaseSearch) ||
        vehicle.title.toLowerCase().includes(lowerCaseSearch)
    );
  }, [vehicles, searchQuery]);

  return (
    <List>
      {filterVehicle.map(vehicle => {
        return <VehicleItem key={vehicle.id} vehicle={vehicle} />;
      })}
    </List>
  );
};
