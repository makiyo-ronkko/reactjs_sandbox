import React from "react";
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Nav from "./Components/Nav/Nav";
import Home from "./Components/Home/Home";
import Blog from "./Components/Blog/Blog";
import NewPost from "./Components/NewPost/NewPost";
import FormExample from "./Components/FormExample/FormExample/FormExample";

const App = () => {
  return (
    <Router basename="/task10">
      <Nav />
      <main>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/blog" component={Blog} />
          <Route path="/newpost" component={NewPost} />
          <Route path="/formexample" component={FormExample} />
        </Switch>
      </main>
    </Router>
  );
};

export default App;
