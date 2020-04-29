import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Blog from './Components/Blog/Blog';
//import './App.css';
//import Post from './Components/Post/Post';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';


const App = () => {
  return (
    <Router>
      <Header />
      <main>
        <Switch>
          <React.Fragment>
            <CssBaseline />
            <Container maxWidth="xl">
              <Typography component="div" style={{ backgroundColor: 'lightyellow', height: '100vh' }} >
                <Route path="/about" component={About} />
                <Route path="/blog" component={Blog} />
                <Route exact path="/" component={Home} />
              </Typography>
            </Container>
          </React.Fragment>
        </Switch>
      </main>
    </Router>
  );
}

export default App;
