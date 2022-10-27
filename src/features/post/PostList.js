import { useSelector, useDispatch } from "react-redux";
import { selectAllPosts } from "./postSlice";
import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionButtons from "./ReactionButtons";
import React from "react";

const PostList = () => {
   const posts = useSelector(selectAllPosts); //this name has nothing to do with store.js//It's referencing the slice
   // BELOW .slice returns a shallow copy of the arr // localeCompare returns a number in regards to sort order
   const sortedPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date))

   const renderedPosts = sortedPosts.map((post) => {
      return (
         <article key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content.substring(0, 100)}</p>
            <p className="postCredit">
               <PostAuthor userId={post.userId} />
               <TimeAgo timestamp={post.date}/>  
            </p>
            <ReactionButtons post={post} />
         </article>
      );
   });

   return (
      <section>
         <h2>posts</h2>
         {renderedPosts}
      </section>
   );
};

export default PostList;
