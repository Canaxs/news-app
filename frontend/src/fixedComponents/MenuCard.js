import React from 'react'
import logo3 from '../images/3.jpg';

const MenuCard = () => {
  return (
    <div className='ml-auto mr-auto d-flex w-100'>
         <div className='w-50'>
        <div className="card bg-dark text-white w-50 ml-auto mr-5">
            <img className="card-img" src={logo3} alt="Card image" height='400' style={{objectFit:"cover"}}/>
            <div className="card-img-overlay">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <p className="card-text">Last updated 3 mins ago</p>
            </div>
        </div>
        </div>
        <div className='w-50'>
        <div className="card bg-dark text-white w-50 mr-auto ml-5 shadow ">
            <img className="card-img" src={logo3} alt="Card image" height='400' style={{objectFit:"cover"}}/>
            <div className="card-img-overlay">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <p className="card-text">Last updated 3 mins ago</p>
            </div>
        </div>
        </div>
    </div>
  )
}

export default MenuCard;