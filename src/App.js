import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Home from './Components/Home/Home';
import PostDetails from './Components/PostDetails/PostDetails';
import NoMatch from './Components/NoMatch/NoMatch';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/home">
          <Home/>
        </Route>
        <Route path ="/post/:postId">
          <PostDetails></PostDetails>
        </Route>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="*">
            <NoMatch/>
          </Route>
      </Switch>
    </Router>
  );
}

export default App;
