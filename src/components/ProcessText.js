import { makeStyles } from "@material-ui/core";
import PropTypes from 'prop-types';


const useStyles = makeStyles(theme=>({
    processText:{
        fontWeight: 600,
        margin: "0px",
    },
    open:{
        color: theme.palette.primary.main
    },
    inProgress:{
        color:  theme.palette.inProgress.main,
    },
    completed:{
        color: theme.palette.completed.main,
    }
}));

/**
 * Just a basic span element that is styled according to its name (either Open, InProgres or Completed)
 * @param {Object} props 
 * @param {("Open"|"InProgress"|"Completed")} props.type
 * @returns 
 */
function ProcessText(props){
    const classes = useStyles(props);
    let text = "";
    let typeClass = "";
    
    if(props.type === "Open"){
        text = "Open";
        typeClass = classes.open;
    }
    else if(props.type === "InProgress"){
        text = "In Progress";
        typeClass = classes.inProgress;
    }
    else if(props.type === "Completed"){
        text = "Completed";
        typeClass = classes.completed;
    }
    else{
        return "";
    }

    return(
        <span className={[classes.processText, typeClass].join(" ")}>{text}</span>
    );
}

ProcessText.propTypes = {
    type: PropTypes.oneOf(["Open", "InProgress", "Completed"]),
}




export default ProcessText;