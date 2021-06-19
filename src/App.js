import {Getstarted} from './components/Getstarted'
import {Button} from '@material-ui/core'
import ReactDom from 'react-dom'
import SignInSide from './components/SignInSide'
import SsignUp from './components/SsignUp'
//import './App.css';
import {BrowserRouter as Router,Route,Switch,Link} from "react-router-dom";
import SignUp from './components/SignUp';
import  BsignUp  from './components/BsignUp';
import Form from './form/Form';
import Login from './log/login'
import {toast} from 'react-toastify';
import ProtectedRouter from './protected';
import { Register } from './validate/register'
import { Register2 } from './validate/register2'

function App() {
  return (
    <div className="App">
    
    <Router>
      <Switch>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/signup" component={SignUp}/>
        <Route exact path="/ssignup" component={SsignUp}/>
        <Route exact path="/bsignup" component={BsignUp}/>
        <Route exact path="/form" component={Form}/>

        <Route exact path="/register" component={Register}/>
        <Route exact path="/register2" component={Register2}/>


        <ProtectedRouter exact path="/home" component={Getstarted}/>


      </Switch>
    </Router>
      
     
    </div>
  );
}

export default App;
