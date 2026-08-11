import { useEffect } from 'react';
import { getVehicles } from '../../redux/vehiclesOperation';
import { useAppDispatch } from '../../hooks/dispatchHook';

export const Home = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getVehicles());
  }, [dispatch]);

  return (
    <>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam eaque,
        minima hic blanditiis omnis quod possimus, officia dicta velit nostrum
        facere voluptates perspiciatis quas provident repellendus amet
        consequuntur fugit quam?
      </p>
    </>
  );
};
