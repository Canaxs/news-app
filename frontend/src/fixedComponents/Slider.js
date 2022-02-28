import React, { useEffect, useState } from 'react'
import logo1 from '../images/1.jpg';
import logo2 from '../images/2.jpg';
import logo3 from '../images/3.jpg';
import { getSliders} from '../api/apiCalls'

 const Slider = () => {
  const [sliders,setSliders] = useState();

  const get = async () => {
    const response = await getSliders();
    setSliders(response.data);
  }

  useEffect(() => {
    get();
  },[])


  return(
<div>
    <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel" style={{height: "500px"}}>
        <ol className="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0"  className="active"></li>
          {sliders && sliders.map(e => (<li data-target="#carouselExampleIndicators" data-slide-to={e.id} key={e.title}></li>))}
        </ol>
        <div className="carousel-inner">
                <div className="carousel-item active">
                  <img className="d-block w-100" src={logo1} alt="First slide" height={500} style={{objectFit:"cover"}}/>
                  <div className="carousel-caption d-none  d-block">
                    <h5>Bir</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  </div>
                </div>
          {sliders && sliders.map((e,index) => (
              <div className="carousel-item" key={e.title}>
                  <img className="d-block w-100" src={index % 2 === 0 ? logo2 : logo3} alt="First slide" height={500} style={{objectFit:"cover"}}/>
                  <div className="carousel-caption d-none  d-block">
                    <h5>{e.title}</h5>
                    <p>{e.statement}</p>
                  </div>
                </div>
          ))}
                
        </div>
          <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
        </div>

  );
};

export default Slider;
