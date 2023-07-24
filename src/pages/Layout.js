import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/Layout.scss";
import "../styles/Main.scss";
import "../styles/Portfolio.scss";
import "../styles/Project.scss";
import "../styles/SingleProject.scss";
import "../styles/Internship.scss";
import "../styles/SearchFilterSort.scss";
import "../styles/ContactButtons.scss";
import "../styles/Header.scss";
import "../styles/InternPopup.scss";
import "../styles/res_header.scss";

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
