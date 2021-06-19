import {Button} from '@material-ui/core'
//import money from './money.jpg'
import SignInSide from './SignInSide'
import {useHistory} from "react-router-dom";
import './Getstarted.css';
import m from './money.jpg'
export function Getstarted(){
    

    return(
        <div className="container">
        <div>
        
        <div className="content">
        
    
    <p>What seems too high and risky to the majority generally goes higher and what seems low</p>
    <h1><Button href="/ssignup" variant="contained" size="large">Get Started</Button></h1>
    <p> cheap generally goes lower!!!</p>
  </div>
        <div className="m">
        <img src={m} alt="Snow" width="100%" />
        </div>
        
      </div>
      
</div>
    )
}

