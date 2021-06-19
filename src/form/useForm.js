import { useState, useEffect } from 'react';
import axios from 'axios';


const useForm = (callback, validate) => {
  const [values, setValues] = useState({
    firstname: '',
    lastname: '',
    email: '',
    phone:'',
    password: '',
    password2: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = e => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
    console.log(name);
  };

  const handleSubmit = e => {
    e.preventDefault();
    
    setErrors(validate(values));
    console.log('set vallidation');
    setIsSubmitting(true);
   
  };

  useEffect(
    () => {
      if (Object.keys(errors).length === 0 && isSubmitting) {
        callback();
        console.log(values);
        axios.post("http://localhost:5000/api/register",values)
        .then(res=>{
          console.log(res);
        }).catch(err=>{
          console.log(err);
        })
      }
    },
    [errors]
  );

  return { handleChange, handleSubmit, values, errors };
};

export default useForm;
