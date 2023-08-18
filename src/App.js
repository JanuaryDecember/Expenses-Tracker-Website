import React from "react";
import Navbar from "./components/Navbar.js";
import Footer from "./components/Footer.js";
import Content from "./components/Content.js"; 

export default function App(){
    return (
        <div>
            <Navbar />
            <Content/>
            <Footer />
        </div>
    );
}