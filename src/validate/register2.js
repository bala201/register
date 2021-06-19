import React,{Component} from 'react';
import { useFormik } from 'formik';
import 'bootstrap/dist/css/bootstrap.min.css'
import * as yup from 'yup'
//import{Form,container} from 'react-bootstrap'


export const Register2 = () => {
    const formik = useFormik({
        initialValues : {
            name : '',
            email : '',
            password : '',
            confirmPassword : ''
        },
        validationSchema:yup.object({
            name:yup.string()
            .required("Name is required")
            .min(5, "Minimum 5 characters required")
            .max(15, "Maximum 15 characters only"),
            email:yup.string()
            .email()
            .required("Email is required"),
            password: yup.string()
            .required("Password is required"),
            confirmPassword: yup.string()
            .oneOf([yup.ref('password'),null],"Confirm password and password must be same")
            .required("Confirm password is required")
        }),
        onSubmit : (userInputData) => {
            console.log(userInputData);
        }
    })

    return(
        <div className = "container mt-3">
            <div className="jumbotron">
             <form autoComplete = "off" onSubmit = {formik.handleSubmit}>
                <div className="form-group">
                    <input
                        className = "form-control"
                        type = "text"
                        name = "name"
                        placeholder = "Name"
                        onChange = {formik.handleChange}
                        value = {formik.values.name}
                    />
                    {formik.errors.name ?
                        <div className= "text-danger">{formik.errors.name}</div>
                        : null
                    }
                </div>
                <div className="form-group">
                    <input
                        className = "form-control"
                        type = "text"
                        name = "email"
                        placeholder = "Email"
                        onChange = {formik.handleChange}
                        value = {formik.values.email}
                    />
                    {formik.errors.email ?
                        <div className= "text-danger">{formik.errors.email}</div>
                        : null
                    }
                </div>
                <div className="form-group">
                    <input
                        className = "form-control"
                        type = "password"
                        name = "password"
                        placeholder = "Password"
                        onChange = {formik.handleChange}
                        value = {formik.values.password}
                    />
                    {formik.errors.email ?
                        <div className= "text-danger">{formik.errors.password}</div>
                        : null
                    }
                </div>
                <div className="form-group">
                    <input
                        className = "form-control"
                        type = "password"
                        name = "confirmPassword"
                        placeholder = "Confirm Password"
                        onChange = {formik.handleChange}
                        value = {formik.values.confirmPassword}
                    />
                    {formik.errors.email ?
                        <div className= "text-danger">{formik.errors.confirmPassword}</div>
                        : null
                    }
                </div>
                <button className = "btn btn-primary">
                    Submit
                </button>
            </form>
        
        </div>    </div>
    )

}
