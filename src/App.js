import React from "react";
import './App.css';
import Navbar from "./Component/Navbar";
import Compose from "./Component/Compose";
import Post from "./Component/Post";
import Home from "./Component/Home";
import About from "./Component/About";
import { Route , BrowserRouter as Router ,Switch} from "react-router-dom"

function App() {
  return (
    <Router>
      <Navbar />
     <Switch>
       <Route path="/" exact component={Home} />
       <Route path="/compose" exact component={Compose} />
       <Route path="/post" exact component={Post} />
       <Route path="/about" exact component={About} />
     </Switch>
    </Router>
  );
}

export default App;
