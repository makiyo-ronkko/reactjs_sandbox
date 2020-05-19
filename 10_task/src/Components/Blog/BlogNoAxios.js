import React, { useState } from "react";

import PostCard from "../PostCard/PostCard";
import { Switch, Route, useRouteMatch } from "react-router-dom";

import postdata from "../../postdata";
import FullPost from "../FullPost/FullPost";

const posts = postdata;

const BlogNoAxios = () => {

    const [post, setPost] = useState(posts); // when updating component with functional component

    let match = useRouteMatch();

    const removeHandler = (id) => { // identify ID and passing into this function
        console.log(id);

        const oldPost = [...post];
        console.log(oldPost);

        // removing the element using splice
        oldPost.splice(id, 1);

        console.log(oldPost);

        // updating the list
        setPost(oldPost);
    };

    //const PostList = postdata.map((p) => {
    // const PostList = post.map((p) => { // getting data from axios
    const PostList = posts.map((post) => {
        return (
            <PostCard
                key={post.id}
                title={post.title}
                desc={post.desc}
                img={post.img}
                //img={post.thumbnailUrl}
                link={`${match.url}/${post.id}`}
                remove={() => removeHandler(post.id)}
            />
        );
    });

    return (
        <>
            <Switch>
                <Route path="/blog/:postId">
                    <FullPost />
                </Route>
                <Route path={match.path}>
                    <div>
                        <h1 style={{ margin: "20px" }}>Blog</h1>
                        {PostList}
                    </div>
                </Route>
            </Switch>
        </>
    );
};

export default BlogNoAxios;
