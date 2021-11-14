import { Chip, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme)=>({
    chip:{
        borderRadius: "2px",
        borderColor: "rgb(218, 225, 221)",
        fontSize: "14px",
        lineHeight: 1.43,
        whiteSpace: "nowrap",
        fontFamily: "Poppins-Regular",
        height: (props)=>props.height,
        boxSizing: "border-box",
    }

}));

/**
 * It is a styled Chip component. except className and variant, all Chip component props can be used.
 * @param {*} props
 * @returns 
 */
function ChipButton(props){
    const classes = useStyles(props);

    const {variant, ...other} = props;

    return (
        <Chip className={classes.chip} variant='outlined' {...other} />
    );
}


ChipButton.defaultProps = {
    height: "36px",
}

export default ChipButton;