// pages/Root.jsx

import Header from "../../components/header/Header.jsx";
import { Outlet } from 'react-router-dom';
import './App.css'
function Root() {
  return (
    <div className="firstAux">
      <Header />

      <main className="main">
        <Outlet />
      </main>
      
    </div>
  );
}

export default Root;