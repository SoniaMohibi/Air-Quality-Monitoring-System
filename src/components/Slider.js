import React, {useState,useEffect} from 'react'
import './Slider.css'
import JsonData from "../data/data.json";
import BtnSlider from './BtnSlider'
import dataSlider from './dataSlider'

export  function Slider() {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
    
        setArticles(JsonData.articles);
      }, []);
      console.log(JsonData.articles)
    const [slideIndex, setSlideIndex] = useState(1)

    const nextSlide = () => {
        if(slideIndex !== dataSlider.length){
            setSlideIndex(slideIndex + 1)
        } 
        else if (slideIndex === dataSlider.length){
            setSlideIndex(1)
        }
    }

    const prevSlide = () => {
        if(slideIndex !== 1){
            setSlideIndex(slideIndex - 1)
        }
        else if (slideIndex === 1){
            setSlideIndex(dataSlider.length)
        }
    }

    const moveDot = index => {
        setSlideIndex(index)
    }
   function  handle(ind){
   setArticles(ind)

    }
    return (
        <div className="container-slider">
            {dataSlider.map((obj, index) => {
                return (
                    <div
                    key={obj.id}
                    className={slideIndex === index + 1 ? "slide active-anim" : "slide"}
                    >
                        <img 
                        src={`/img/slider/${index + 1}.jpg`} 
                        />
                        {/* <h3 onClick={()=>handle(index-1)}>{articles[index-1].name}</h3> */}
                    </div>
                )
            })}
            <BtnSlider moveSlide={nextSlide} direction={"next"} />
            <BtnSlider moveSlide={prevSlide} direction={"prev"}/>

            <div className="container-dots">
                {Array.from({length: 5}).map((item, index) => (
                    <div 
                    onClick={() => moveDot(index + 1)}
                    className={slideIndex === index + 1 ? "dot active" : "dot"}
                    ></div>
                ))}
            </div>
        </div>
    )
}