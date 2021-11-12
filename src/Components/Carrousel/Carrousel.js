import React, { useState, useEffect } from 'react';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "./carrousel.css";
const Carrousel = () => {
  const data = [
    {
      title: "imagen 1",
      description: "texto mas texto y nose que mas poner texto texto mas texto y nose que mas ponertexto mas texto y nose que mas poner",
      image: "https://images.freeimages.com/images/large-previews/b2d/kiwi-fruit-macros-1313905.jpg"
    },
    {
      title: "imagen 2",
      description: "texto mas texto y nose uqe mas poner texto texto mas texto y nose que mas ponertexto mas texto y nose que mas poner",
      image: "https://images.freeimages.com/images/large-previews/047/headed-down-1400175.jpg"
    },
    {
      title: "imagen 3",
      description: "texto mas texto y nose uqe mas poner texto texto mas texto y nose que mas ponertexto mas texto y nose que mas poner",
      image: "https://images.freeimages.com/images/large-previews/bd7/falloxbow-1058032.jpg"
    },
    {
      title: "imagen 4",
      description: "texto mas texto y nose uqe mas poner texto texto mas texto y nose que mas ponertexto mas texto y nose que mas poner",
      image: "https://images.freeimages.com/images/large-previews/b8d/irish-landscape-1393571.jpg"
    },
    {
      title: "imagen 5",
      description: "texto mas texto y nose uqe mas poner texto texto mas texto y nose que mas ponertexto mas texto y nose que mas poner ",
      image: "https://media.istockphoto.com/photos/dunluce-castle-picture-id492959422?b=1&k=20&m=492959422&s=170x170&h=81undclnuMxXsOEoWbS0z-4VxfQ86gJ6UHbpd2RTk98="
    }
  ];
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

      <div className="container--slider">
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
 
  )
}

export default Carrousel;