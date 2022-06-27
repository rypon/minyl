import React from "react";
import "../component.css";

// import "antd/dist/antd.css";
import "antd/dist/antd.min.css";

import "../App.css";
import { Carousel } from "antd";

function HomeCarousel() {
  const items = [
    {
      key: "1",
      title: "Minyl",
      content: "Keep track of your vinyl collection",
    },
    {
      key: "2",
      title: "Explore",
      content: "Search through thousands of albums or artists",
    },
    {
      key: "3",
      title: "Review",
      content: "Keep your vinyl notes, or some thoughts on the album",
    },
    {
      key: "4",
      title: "Listen",
      content: "Play track snippits from your collection",
    },
  ];

  return (
    <div>
      <Carousel autoplay={true} autoplaySpeed={4000}>
        {items.map((item) => {
          return (
            <div key={item.key} className="container-fluid">
              <div className="content">
                <h3 className="home-header">{item.title}</h3>
                <p className="home-text">{item.content}</p>
              </div>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
}

export default HomeCarousel;
