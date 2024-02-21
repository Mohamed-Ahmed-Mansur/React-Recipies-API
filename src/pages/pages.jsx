import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./home";
import React from "react";
import Signin from "./signin";
import AddRecipe from "./AddRecpie";
import Cuisine from "./cuisine";
import Search from "../components/Search";
import Error from "../components/Error";

const Pages = () => {

    console.log("Pages component rendered")
    return ( 
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Signin />}></Route>
                    <Route path="/home" element={<Home />}></Route>
                    <Route path="/search" element={<Search />}></Route>
                    <Route path="/cuisine/:country" element={<Cuisine />}></Route>
                    <Route path="/addrecpie" element={<AddRecipe />}></Route>
                    <Route path="*" element={<Error message="404 - Oops! Something went wrong." />}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}
 
export default Pages;