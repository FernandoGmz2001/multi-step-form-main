import React from "react";
import "../../styles/Home.css";
import CardFooter from "../common/Card/CardFooter";
import Card1 from "../layout/Card1";
import Card2 from "../layout/Card2";

function Home() {
  return (
    <div className="main">
      <header className="main__header">
        <div className="main__header-numbers">
          <div className="main__header-number-selected">1</div>
          <div className="main__header-number">2</div>
          <div className="main__header-number">3</div>
          <div className="main__header-number">4</div>
        </div>
      </header>
      <div className="main__body">
        {/* <Card1 /> */} <Card2 />
      </div>
      <CardFooter />
    </div>
  );
}

export default Home;
