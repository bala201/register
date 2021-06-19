import React,{Component} from 'react';
import { useFormik } from 'formik';

const validate = values => {
    var errors = {};
    if(!values.name){
        errors.name = "Name is required"
    } else if (values.name.length > 15) {
        errors.name = "Maximum 15 characters only"
    } else if (values.name.length < 3) {
        errors.name = "Minimum 3 characters required"
    }

    return errors;
}

export const Register = () => {
    const formik = useFormik({
        initialValues : {
            name : ''
        },
        validate,
        onSubmit : (userInputData) => {
            console.log(userInputData);
        }
    })

    return(
        <div className = "container">
            <form autoComplete = "off" onSubmit = {formik.handleSubmit}>
                <div className="form-group">
                    <input
                        className = "form-control"
                        type = "text"
                        name = "name"
                        onChange = {formik.handleChange}
                        value = {formik.values.name}
                    />
                    {formik.errors.name ?
                        <div className= "text-danger">{formik.errors.name}</div>
                        : null
                    }
                </div>
                <button className = "btn btn-primary">
                    Submit
                </button>
            </form>
        </div>
    )

}
