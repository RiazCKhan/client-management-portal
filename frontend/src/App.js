import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Clients from './pages/Clients';
import Attendance from "./pages/Attendance";
import Error from "./pages/Error"
import Home from "./pages/Home";
import Notifications from "./pages/Notifications";

import SharedLayout from './components/SharedLayout';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SharedLayout />} >
          <Route index element={<Home />} />
          <Route path='clients' element={<Clients />} />
          <Route path='attendance/' element={<Attendance />} />
          <Route path='notifications' element={<Notifications />} />
          <Route path='*' element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}