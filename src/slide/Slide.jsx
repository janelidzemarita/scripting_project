import React, {useState} from 'react';
import "./SlideStyles.css";
import DataSlider from "./dataSlider";
// 

const Slider = () => {

    const [slideIndex, setSlideIndex] = useState(1)

    const moveDot = index => {
        setSlideIndex(index)
    }

    return (

        <div className="container-slider">
            {DataSlider.map((pictures, index, obj) => {
                return (
                    <div key={obj.id}
                         className={slideIndex === index + 1 ? "slide active-anim" : "slide"}>
                        <h3 style={{'color': 'darkred', 'margin-left': '5px'}}>{pictures.name} {"-"} {pictures.price} ₾</h3>
                        <img src={pictures.image}/>
                    </div>
                )
            })}
            {/* <Search/> */}
            <div className="container-dots">
                {Array.from({length: 3}).map((item, index) => (
                    <div
                        onClick={() => moveDot(index + 1)}
                        className={slideIndex === index + 1 ? "dot active" : "dot"}
                    ></div>
                ))}
            </div>
        </div>
    )
}
export default Slider;