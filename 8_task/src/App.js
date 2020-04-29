import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Blog from './Components/Blog/Blog';
import './App.css';
//import Post from './Components/Post/Post';



const App = () => {
  return (
    <Router>
      <Header />
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

export default App;
