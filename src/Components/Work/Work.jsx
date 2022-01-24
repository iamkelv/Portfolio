import React, { useEffect, useState } from 'react'
import './work.scss'
export default function Work() {
    const [currentSlide, setCurrentSlide ] = useState(0,()=>{})
    const data = [
        {
            id: 1,
            icon: "assets/mobile.png", 
            title: "Real Estate",
            desc: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
            img: "./assets/sample.jpg"
        },
         {
            id: 2,
            icon: "assets/mobile.png", 
            title: "Mobile App",
            desc: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
            img: "./assets/youtube.jpg"
        },
         {
            id: 3,
            icon: "assets/mobile.png", 
            title: "Portfolio",
            desc: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
            img: "./assets/PhoneView.jpg"
        },
         {
            id: 4,
            icon: "assets/mobile.png", 
            title: "Blog",
            desc: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
            img: "./assets/sample.jpg"
        },
          {
            id: 4,
            icon: "assets/mobile.png", 
            title: "Blog",
            desc: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
            img: "./assets/sample.jpg"
        },
          {
            id: 4,
            icon: "assets/mobile.png", 
            title: "Blog",
            desc: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
            img: "./assets/sample.jpg"
        }
    ]
     const handleClick = (way)=>{
        way===  "left" ?
         setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2) : 
         setCurrentSlide(currentSlide < data.length -1 ? currentSlide + 1 : 0  )              
    };
    return (
        <div className="work" id="work">
            <div className="slider" style={{transform:`translateX(-${currentSlide *100}vw` }}> 
                {data.map(d=>{
                    return(
                <div className="container">
                    <div className="item">
                        <div className="left">
                            { <div className="leftContainer">
                                <div className="imgContainer">
                                    <img src={d.icon} alt={d.title}/>
                                </div>                                
                                <h2>{d.title}</h2>
                                <p>{d.desc}</p>
                                <span>{d.title}</span>
                            </div> }
                        </div>
                        <div className="right">
                             <img src={d.img} alt="" /> 
                        </div>
                    </div>
                </div>) })}
            </div>
            <img src="assets/down.png" className="arrow left" onClick={()=>handleClick("left    ")} alt="arrow"/>
            <img src="assets/down.png" className="arrow right" onClick={()=>handleClick()} alt="arrow"/>
        </div>
    )
}
