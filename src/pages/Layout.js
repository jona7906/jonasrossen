import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/Layout.css";
import "../styles/Main.css";
import "../styles/Portfolio.css";
import "../styles/SingleProject.css";
import "../styles/Internship.css";
import "../styles/SearchFilterSort.css";
import "../styles/ContactButtons.css";
function Layout() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default Layout;
