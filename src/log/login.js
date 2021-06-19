//import validate from './validateInfo';
//import useForm from './useForm';
import {useHistory} from 'react-router-dom'
import './login.css'
import { useState} from 'react';
import axios from 'axios';
import {toast} from 'react-toastify';

const Login = ({ submitForm }) => {
  const [values, setValues] = useState({
    username: '',
    
    password: ''
  });

  
    const handleChange = e => {
      const { name, value } = e.target;
      setValues({
        ...values,
        [name]: value
       // console.log(name);
      });
      console.log("hello"+value);
    };
    const history=useHistory();
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(values);
      axios
      .post("http://localhost:5000/api/login",values)
      .then(res=>{
        
        console.log(res);
      
       localStorage.setItem("ticket",JSON.stringify(res.data.ticket));
        history.push('/home');
        
      }).catch(err=>{
       console.log(err);
       toast.error(err);
      })
    };
    
  
  

        return (
            <div>
    <div>
      <img src="security.svg" alt="Girl in a jacket" width={500} height={600} />
    </div>
    <div className="login">
      <h1>Login</h1>
      <form onSubmit={handleSubmit} method="post">
          <div>
          <input type="email" value={values.username}
          onChange={handleChange} name="username" placeholder="Username" required="required" />
         
          </div>
          <div>
          <input type="password"  value={values.password}
          onChange={handleChange} name="password" placeholder="Password" required="required" />
          </div>
        <button type="submit" className="btn btn-primary btn-block btn-large">Let me in.</button>
      </form>
    </div>
  </div>
        )
    }

    export default Login;
