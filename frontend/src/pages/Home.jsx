import { Link, Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

import './Home.css';

export default function Home() {
  return (
    <>
      <Navbar />
      <section>
        <div className="App">
          <header className="App-header">
            <h1 className="text-3xl font-bold underline">
              ERROR
            </h1>
          </header>
        </div>
        <Outlet />
      </section>
    </>
  )
}