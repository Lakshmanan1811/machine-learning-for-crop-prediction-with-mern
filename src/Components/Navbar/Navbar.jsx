import React, { useState } from 'react'
import './Navbar.css';
export const Navbar = () => {
    const [menu, setMenu] = useState("home")
  return (
    
    <div className='navbar' >
        <div className='nav-logo'>
            <p>PlantApp</p>
        </div>
        <ul className='nav-menu'>
            <li onClick={() => {setMenu("home")}}>Home{menu === "home" ?  <hr/> : <></>}</li>
            <li onClick={() => {setMenu("contact")}}>Contact{menu === "contact" ?  <hr/> : <></>}</li>
            <li onClick={() => {setMenu("crops")}}>Crops{menu === "crops" ?  <hr/> : <></>}</li>
            <li onClick={() => {setMenu("soil")}}>Soil{menu === "soil" ?  <hr/> : <></>}</li>
        </ul>
        <div className='nav-login'>
            <button>Login</button>
        </div>
    </div>
    
  )
}
