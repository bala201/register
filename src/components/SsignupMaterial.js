import { makeStyles } from '@material-ui/core/styles';




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
      position: 'relative',
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
  