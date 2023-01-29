import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Add from "./Components/Add";
import Gallery from "./Components/Gallery";
import GalleryDetails from "./Components/GalleryDetails";
import "./Stylesheets/mysheet.css"
import Home from "./Components/Home";
import Show from "./Components/Show";

const App = () => {
    return (
        <>
            <nav>
                <Link to="/">Home</Link> <br />
                <Link to="/add">Add User</Link> <br />
                <Link to="/show">Show User</Link> <br />
                <Link to="/gallery">Show Gallery</Link>
            </nav>
            <div className="container m-auto">

                <hr />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/add" element={<Add />} />
                    <Route path="/show" element={<Show />} />
                    <Route path="/gallery" element={<Gallery />}>
                        <Route path="/gallery/:id" element={<GalleryDetails />} />
                    </Route>
                </Routes>
            </div>

        </>
    );
};

export default App;
