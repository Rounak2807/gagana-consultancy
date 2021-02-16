import React from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import NavBar from './components/NavBar';
import Contact from './components/Contact';
import Team from './components/Team';
import Services from './components/Services';
import Portfolio from './components/Portfolio';


function App() {
  return (
    <div className="App">
     <Router>
       <NavBar></NavBar>
       <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/about' component={About}/>
        <Route path='/contact' component={Contact}/>
        <Route path='/team' component={Team}/>
        <Route path='/portfolio' component={Portfolio}/>
        <Route path='/services' component={Services}/>
       </Switch>
     </Router>
    </div>
  );
}

export default App;
