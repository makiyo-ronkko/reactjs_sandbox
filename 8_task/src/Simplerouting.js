import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <h1>This is a Home page</h1>
        </div>
    );
};
const About = () => {
    return (
        <div>
            <h1>This is a About page</h1>
        </div>
    );
};
const Contact = () => {
    return (
        <div>
            <h1>This is a Contact page</h1>
        </div>
    );
};

const Simplerouting = () => {
    return (
        <Router>
            <nav>
                <ul>
                    <li>
                        {/* React Router provides a <Link> component to create links in your application.
                    Wherever you render a <Link>,
                    an anchor (<a>) will be rendered in your HTML document. */}
                        <Link to="/" >Home</Link>
                    </li>
                    <li>
                        <Link to="/about" >About</Link>
                    </li>
                    <li>
                        <Link to="/contact" >Contact</Link>
                    </li>
                </ul>
            </nav>
            <main>
                <Switch>
                    <Route path="/about" component={About} />
                    <Route path="/contact" component={Contact} />
                    <Route path="/" exact component={Home} />
                </Switch>
            </main>
        </Router>
    );
}

export default Simplerouting