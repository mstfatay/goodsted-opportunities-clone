import { makeStyles, FormControl, Typography, MenuItem, Checkbox, ListItemText, Select } from "@material-ui/core";


const useStyles = makeStyles((theme)=>({
    select:{
        padding: "8px 32px 8px 12px !important",
        minHeight: "24px",
    },

    formControl:{
        borderColor: "rgb(28, 44, 46)",
    },

    selected:{
        color: theme.palette.secondary.main,
    },

}));



/**
 * A dropdown form menu but multiple items of it can be selected.
 * @param {Object} props 
 * @param {string[]} props.value - A list of values of selected items.
 * @param {function} props.onChange - It is a function that is called when props.value changes.
 * @param {string} props.label - A string which is shown on the button.
 * @param {Object[]} props.data - A list of objects. Names are shown to users as item names, ids are values of items.
 * @param {string} props.data[].name
 * @param {(string|number|readonly string[])} props.data[].id
 */
function MultipleSelection(props){
    const classes = useStyles(props);

    return (
        <FormControl variant="outlined" className={classes.formControl}>
            <Select classes={{select: classes.select}}
                value={props.value}
                onChange={props.onChange}
                displayEmpty
                color="secondary"
                renderValue={()=>(
                    (props.value.length === 0)?
                    <Typography variant="body2">{props.label}</Typography>:
                    <Typography className={classes.selected} variant="body2">{props.label} ({props.value.length})</Typography>
                )}
                multiple
            >
                {
                    props.data.map((challengeData, index)=>(
                        <MenuItem value={challengeData.id} key={challengeData.id}>
                            <Checkbox checked={props.value.includes(challengeData.id)} />
                            <ListItemText primary={challengeData.name}/>
                        </MenuItem>
                    ))
                }
            </Select>
        </FormControl>
    );
}


export default MultipleSelection;