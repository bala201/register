import React from 'react';
import color from 'material-ui-color';
//import { SportsRugbySharp } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Image from 'material-ui-image';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import m from './money.jpg';
import c from './Launching-amico.svg';
import h from './sys.svg';
import './SsignUp.css';
import  {SportsRugbySharp}  from '@material-ui/icons';
import ReactDom from 'react-dom'
import w from './Work.svg'
import validator from 'validator';
//import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import axios from 'axios';
import {useState} from 'react';



const useStyles = makeStyles((theme) => ({
  root: {
   
    flexGrow: 1,
    backgroundImage: 'url('+h+')',
    backgroundRepeat:'no-repeat',
    width: '100%',
    position: 'absolute',
   
  
    marginRight:theme.spacing(6)
  },
  border:{
    height: '500px',
    width:'1px',
    marginTop:'30vh',
    box: '0 10px 20px rgba(0, 0, 15, .5)',
    marginBottom:'40vh',
    marginLeft:'60vh',
    position: 'relative',
    opacity: '0.5',
    margin: '30px',
    backgroundColor: ' #ffffff',
    border: '1px solid black',
  
  },
  image: {
    backgroundImage: 'url('+w+')',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: 1000,
  width: '100%',
  objectFit: 'cover',
  opacity: '0.7',
  position: 'fixed',
   
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex !important',
    flexDirection: 'column',
    alignItems: 'center',
    width: 'theme.spacing(70) !important',
    height: theme.spacing(8),
    marginTop: theme.spacing(6),
    marginBottom: theme.spacing(6),
    marginLeft:theme.spacing(6),
    marginRight:theme.spacing(6),
    position: 'absolute',
    opacity: '1',
    
  },
  avatar: {
    margin: theme.spacing(0),
    backgroundColor: theme.palette.primary.main,
  },
  form: {
    width: '100%', 
    marginTop: theme.spacing(2),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  rocket:{
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: theme.spacing(70),
    height: theme.spacing(18),
    marginTop: theme.spacing(6),
    marginBottom: theme.spacing(6),
    display: 'flex',
    
  },
}));

export default function SsignUp() {

  const classes = useStyles();

  return (
    <Grid container direction="row" spacing={2}
  justify="center" 
  alignItems="center" component="main" style={{width: '100%',position: 'absolute',background: 'linear-gradient(to bottom left,#2a2a72, #4169E1)',flexGrow: 1,
 
  backgroundRepeat:'no-repeat',
 }} className="classes.root">
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className="image" style={{width: '100%',position: 'absolute',backgroundImage: 'url('+w+')',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: 1000,
    
    objectFit: 'cover',
    opacity: '0.7',
   }} />
     
      <Grid important style={{opacity: '0.8', transform: 'skew(1deg, 5deg)', height: '500px',
      width:'1px',
      marginTop:'30vh',
      box: '0 10px 20px rgba(0, 0, 15, .5)',
      marginBottom:'40vh',
      marginLeft:'60vh',
      position: 'relative',
     
      margin: '30px',
      backgroundColor: ' #ffffff',
      border: '1px solid black',}} className="classes.border" alignItems="center" xs={10} sm={8} md={6} lg={4} xl={3} component={Paper} square>
        
      <div className="paper" style={{opacity: '1', }} >
          
          <Typography component="h1" variant="h4">
            Register
          </Typography>
          <form className="classes.form" style={{ width: '100%', 
          marginTop: '2px'}}  noValidate>
          <Grid container spacing={4}>
          <Grid item xs={6} sm={6}>
         
            <TextField
              autoComplete="fname"
              name="firstName"
              variant="outlined"
              required
              fullWidth
              id="firstName"
              label="First Name"
              autoFocus
              
            />
          </Grid>
          <Grid item xs={6} sm={6}>
            <TextField
              variant="outlined"
              required
              fullWidth
              id="lastName"
              label="Last Name"
              name="lastName"
              autoComplete="lname"
            />
          </Grid>
          <Grid item xs={6} sm={6}>
            <TextField
              variant="outlined"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              
            />
          </Grid>
          <Grid item xs={6} sm={6}>
            <TextField
              variant="outlined"
              required
              fullWidth
              id="phone"
              label="Phone Number"
              name="phone"
              autoComplete="phone"
            />
           
          </Grid>
          <Grid item xs={6} sm={6}>
            <TextField
              variant="outlined"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
           
    
          </Grid>
          <Grid item xs={6} xs={6}>
            <TextField
              variant="outlined"
              required
              fullWidth
              name="cpassword"
              label="Confirm Password"
              type="password"
              id="cpassword"
              autoComplete="current-password"
            />
          </Grid>
         
        </Grid>
        <Grid spacing={2}>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className="submit"
        >
          Sign Up
        </Button>
        </Grid>
        <Grid container justify="flex-end">
          <Grid item>
            <Link href="login" variant="body2"  color='blue'>
              {"Already have an account? Sign in"}
            </Link>
          </Grid>
        </Grid>
          </form>
        </div>
      </Grid>
     
    </Grid>
  );
}