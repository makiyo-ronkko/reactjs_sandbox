import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Blog from './Components/Blog/Blog';
import Post from './Components/Post/Post';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';


const App = () => {
  return (
    <Router>
      <Header />
      <Container fluid >
        <main  >
          <Switch>
            <Route path="/blog" component={Blog} />
            <Route path="/post" component={Post} />
            <Route exact path="/" component={Home} />
          </Switch>
        </main>
      </Container>
    </Router>
  );
}

export default App;
