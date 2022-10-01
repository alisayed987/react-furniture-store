import React, { Component } from "react";
import "./css/CardGrid.css";

class CardGrid extends Component {
  data = [
    {
      img: "https://upload.wikimedia.org/wikipedia/commons/2/24/Circle-icons-image.svg",
      head_line: "image 1",
      text: "explaining image 1",
    },
    {
      img: "https://ia800402.us.archive.org/26/items/03-05-2016_Images_Images_1-30/01_PT_hero_42_153645159.jpg",
      head_line: "image 2",
      text: "explaining image 2",
    },
    {
      img: "https://www.w3schools.com/css/paris.jpg",
      head_line: "image 3",
      text: "explaining image 3",
    },
    {
      img: "https://apod.nasa.gov/apod/image/2202/AuroraPillars_Correia_4898.jpg",
      head_line: "image 4",
      text: "explaining image 4",
    },
    {
      img: "https://upload.wikimedia.org/wikipedia/commons/2/24/Circle-icons-image.svg",
      head_line: "image 1",
      text: "explaining image 1",
    },
    {
      img: "https://ia800402.us.archive.org/26/items/03-05-2016_Images_Images_1-30/01_PT_hero_42_153645159.jpg",
      head_line: "image 2",
      text: "explaining image 2",
    },
    {
      img: "https://www.w3schools.com/css/paris.jpg",
      head_line: "image 3",
      text: "explaining image 3",
    },
    {
      img: "https://apod.nasa.gov/apod/image/2202/AuroraPillars_Correia_4898.jpg",
      head_line: "image 4",
      text: "explaining image 4",
    },
    {
      img: "https://upload.wikimedia.org/wikipedia/commons/2/24/Circle-icons-image.svg",
      head_line: "image 1",
      text: "explaining image 1",
    },
    {
      img: "https://ia800402.us.archive.org/26/items/03-05-2016_Images_Images_1-30/01_PT_hero_42_153645159.jpg",
      head_line: "image 2",
      text: "explaining image 2",
    },
    {
      img: "https://www.w3schools.com/css/paris.jpg",
      head_line: "image 3",
      text: "explaining image 3",
    },
    {
      img: "https://apod.nasa.gov/apod/image/2202/AuroraPillars_Correia_4898.jpg",
      head_line: "image 4",
      text: "explaining image 4",
    },
  ];
  getData() {
    const data_list = this.data.map((ele) => {
      return (
        <div className="card">
          <div className="card-image-container">
            <img src={ele.img} className="card-image" />
          </div>
          <div className="card-text-container">
            <span>{ele.head_line}</span>
            <div>{ele.text}</div>
          </div>
        </div>
      );
    });
    return data_list;
  }
  render() {
    return <div className="cards-container">{this.getData()}</div>;
  }
}

export default CardGrid;
