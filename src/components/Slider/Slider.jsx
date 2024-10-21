import './slider.scss'
import ArrowBack from '../../assets/arrow-back.svg'
import ArrowForward from '../../assets/arrow-forward.svg'
import { useState } from 'react'

const Slider = ({pictures}) => {
    const [index, setIndex] = useState(0);


    const onPrevSlide = (e) => {
        e.preventDefault()
        if(index === 0){
            setIndex(pictures.length - 1)
        } else {
            setIndex(index - 1)
        }        
    }

    const onNextSlide = (e) => {
        e.preventDefault()
        if(index === pictures.length - 1){
            setIndex(0)    
        } else {
            setIndex(index + 1)
        } 
    }



    return <div className="slider-container">
        <ul className='slider' style={{ transform: `translateX(-${index*100}%)` }}>
            {pictures.map((picture, idx) => <li key={`slider-${idx}`} className='slide'>
                <img src={picture} alt={""}/>
            </li>)}
        </ul>
        {(pictures.length > 1) ? <>
            <div className="buttons">
            <button className="button" onClick={(event) => onPrevSlide(event)}>
                <img src={ArrowBack} />
            </button>
            <button className="button" onClick={(event) => onNextSlide(event)}>
                <img src={ArrowForward} />
            </button>
        </div>  
        <div className="counter">
            <p>{index + 1} / {pictures.length}</p>
        </div>     
        </> : ""}
    </div>
}

export default Slider