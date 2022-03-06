import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import './fixed.css';
import Aos from "aos";
import "aos/dist/aos.css";

const Navbar = (props) => {

    useEffect(()=> {
        Aos.init({duration:1000});
    },[])

  return (
        <div className='navbar-container'>
            <div className='navbar'>
                <a href='/#/' style={{textDecoration: "none",color: "white"}}><h3 data-aos="flip-up">Creyton</h3></a>
            </div>
        </div>
    
    );
};

export default Navbar;

