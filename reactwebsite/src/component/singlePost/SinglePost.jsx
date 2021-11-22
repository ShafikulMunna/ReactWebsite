import React from 'react';
import "./singlepost.css";

const SinglePost = () => {
    return (
        <>
            <div className = "singlepost">
                <div className = "singlePostWrapper">
                    <img className = "singlePostImg" src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="snow" />
                    <h1 className="singlePostTitle">
                       Lorem ipsum dolor sit amet.
                       <div className="singlePostEdit">
                           <i className = "singlePostIcon far fa-edit"></i>
                           <i className = "singlePostIcon far fa-trash-alt"></i>
                        </div> 
                    </h1>
                    <div className = "singlePostInfo">
                        <span className = "singlePostAuthor">Author: <b>Munna</b></span>
                        <span className = "singlePostDate">1 hour ago</span>
                    </div>
                    <p className = "singlePostDesc">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit cum vitae doloremque obcaecati sequi facilis. Neque earum ipsum sapiente sit. Impedit, nostrum modi itaque cum, ad nihil maxime sequi voluptate commodi architecto tenetur minima? Debitis odio veritatis illo vitae similique, nobis dolorum rerum alias est cum natus ipsum incidunt esse consectetur iure laudantium tempora at fuga exercitationem aliquid magni nam quis. Deleniti rem eos sint at. Omnis nemo dicta ipsam sapiente, explicabo quam hic ipsum eum. Adipisci maxime quibusdam quae! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore et voluptas minima excepturi, laudantium corrupti deleniti accusantium, repudiandae ab exercitationem unde molestias officiis atque delectus esse consectetur omnis nihil ipsam.
                    </p>
                </div>
            </div>
        </>
    )
}

export default SinglePost
