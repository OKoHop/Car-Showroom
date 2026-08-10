import axios from 'axios';
import { z } from 'zod';
import { VehicleSchema } from './schemas/vehicle.schema';

axios.defaults.baseURL = 'https://dummyjson.com/';

type Vehicle = z.infer<typeof VehicleSchema>;

export const getData = async () => {
  try {
    const response = await axios.get<Vehicle>('products/category/vehicle');
    const data = VehicleSchema.parse(response.data);
    console.log(data);
    return data;
  } catch (err) {
    console.warn(err);
  }
};
