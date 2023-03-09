import React from "react";
import "./style.css";
function Book() {
  return (
    <div>
      <section className="book" id="book">
        <h1 className="heading">
          <span>book</span> now
        </h1>
        <div className="row">
          <div className="image">
            <img
              src="https://www.reuters.com/resizer/nAWtP1NhSAlBKQmfrBmxgnVejM4=/960x0/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/GCMFGLIZ4BJVXAITCOR4D4ULYI.jpg"
              alt=""
            />
          </div>
          <form action="">
            <h3>book your vaccine</h3>
            <input type="text" placeholder="your name" className="box" />
            <input type="number" placeholder="your number" className="box" />
            <input type="email" placeholder="your email" className="box" />
            <input type="text" placeholder=" vaccine name" className="box" />
            <input type="date" className="box" />
            <input type="submit" value="book now" className="btn" />
          </form>
        </div>
      </section>
    </div>
  );
}

export default Book;
