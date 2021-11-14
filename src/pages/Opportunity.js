import { useQuery } from '@apollo/client';
import {Button, Container, Typography} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

import { useParams, Link } from 'react-router-dom';
import GET_PROJECT from '../queries/GET_PROJECT.js';

const useStyles = makeStyles(theme => ({
    pageContainer:{
        paddingLeft: "16px",
        paddingRight: "16px",
        [theme.breakpoints.up("sm")]:{
          paddingLeft: "56px",
          paddingRight: "56px",
        }
    },

}));



function Opportunity(props) {
    const classes = useStyles(props);
    let { id } = useParams();
    const {loading, error, data} = useQuery(GET_PROJECT, {variables: {id:id}});


    if(loading){
        return "loading...";
    }
    if(error){
        return "Ups, an error occured."
    }

  return (
    <Container className={classes.pageContainer} maxWidth="lg">
        <Typography variant="h2">
            {data.Project.name}
        </Typography>
        <Link to="/opportunities">
            <Button variant="outlined" color="primary">return</Button>
        </Link>
    </Container>
  );
}

export default Opportunity;
