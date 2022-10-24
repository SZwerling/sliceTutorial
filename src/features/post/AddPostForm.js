import { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postAdded } from "./postSlice";
import { selectAllUsers } from "../users/usersSlice";
import React from "react";

const AddPostForm = () => {
   const dispatch = useDispatch();
   const [userId, setUserId] = useState('')
   const users = useSelector(selectAllUsers)
   const titleRef = useRef();
   const contentRef = useRef();
   const formRef = useRef();

   const onSavePost = () => {
      if (titleRef.current.value && contentRef.current.value && userId) {
         dispatch(
            postAdded(titleRef.current.value, contentRef.current.value, userId)
         );
         setUserId('')
         formRef.current.reset();
      }
   };

   const onAuthorChange = (e) => setUserId(e.target.value)
   

   const userOptions = users.map((user) => {
      return <option key={user.id} value={user.id}>
         {user.name}
      </option>
   })

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
            <label htmlFor="postAuthor">author</label>
            <select name="postAuthor" id="postAuthor" onChange={onAuthorChange}>
               <option value=""></option>
               {userOptions}
            </select>
            <label htmlFor="postContent">Content:</label>
            <textarea
               name="postContent"
               id="postContent"
               ref={contentRef}
            //    cols="30"
            //    rows="10"
            />
            <button type="button" onClick={onSavePost} >
               Save Post
            </button>
         </form>
      </section>
   );
};

export default AddPostForm;
