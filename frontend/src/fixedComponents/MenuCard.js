import React, { useEffect } from 'react'
import logo3 from '../images/3.jpg';
import Aos from "aos";
import "aos/dist/aos.css";

const MenuCard = (props) => { 
    const {body1,color,buttoncolor,aos,image,href} = props;
    useEffect(()=> {
        Aos.init({duration:1000});
    },[])
  return (
    <div className='ml-auto mr-auto d-flex w-75'>
         <div className='w-100 d-flex justify-content-center' data-aos={aos}>
        <div className={`card ${color} text-white w-100`}>
            <img className="card-img" src={image} alt="Card image" height='400' style={{objectFit:"cover",opacity:"70%"}}/>
            <div className="card-img-overlay text-left">
                <h3 className="card-title text-center">{body1.title}</h3>
                <p className="card-text ">{body1.text1}</p>
                <p className="card-text">{body1.text2}</p>
                <a href={href}><button type="button" className={`btn btn-${buttoncolor} btn-lg`}>Go To Page</button></a>
            </div>
        </div>
        </div>
    </div>
  )
}

export default MenuCard;