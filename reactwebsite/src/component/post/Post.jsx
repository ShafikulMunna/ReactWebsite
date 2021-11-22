import React from 'react';
import "./post.css";

const Post = () => {
    return (
        <>
           <div className = "post">
               <img className = "postImg" src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="snow" />
               <div className = "postInfo">
                   <div className = "postCats">
                       <span className="postCat">
                           Music
                       </span>
                       <span className="postCat">
                           Life
                       </span>
                   </div>
                   <span className="postTitle">
                       Lorem ipsum dolor sit amet.
                   </span>
                   <hr />
                   <span className="postDate">
                       1 hour ago
                   </span>
               </div>
               <p className = "postDesc">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit enim dignissimos pariatur voluptate, neque nisi distinctio consectetur reprehenderit inventore at ratione voluptates laborum minima vitae deserunt dolorum exercitationem sed? Qui!</p>
            </div> 
        </>
    )
}

export default Post
