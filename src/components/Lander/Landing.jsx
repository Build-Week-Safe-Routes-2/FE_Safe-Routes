import React from 'react';
import{Link} from 'react-router-dom';
import './nav.scss'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

export default function CenteredTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);


  return (
    <Paper className={classes.root} >
      <Tabs
        className="navBar"
        value={value}
        indicatorColor="secondary"
        textColor="default"
        centered
      >
       <Link to="/register"onClick={()=> setValue(0)}> <Tab label="Sign Up" className="linkOne" /> </Link>
       <Link to="/" onClick={()=> setValue(1)}> <Tab label="Login" /> </Link>
       <Link to="/routes" onClick={()=> setValue(2)}>  <Tab label="Map" /> </Link>
      </Tabs>
    </Paper>
  );
}