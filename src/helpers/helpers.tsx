import { Oval } from 'react-loader-spinner';
import { VehicleDetail } from '../components/VehicleDetail/VehicleDetail';
import { NotFound } from '../components/404/NotFound';
import type { Products } from '../redux/Types/VehiclesTypes';

export const renderContent = (
  isLoading: boolean,
  vehicleById: Products | undefined
) => {
  if (isLoading)
    return (
      <Oval
        height={80}
        width={80}
        color="#4fa94d"
        visible={true}
        ariaLabel="oval-loading"
        secondaryColor="#4fa94d"
        strokeWidth={2}
        strokeWidthSecondary={2}
      />
    );
  if (vehicleById !== undefined)
    return <VehicleDetail vehicleById={vehicleById} />;
  return <NotFound />;
};
