import { useEffect } from 'react';
import { getData } from './API/Api';

function App() {
  useEffect(() => {
    getData();
  });

  return <></>;
}

export default App;
