import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, useRouteMatch, useParams } from 'react-router-dom';

const Nav = () => {
    return (
        <div>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="courses/">Courses</Link></li>
                </ul>
            </nav>
        </div>
    );
};

const Home = () => {
    return (
        <div>
            <h1>This is Home page</h1>
        </div>
    );
};
const About = () => {
    return (
        <div>
            <h1>This is About page</h1>
        </div>
    );
};

const Courses = () => {

    /*  The Courses page has its own <Switch> with more routes
    *   that build on the /topics URL path. You can think of the
    *   2nd <Route> here as an "index" page for all topics, or
    *   the page that is shown when no topic is selected 
    */

    let { path, url } = useRouteMatch();

    /* 
    * The useRouteMatch hook attempts to match the current URL in the same way
    * that a <Route> would. It’s mostly useful for getting access to the match data
    * without actually rendering a <Route>.
    */

    return (
        <div>
            <h1>This is Courses page</h1>
            <ul>
                <li>
                    <Link to={`${url}/html&css`}>HTML and CSS</Link>
                </li>
                <li>
                    <Link to={`${url}/UIprotptyping`}>UI Prototyping</Link>
                </li>
                <li>
                    <Link to={`${url}/reactbasics`}>React Basics</Link>
                </li>
                <li>
                    <Link to={`${url}/about`}>About</Link>
                </li>
            </ul>

            {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
            {/* If the current URL is /about, this route is rendered
            while the rest are ignored */}
            <Switch>
                <Route path={`${path}/about`} component={About} />
                <Route path={`${path}/:CourseId`}>
                    <Topic />
                </Route>
            </Switch>

        </div>
    );
};

const Topic = () => {
    /*  useParams returns an object of key/value pairs of URL parameters.
     Use it to access match.params of the current <Route>. */
    let { CourseId } = useParams();
    return (
        <h1>This is page for {CourseId}</h1>

    );
};

const Nestedrouting = () => {
    return (
        <Router>
            <Nav />
            <main>
                <Switch>

                    <Route path="/about" component={About} />
                    <Route path="/courses" component={Courses} />
                    {/* If none of the previous routes render anything, 
                    this route acts as a fallback.
                    Important: A route with path="/" will *always* match
                    the URL because all URLs begin with a /. So that's
                    why we put this one last of all */}
                    <Route exact path="/" component={Home} />
                </Switch>
            </main>
        </Router>
    );
}

export default Nestedrouting;
