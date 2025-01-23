import React from 'react'
import {PlinkoBoard} from "./plinkoBoard";
import './Game.css';
import Navbar from "../../../Components/User/Navbar";
import Footer from "../../../Components/Footer";

function Game() {
  return (
    <>
    <Navbar />
    <div>
    </div>
      <div className='body'>
        <div className='block'>
        <PlinkoBoard></PlinkoBoard>
        </div>  
      </div>
      <Footer />
    </>
  )
}

export default Game