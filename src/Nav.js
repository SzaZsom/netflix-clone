import React, { useEffect, useState, } from 'react';
import "./Nav.css";
import { useNavigate } from 'react-router-dom';


function Nav() {
    const [show, handleShow] = useState(false);
    const navigate = useNavigate();

    const transitionNavBar = () => {
        if(window.scrollY > 100) {
            handleShow(true)
        }
        else {
            handleShow (false)
        }
    }

    useEffect(() => {
      window.addEventListener("scroll",transitionNavBar);
    
      return () => window.removeEventListener("scroll", transitionNavBar)
    }, [])
    

    return (
    <div className={`nav ${show && "nav_black"}`}>
        <div className="nav_contents">
            <img
                onClick={() => navigate("/")}
                className='nav_logo'
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1280px-Netflix_2015_logo.svg.png"
                alt=''
            />
            <img
                onClick={() => navigate("/profile")}
                className='nav_avatar'
                src="https://i.pinimg.com/736x/c3/3b/32/c33b322b61b8f30f0df1d0b3de690734.jpg"
                alt=''
            />
        </div>
    </div>
    )
}

export default Nav