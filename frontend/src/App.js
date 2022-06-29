import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from "./pages/Home";
import Edit from "./pages/Edit";
import Update from "./pages/Update";
import Session from "./pages/Session";
import Relapse from "./pages/Relapse";
import Anger from "./pages/Anger";
import Individual from "./pages/Individual";
import Notifications from "./pages/Notifications";
import Home from "./pages/Home";
import Error from "./pages/Error"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} >
          <Route path='edit/:id' element={<Edit />} />
          <Route path='update/:id' element={<Update />} />
          <Route path='session/:id' element={<Session />} />
          <Route path='relapseprevention' element={<Relapse />} />
          <Route path='angermanagement' element={<Anger />} />
          <Route path='individual' element={<Individual />} />
          <Route path='notifications' element={<Notifications />} />
          <Route path='add' element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}