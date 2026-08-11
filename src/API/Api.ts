import axios from 'axios';

axios.defaults.baseURL = 'https://dummyjson.com/';

export const getData = async () => {
  try {
    const response = await axios.get('products/category/vehicle');
    const data = response.data;
    console.log(data);
    return data;
  } catch (err) {
    console.warn(err);
  }
};
