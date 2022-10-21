import { useState } from "react";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { postAdded } from "./postSlice";
import React from "react";



const AddPostForm = () => {

    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    const onTitleChange = e => setTitle(e.target.value)
    console.log(title)
    
    const onContentChange = (e) => {setContent(e.target.value)}

    const dispatch = useDispatch()

    const onSavePost = () => {
        if(title && content){
            dispatch((
                postAdded({
                    id: nanoid(),
                    title,
                    content
                })
            ))
            setTitle('')
            setContent('') 
        }  
    }

   return (
      <section>
         <h2>Add A New Post</h2>
         <form>
         <label htmlFor="postTitle">Post Title:</label>
                <input
                    type="text"
                    id="postTitle"
                    name="postTitle"
                    value={title}
                    onChange={onTitleChange}
                />
            <label htmlFor="postContent">Content:</label>
            <textarea
               name="postContent"
               id="postContent"
               value={content}
               onChange={onContentChange}
               cols="30"
               rows="10"
            />
            <button type="button" onClick={onSavePost}>Save Post</button>
         </form>
      </section>
   );
};

export default AddPostForm;
