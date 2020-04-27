import React from 'react';
import { Switch, Route, Link, useRouteMatch } from 'react-router-dom';
import './Blog.css';
//import './Post/Post';

const posts = [{
    img: "https://source.unsplash.com/1600x900/?people",
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    author: "John Smith",
    desc: "Lorem ipsum dolor sit amet, nec probo eripuit propriae no, mucius appareat moderatius id duo, duo mazim fabellas ea. Vel porro perfecto ne, omnesque disputationi ex duo. Ex illum elitr ocurreret sit. Pro ei nemore omittantur voluptatibus, dicit graeco ut pri. Eu eum duis populo discere.",
},
{
    img: "https://source.unsplash.com/1600x900/?nature,water",
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    author: "John Smith",
    desc: "Lorem ipsum dolor sit amet, nec probo eripuit propriae no, mucius appareat moderatius id duo, duo mazim fabellas ea. Vel porro perfecto ne, omnesque disputationi ex duo. Ex illum elitr ocurreret sit. Pro ei nemore omittantur voluptatibus, dicit graeco ut pri. Eu eum duis populo discere.",
},
{
    img: "https://source.unsplash.com/1600x900/?city",
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    author: "John Smith",
    desc: "Lorem ipsum dolor sit amet, nec probo eripuit propriae no, mucius appareat moderatius id duo, duo mazim fabellas ea. Vel porro perfecto ne, omnesque disputationi ex duo. Ex illum elitr ocurreret sit. Pro ei nemore omittantur voluptatibus, dicit graeco ut pri. Eu eum duis populo discere.",
},
{
    img: "https://source.unsplash.com/1600x900/?tree",
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    author: "John Smith",
    desc: "Lorem ipsum dolor sit amet, nec probo eripuit propriae no, mucius appareat moderatius id duo, duo mazim fabellas ea. Vel porro perfecto ne, omnesque disputationi ex duo. Ex illum elitr ocurreret sit. Pro ei nemore omittantur voluptatibus, dicit graeco ut pri. Eu eum duis populo discere.",
},
];


const Blog = (props) => {

    let { path, url } = useRouteMatch();


    return (
        <div className="blog-container" >


            <div className="blogpost">Blogpost1
                        <img src={posts[0].img} alt={posts[0].title} />
                <h2>{posts[0].title}</h2>
                <p>{posts[0].author}</p>
                <p>{posts[0].desc}</p>
                <Link to={`${url}/blog1`}><div onClick={props.openPost}><p>Read More</p></div> </Link>
            </div>

            <div className="blogpost">Blogpost2
                        <img src={posts[1].img} alt={posts[1].title} />
                <h2>{posts[1].title}</h2>
                <p>{posts[1].author}</p>
                <p>{posts[1].desc}</p>
                <Link to={`${url}/blog2`}><div onClick={props.openPost}><p>Read More</p></div></Link>
            </div>

            <div className="blogpost">Blogpost3
                        <img src={posts[2].img} alt={posts[2].title} />
                <h2>{posts[2].title}</h2>
                <p>{posts[2].author}</p>
                <p>{posts[2].desc}</p>
                <Link to={`${url}/blog3`}><div onClick={props.openPost}><p>Read More</p></div> </Link>
            </div>

            <div className="blogpost">Blogpost4
                        <img src={posts[3].img} alt={posts[3].title} />
                <h2>{posts[3].title}</h2>
                <p>{posts[3].author}</p>
                <p>{posts[3].desc}</p>
                <Link to={`${url}/blog4`}><div onClick={props.openPost}><p>Read More</p></div></Link>
            </div>


            <Switch>
                <Route path={`${path}/:blogId`}>
                    {/* <Post /> */}
                </Route>
            </Switch>
        </div >
    );
};

export default Blog;