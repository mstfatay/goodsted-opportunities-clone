import { Chip, makeStyles } from '@material-ui/core';
import PropsTypes from 'prop-types';


const useStyles = makeStyles(theme=>({
    typeChip:{
        color: theme.palette.primary.main,
        backgroundColor: theme.palette.primary.soft,
        fontSize: "14px",
        fontWeight: 700,
        paddingLeft: "12px",
        paddingRight: "12px",
        height: "28px",
    },

    typeChipLabel:{
        paddingLeft: "0px",
        paddingRight: "0px",
    },

    lightBulbIcon:{
        WebkitMask: 'url("https://res.cloudinary.com/goodsted/image/upload/v1616400665/lightbulb-flash-line_1.svg") center center / contain no-repeat',
    },

    hearthIcon:{
        WebkitMask: 'url("https://res.cloudinary.com/goodsted/image/upload/v1616400665/service-line_1_1.svg") center center / contain no-repeat',
    },

    icon:{
        backgroundColor: theme.palette.primary.main,
        height: "20px",
        marginRight: "8px",
        marginLeft: "0px",
        width: "20px",
    }
}));


/**
 * A good looking Chip that shows type of an oppurtunity
 * @param {Object} props 
 * @param {("Brainstorming"|"Task"|"Team Activity"|"Phone / Video Call"|string)} props.type - That is written in the Chip.
 * @returns 
 */
function TypeChip(props){
    const classes = useStyles(props);

    let label = "";
    let iconClass = "";

    if(props.type === "" ){
        return ""
    }
    else if(props.type === "Brainstorming"){
        label = "Brainstorming";
        iconClass = classes.lightBulbIcon;
    }
    else if (props.type === "Team Activity"){
        label = "Team Activity";
        iconClass = classes.lightBulbIcon;
    }
    else if (props.type === "Task"){
        label = "Task";
        iconClass = classes.hearthIcon;
    }
    else if (props.type === "Phone / Video Call"){
        label = "Phone / Video Call";
        iconClass = classes.lightBulbIcon;
    }
    else{
        label = props.type;
        iconClass = classes.lightBulbIcon;
    }

    return (
        <Chip className={classes.typeChip} classes={{label: classes.typeChipLabel}} label={label} icon={
            <div className={[classes.icon, iconClass].join(" ")}/>
        }/>
    );
}


TypeChip.propTypes = {
    type: PropsTypes.string,
}

TypeChip.defaultProps = {
    type: "No Type",
}




export default TypeChip;