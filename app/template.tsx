import "./styles/globals.scss";
import "./styles/prism-adapter.scss";
import "./styles/prism-plus.css";
import React from "react";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
export default function RootTemplate({ children }) {
  return (
    <>
      <Navbar />
      <div
        className="w-screen h-screen overflow-x-hidden flex flex-col justify-start z-10"
        id="main-content"
      >
        <div className="relative flex flex-row justify-center z-10">
          {children}
        </div>

        <Footer />
      </div>
    </>
  );
}
