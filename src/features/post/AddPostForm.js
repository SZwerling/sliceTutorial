import { useState } from "react";

import React from "react";
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    const onTitleChange = (e) => {setTitle(e.target.vaue)}
    const onContentChange = (e) => {setContent(e.target.value)}


const AddPostForm = () => {
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
               oncChange={onTitleChange}
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
            <button type="button">Save Post</button>
         </form>
      </section>
   );
};

export default AddPostForm;
