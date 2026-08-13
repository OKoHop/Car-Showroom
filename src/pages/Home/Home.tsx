import { useEffect } from 'react';
import { getVehicles } from '../../redux/vehiclesOperation';
import { useAppDispatch } from '../../hooks/dispatchHook';
import { VehicleList } from '../../components/VehicleList/VehicleList';

export const Home = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getVehicles());
  }, [dispatch]);

  return (
    <>
      <VehicleList />
    </>
  );
};
