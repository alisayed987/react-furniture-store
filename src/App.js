import React, { Component } from "react";
import "./App.css";
import Footer from "./components/layouts/Footer";
import Nav from "./components/layouts/Nav";
import Body from "./components/layouts/Body";
import CardGrid from "./components/dashboard/CardGrid";
import { Route, Routes } from "react-router-dom";
import Categories from "./components/dashboard/Categories";
import Home from "./components/dashboard/Home";
import Theater from "./components/dashboard/Theater";

class App extends Component {
  render() {
    return (
      <>
        <Nav />
        <Body top={<Theater />}>
          <CardGrid />
          {/* <Routes>
            <Route path="/" element={<CardGrid />} />
            <Route path="/home" element={<Home />} />
            <Route path="/Cat" element={<Categories />} />
          </Routes> */}
        </Body>
        <Footer />
      </>
    );
  }
}

export default App;
