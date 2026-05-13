import React from 'react'
import logo from "../assets/logo.png"

const Heading = () => {
  return (
    <>
    <div id='heading'>
        <div id='box1'>
            <img src={logo} alt="Logo" width={80} />
        </div>
        <div id='box2'>
            <nav class="nav">
                <a href="./components/important">Importance</a>
                <a href="#">About</a>
                <a href="#">🔎</a>
            </nav>
            
        </div>
    </div>
    </>
  )
}

export default Heading