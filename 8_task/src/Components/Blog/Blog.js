import React, { Component } from 'react';
import { Switch, Route, Link, useRouteMatch } from 'react-router-dom';
import './Blog.css';
import Post from '../Post/Post';

const posts = [{
    id: 1,
    img: "https://source.unsplash.com/1600x900/?people",
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    author: "John Smith",
    desc: "Lorem ipsum dolor sit amet, nec probo eripuit propriae no, mucius appareat moderatius id duo, duo mazim fabellas ea. Vel porro perfecto ne, omnesque disputationi ex duo. Ex illum elitr ocurreret sit. Pro ei nemore omittantur voluptatibus, dicit graeco ut pri. Eu eum duis populo discere.",
},
{
    id: 2,
    img: "https://source.unsplash.com/1600x900/?nature,water",
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    author: "John Smith",
    desc: "Lorem ipsum dolor sit amet, nec probo eripuit propriae no, mucius appareat moderatius id duo, duo mazim fabellas ea. Vel porro perfecto ne, omnesque disputationi ex duo. Ex illum elitr ocurreret sit. Pro ei nemore omittantur voluptatibus, dicit graeco ut pri. Eu eum duis populo discere.",
},
{
    id: 3,
    img: "https://source.unsplash.com/1600x900/?city",
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    author: "John Smith",
    desc: "Lorem ipsum dolor sit amet, nec probo eripuit propriae no, mucius appareat moderatius id duo, duo mazim fabellas ea. Vel porro perfecto ne, omnesque disputationi ex duo. Ex illum elitr ocurreret sit. Pro ei nemore omittantur voluptatibus, dicit graeco ut pri. Eu eum duis populo discere.",
},
{
    id: 4,
    img: "https://source.unsplash.com/1600x900/?tree",
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    author: "John Smith",
    desc: "Lorem ipsum dolor sit amet, nec probo eripuit propriae no, mucius appareat moderatius id duo, duo mazim fabellas ea. Vel porro perfecto ne, omnesque disputationi ex duo. Ex illum elitr ocurreret sit. Pro ei nemore omittantur voluptatibus, dicit graeco ut pri. Eu eum duis populo discere.",
},
];


class Blog extends Component {

    state = {
        posts: posts
    };

    /* openHandler = (openId) => {
        const oldArray = [...this.state.posts]; //... is preceed an original posts array
        //oldArray.splice(openId, 1); // remove 1 element at removeID position
        this.setState({ posts: oldArray }); // update the array after removal
        console.log('clicked');
    }
 */
    render() {
        let { path, url } = useRouteMatch();

        const openPost = this.state.posts.map((post) => { // each element takes the parameter post
            return (
                <Post
                    key={post.id}
                    img={post.img}
                    title={post.title}
                    author={post.author}
                    desc={post.desc}
                //postClick={this.openHandler.bind(this, index)} 
                />
            )
        })

        return (
            <div className="blog-container" >

                <div className="blogpost">Blogpost1
                        {/* <img src={posts[0].img} alt={posts[0].title} />
                    <h2>{posts[0].title}</h2>
                    <p>{posts[0].author}</p>
                    <p>{posts[0].desc}</p> */}
                    {openPost[0]}
                    <Link to={`${url}/blog1`}><input type="button" value="Read More" onClick={openPost} /> </Link>
                </div>

                <div className="blogpost">Blogpost2
                       {/*  <img src={posts[1].img} alt={posts[1].title} />
                    <h2>{posts[1].title}</h2>
                    <p>{posts[1].author}</p>
                    <p>{posts[1].desc}</p> */}
                    {openPost[1]}
                    <Link to={`${url}/blog2`}><input type="button" value="Read More" onClick={openPost} /></Link>
                </div>

                <div className="blogpost">Blogpost3
                       {/*  <img src={posts[2].img} alt={posts[2].title} />
                    <h2>{posts[2].title}</h2>
                    <p>{posts[2].author}</p>
                    <p>{posts[2].desc}</p> */}
                    {openPost[1]}
                    <Link to={`${url}/blog3`}><input type="button" value="Read More" onClick={openPost} /> </Link>
                </div>

                <div className="blogpost">Blogpost4
                        {/* <img src={posts[3].img} alt={posts[3].title} />
                    <h2>{posts[3].title}</h2>
                    <p>{posts[3].author}</p>
                    <p>{posts[3].desc}</p> */}
                    {openPost[3]}
                    <Link to={`${url}/blog4`}><input type="button" value="Read More" onClick={openPost} /></Link>
                </div>


                <Switch>
                    <Route path={`${path}/:blogId`}>
                        <Post />
                    </Route>
                </Switch>
            </div >
        );
    }
};

export default Blog;