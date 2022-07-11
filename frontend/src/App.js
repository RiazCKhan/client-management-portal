import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Clients from './pages/Clients';
import Attendance from "./pages/Attendance";
import Error from "./pages/Error"
import Home from "./pages/Home";
import Notifications from "./pages/Notifications";

// import Add from "./pages/Add";
// import Edit from "./pages/Edit";
// import Program from "./pages/Program";
// import SingleClient from './pages/SingleClient';
// import SingleProgram from './pages/SingleProgram';
// import SingleSession from './pages/SingleSession';

import SharedLayout from './components/SharedLayout';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SharedLayout />} >
          <Route index element={<Home />} />

          <Route path='clients' element={<Clients />} />
          
          {/* <Route path='add' element={<Add />} /> */}

          {/* <Route path='edit/' element={<Edit />} /> */}
          {/* <Route path='edit/:clientId' element={<SingleClient />} /> */}

          <Route path='attendance/' element={<Attendance />} />
          {/* <Route path='attendance/:sessionId' element={<SingleSession />} /> */}

          {/* <Route path='activeclients/' element={<Program />} /> */}
          {/* <Route path='activeclients/:programId' element={<SingleProgram />} /> */}

          <Route path='notifications' element={<Notifications />} />
          <Route path='*' element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}