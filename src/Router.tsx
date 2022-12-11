import { Routes, Route } from 'react-router-dom';
import { ConsultOrders } from './pages/consultorders';
import { NewOrder } from './pages/neworder';

export function Router() {
  return (
    <Routes>
      <Route path='/novaencomenda' element={<NewOrder />} />
      <Route path='/listaencomendas' element={<ConsultOrders />} />
    </Routes>
  );
}
