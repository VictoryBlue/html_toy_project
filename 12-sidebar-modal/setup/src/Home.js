import React, { useContext } from 'react';
import { FaBars } from 'react-icons/fa';
import { AppContext, useGlobalContext } from './context';
const Home = () => {
  // const value = useContext(AppContext);
  const { openSidebar, openModal, isSidebarOpen } = useGlobalContext();
  return (
    <>
      <main>
        <button
          className="sidebar-toggle"
          onClick={() => {
            openSidebar();
          }}
        >
          <FaBars />
        </button>
        <button
          className="btn"
          onClick={() => {
            openModal();
          }}
        >
          show Modal
        </button>
      </main>
    </>
  );
};

export default Home;
