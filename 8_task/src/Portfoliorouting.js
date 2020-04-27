import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, useRouteMatch, useParams } from 'react-router-dom';
import './Portfoliorouting.css';

const Nav = () => {
    return (
        <div className="nav-container">
            <nav>
                <h2>Makiyo's Portfolio</h2>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/blog">Blog</Link></li>
                </ul>
            </nav>
        </div>
    );
};

const Home = () => {
    return (
        <div>
            <h1>Welcome to my Portfolio!</h1>
        </div>
    );
};

const About = () => {
    return (
        <div className="about-container" >
            <img alt="about" src="//source.unsplash.com/1600x900/?nature" />
            <div className="text">
                <h1>About me</h1>
                <p>Lorem ipsum dolor sit amet, nec probo eripuit propriae no, mucius appareat moderatius id duo, duo mazim fabellas ea. Vel porro perfecto ne, omnesque disputationi ex duo. Ex illum elitr ocurreret sit. Pro ei nemore omittantur voluptatibus, dicit graeco ut pri. Eu eum duis populo discere.</p>
            </div>
        </div >
    );
};

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

const Blog = () => {

    let { path, url } = useRouteMatch();

    return (
        <div className="blog-container" >


            <div className="blogpost">Blogpost1
                        <img src={posts[0].img} alt={posts[0].title} />
                <h2>{posts[0].title}</h2>
                <p>{posts[0].author}</p>
                <p>{posts[0].desc}</p>
                <Link to={`${url}/blog1`}><p>Read More</p> </Link>
            </div>

            <div className="blogpost">Blogpost2
                        <img src={posts[1].img} alt={posts[1].title} />
                <h2>{posts[1].title}</h2>
                <p>{posts[1].author}</p>
                <p>{posts[1].desc}</p>
                <Link to={`${url}/blog2`}><p>Read More</p> </Link>
            </div>


            <div className="blogpost">Blogpost3
                        <img src={posts[2].img} alt={posts[2].title} />
                <h2>{posts[2].title}</h2>
                <p>{posts[2].author}</p>
                <p>{posts[2].desc}</p>

            </div>

            <div className="blogpost">Blogpost4
                        <img src={posts[3].img} alt={posts[3].title} />
                <h2>{posts[3].title}</h2>
                <p>{posts[3].author}</p>
                <p>{posts[3].desc}</p>
                <Link to={`${url}/blog4`}><p>Read More</p> </Link>
            </div>


            <Switch>
                <Route path={`${path}/:blogId`}>
                    <Post />
                </Route>
            </Switch>
        </div >
    );
};

const Post = () => {
    let { blogId } = useParams();
    return (
        <h1>BlogPost: {blogId}</h1>
    );
}


const Portfoliorouting = () => {
    return (
        <Router>
            <Nav />
            <main>
                <Switch>
                    <Route path="/about" component={About} />
                    <Route path="/blog" component={Blog} />
                    <Route exact path="/" component={Home} />
                </Switch>
            </main>
        </Router>
    );
}

export default Portfoliorouting;