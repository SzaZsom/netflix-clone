import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser }  from "../features/userSlice";
import Nav from '../Nav';
import "./ProfileScreen.css";
import { auth } from '../firebase';
import PlansScreen from './PlansScreen';

function ProfileScreen() {
    const user = useSelector(selectUser);


  return (
    <div className='profileScreen'>
        <Nav />
        <div className='profileScreen_body'>
            <h1>Edit Profile</h1>
            <div className='profileScreen_info'>
                <img src="https://i.pinimg.com/736x/c3/3b/32/c33b322b61b8f30f0df1d0b3de690734.jpg" alt='' />

            
            <div className='profileScreen_details'>
                <h2>{user.email}</h2>
                <div className='profileScreen_plans'>
                    <h3>Plans</h3>
                    <PlansScreen />
                    <button onClick={() => auth.signOut()}
                        className='profileScreen_signOut'>Sign Out</button>
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default ProfileScreen