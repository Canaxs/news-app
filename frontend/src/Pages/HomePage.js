import React from 'react'
import Navbar from '../fixedComponents/Navbar';
import Slider from '../fixedComponents/Slider';
import MenuCard from '../fixedComponents/MenuCard';
import Link from '@mui/material/Link';
import image1 from '../images/4.jpg';
import image2 from '../images/5.jpg';
import Footer from './Footer';

const HomePage = () => {
  const body1 = {
    title: "Technology",
    text1: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.Lorem İpsum Sİt Amet",
    text2: "Last updated 3 mins ago"
  }
  const body2 = {
    title: "Game",
    text1: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.Lorem İpsum Sİt Amet",
    text2: "Last updated 3 mins ago"
  }
  

  return (
    <div>
        <Navbar />
        <Slider />
        <br />
        <MenuCard body1={body1} color={'bg-dark'} buttoncolor={'dark'} aos={'fade-right'} image={image1} href={'/#/techno/:id'}/>
        <br />
        <MenuCard body1={body2} color={'bg-dark'} buttoncolor={'dark'} aos={'fade-left'} image={image2}/>
        <br />
        <Footer />

    </div>
  )
}

export default HomePage;
