import React from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";
import "./css/Nav.css";
import "./navFunc.js";

const Nav = () => {
  return (
    <div id="navbar" class="nav-container">
      <div class="nav-back">
        <div class="nav-front">
          <div class="flex-centered nav-front-left"></div>
          <div class="flex-centered nav-front-middle">
            <div className="nav-option">
              <Link to="/home">Home</Link>
            </div>
            <div className="nav-option">
              <Link to="/cat">Categories</Link>
            </div>
            <div className="nav-option">
              <Link to="/">About</Link>
            </div>
            <div className="nav-option">
              <Link>Contact</Link>
            </div>
          </div>
          <div class="flex-centered nav-front-right">
            <Box sx={{ display: "flex", alignItems: "flex-end" }}>
              <TextField
                id="input-with-sx"
                label="Search Products"
                variant="standard"
              />
              <SearchIcon />
            </Box>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
