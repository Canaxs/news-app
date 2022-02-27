import React from 'react'
import Navbar from '../fixedComponents/Navbar';
import Slider from '../fixedComponents/Slider';
import MenuCard from '../fixedComponents/MenuCard';
import Link from '@mui/material/Link';

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
        <MenuCard body1={body1} color={'bg-info'} buttoncolor={'info'}/>
        <br />
        <MenuCard body1={body2} color={'bg-dark'} buttoncolor={'dark'}/>

    </div>
  )
}

export default HomePage;
