import React, { useState, useEffect } from 'react';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "./carrousel.css";
const Carrousel = () => {
  const data = [];
  let interval;
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps 
    interval = setInterval(() => {
      slideNext();
    }, 5000)

  }, [current])

  const slideNext = () => {
    setCurrent(current === data.length - 1 ? 0 : current + 1);
    clearInterval(interval);
  }

  const slidePrev = () => {
    setCurrent(current === 0 ? data.length - 1 : current - 1);
    clearInterval(interval);
  }
  return (
    <div className="container--slider" >
      <div className="slider">
        {data.length !== 0 ?
          <>
            <FaArrowLeft className="left-arrow" onClick={slidePrev} />
            <FaArrowRight className="right-arrow" onClick={slideNext} />
            {data.map((dato, i) =>
              <section className={i === current ? "slide-active" : "slide"} key={i} >
                {i === current && (
                  <div className="container--slide-data">
                    <h2 className="slide--title">{dato.title}</h2>
                    <p className="slide--description">{dato.description}</p>
                    <img src={dato.image} alt={dato.title} className="slide--image" />
                  </div>
                )}
              </section>
            )}
          </>
          : null}
      </div>
    </div>
  )
}

export default Carrousel;