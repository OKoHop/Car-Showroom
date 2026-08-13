import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://dummyjson.com/';

interface VehicleResponse {
  products: Array<object>;
  total: number;
  skip: number;
  limit: number;
}

interface RejectValue {
  error: string;
}

export const getVehicles = createAsyncThunk<
  VehicleResponse,
  void,
  { rejectValue: RejectValue }
>('vehicles/getVehicles', async (_, thunkAPI) => {
  try {
    const response = await axios.get('products/category/vehicle');
    return response.data;
  } catch {
    return thunkAPI.rejectWithValue({
      error: 'Something happed!',
    });
  }
});
