import React from 'react'
import {Route, Redirect} from 'react-router-dom'
import { toast } from 'react-toastify';

const ProtectedRouter = ({component,...rest})=>{
    let RenderComponents = component;
    let hasToken=JSON.parse(localStorage.getItem('ticket'));
    toast.success("user login successfully")
    return (
        <Route
            {...rest}
            render = {
                props=> {
                   return hasToken  ? (
                        <RenderComponents {...props} />
                    ):(
                        <Redirect
                        to = {{
                            pathname:"/home"
                        }}
                        />
                    )
                }
            }
        />
    )
}

export default ProtectedRouter;