import { BrowserRouter, Routes, Route } from 'react-router-dom'

import SharedLayout from './components/SharedLayout';
import Home from "./pages/Home";
import Add from "./pages/Add";
import Edit from "./pages/Edit";
import Update from "./pages/Update";
import Session from "./pages/Session";
// import Relapse from "./pages/Relapse";
// import Anger from "./pages/Anger";
// import Individual from "./pages/Individual";
import Notifications from "./pages/Notifications";
import Error from "./pages/Error"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SharedLayout />} >
          <Route index element={<Home />} />
          <Route path='add' element={<Add />} />
          <Route path='edit' element={<Edit />} />
          <Route path='update' element={<Update />} />
          <Route path='session' element={<Session />} />
          {/* <Route path='relapseprevention' element={<Relapse />} /> */}
          {/* <Route path='angermanagement' element={<Anger />} /> */}
          {/* <Route path='individual' element={<Individual />} /> */}
          <Route path='notifications' element={<Notifications />} />
          <Route path='*' element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}