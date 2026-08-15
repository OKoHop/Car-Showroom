import { useEffect, useState } from 'react';
import { getVehicles } from '../../redux/vehiclesOperation';
import { useAppDispatch } from '../../hooks/dispatchHook';
import { VehicleList } from '../../components/VehicleList/VehicleList';
import { FilterForm } from '../../components/FilterForm/FilterForm';

export const Home = () => {
  const dispatch = useAppDispatch();
  const [searchQuery, setSearchQuery] = useState<string>('');

  useEffect(() => {
    dispatch(getVehicles());
  }, [dispatch]);

  return (
    <>
      <FilterForm setSearchQuery={setSearchQuery} />
      <VehicleList searchQuery={searchQuery} />
    </>
  );
};
