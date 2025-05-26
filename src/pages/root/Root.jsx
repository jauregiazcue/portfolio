// pages/Root.jsx

import Header from "../../components/header/Header.jsx"
import Footer from "../../components/footer/Footer.jsx";
import { Outlet } from 'react-router-dom';
import './App.css'
function Root() {
  return (
    <div>
      <Header />

      <main className="main">

        <Outlet />
      </main>

    </div>
  );
}

export default Root;