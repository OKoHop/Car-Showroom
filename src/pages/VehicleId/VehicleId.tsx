import { useParams } from 'react-router-dom';
import { useIsLoading, useVehicle } from '../../redux/selectors';
import { useEffect } from 'react';
import { getVehicles } from '../../redux/vehiclesOperation';
import { useAppDispatch } from '../../hooks/dispatchHook';
import { renderContent } from '../../helpers/helpers';

export const VehicleId = () => {
  const { vehicleId } = useParams();
  const vehicles = useVehicle();
  const isLoading = useIsLoading();
  const dispatch = useAppDispatch();

  const vehicleById = vehicles.find(
    vehicle => vehicle.id === Number(vehicleId)
  );

  useEffect(() => {
    dispatch(getVehicles());
  }, [dispatch]);

  return <>{renderContent(isLoading, vehicleById)}</>;
};
