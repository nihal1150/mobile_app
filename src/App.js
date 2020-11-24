import './App.css';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Login from './components/Login/Login'
import Home from './components/Home/Home'
import Show from './components/Show/Show'
  
function App() {
  return (
    <div>     
      <Router>

       <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/login" component={Login}/>
        <Route path="/show" component={Show}/>
        <Route path="/Home" component={Home}/>
        </Switch>
      </Router>
     
    </div>
  );
}

export default App;
