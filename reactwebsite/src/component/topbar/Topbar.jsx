import React from 'react';
import "./topbar.css";

export const Topbar = () => {
    return (
        <>
           <div className = "top">
               <div className = "topLeft">
               <i className = "topIcon fab fa-facebook-square"></i>
               <i className = "topIcon fab fa-twitter-square"></i>
               <i className = "topIcon fab fa-pinterest-square"></i>
               </div>
               <div className = "topCenter">
                   <ul className = "topList">
                       <li className = "topListItem">HOME</li>
                       <li className = "topListItem">ABOUT</li>
                       <li className = "topListItem">CONTACT</li>
                       <li className = "topListItem">WRITE</li>
                       <li className = "topListItem">LOGOUT</li>
                   </ul>
               </div>
               <div className = "topRight">
                   <img  src = "https://images.pexels.com/photos/1391498/pexels-photo-1391498.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt = "pixel" className = "topImg"></img>
                   <i  className="fas fa-search topSearchIcon"></i>
               </div>
            </div> 
        </>
    )
}
