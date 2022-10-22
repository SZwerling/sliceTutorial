import { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { postAdded } from "./postSlice";
import React from "react";

const AddPostForm = () => {

   const titleRef = useRef();
   const contentRef = useRef();
   const formRef = useRef();


   const dispatch = useDispatch();

   const onSavePost = () => {
      if (titleRef && contentRef) {
         dispatch(
            postAdded({
               id: nanoid(),
               title: titleRef.current.value,
               content: contentRef.current.value,
            })
         );
         formRef.current.reset();
      }
   };

   return (
      <section>
         <h2>Add A New Post</h2>
         <form ref={formRef}>
            <label htmlFor="postTitle">Post Title:</label>
            <input
               type="text"
               id="postTitle"
               name="postTitle"
               ref={titleRef}
            />
            <label htmlFor="postContent">Content:</label>
            <textarea
               name="postContent"
               id="postContent"
               ref={contentRef}
            //    cols="30"
            //    rows="10"
            />
            <button type="button" onClick={onSavePost}>
               Save Post
            </button>
         </form>
      </section>
   );
};

export default AddPostForm;
