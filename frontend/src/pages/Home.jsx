import { Link, Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer'

import './Home.css';

export default function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="text-3xl font-bold underline">
          HOME
        </h1>
      </header>
    </div>
  )
}