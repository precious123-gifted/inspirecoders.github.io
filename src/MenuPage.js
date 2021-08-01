import React,{useRef,useState,useEffect} from 'react';
import './MenuPage.scss';

export default function Menu({menu}) {

 const menuList = useRef(null)

  
  return (
    <div className={menu} ref={menuList}>
    <div className='menuu' >
      <div className='items'>
      <div className='links'>
   <p>Home</p>
   <p>About</p>
   <p>How It Works</p>
   <p>Contact</p>
</div>
   <div className='buttonS'>
   <p>
     Signup
   </p>
    </div>
    <div className='buttonL'>
   <p>
     Login
   </p></div>
    </div>
    </div></div>
  );
}
