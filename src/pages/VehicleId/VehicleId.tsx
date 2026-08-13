import { useParams } from 'react-router-dom';

export const VehicleId = () => {
  const { vehicleId } = useParams();
  return (
    <>
      <p>Now you can see product cart with id - {vehicleId}</p>
    </>
  );
};
