import { useState, useEffect } from 'react';
import axios from 'axios';


const useForm = (callback, validate) => {
 

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
        axios.post("http://localhost:5000/api/login",values)
        .then(res=>{
          console.log(res);
        })
      }
    },
    [errors]
  );

  return { handleChange, handleSubmit, values, errors };
};

export default useForm;
