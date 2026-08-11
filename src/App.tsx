import { Route, Routes } from 'react-router-dom';
import { SharedLayout } from './components/SharedLayout/SharedLayout';
import { Home } from './pages/Home/Home';
import { VehicleId } from './pages/VehicleId/VehicleId';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="vehicleId" element={<VehicleId />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
