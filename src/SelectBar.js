import { useQuery } from "@apollo/client";
import { makeStyles, AppBar, Container, Button, Grid } from "@material-ui/core";

import MultipleSelection from './components/MultipleSelection.js';
import FILTER_OPTIONS from "./queries/FILTER_OPTIONS.js";

const useStyles = makeStyles((theme)=>({
    appBar:{
        backgroundColor: "#ffffff",
        boxShadow: "none",
        borderBottom: "1px solid #EFF0F1",
        paddingTop: "16px",
        paddingBottom: "16px",
    },

    pageContainer:{
        paddingLeft: "16px",
        paddingRight: "16px",
        [theme.breakpoints.up("sm")]:{
          paddingLeft: "56px",
          paddingRight: "56px",
        }
    },

    BoldButtonText:{
        lineHeight: 1,
        fontWeight: 600,
        fontFamily: "Poppins-Regular",
        textTransform: "none",
        whiteSpace: "nowrap"
    }, 

    itemsContainer:{
        flexWrap: "nowrap",
        overflowX: "auto",
        [theme.breakpoints.up('sm')]:{
            flexWrap: "wrap",
        }
    }

}));



/**
 * This is an app bar. It stays on the top of the page. It contains input fields for card filters.
 * @param {*} props 
 * @returns 
 */
function SelectBar(props){
    const classes = useStyles(props);
    const {error, data} = useQuery(FILTER_OPTIONS);

    function handleChange(event){
        props.setSelectedOpportunityTypes(event.target.value)
    }

    console.log("SelectBar is called");

    if(error){
        return "ups an error occured..."
    }


    return (
        <AppBar className={classes.appBar}>
            <Container className={classes.pageContainer} maxWidth="lg">
                <Grid container className={classes.itemsContainer} spacing={1} alignItems="center">
                    <Grid item>
                        <MultipleSelection
                            value={props.selectedOpportunityTypes}
                            onChange={handleChange}
                            label={"Type of Opportunities"}
                            data={data? data.allTypeOfChallenges: []}
                        />
                    </Grid>
                    <Grid item>
                        <MultipleSelection 
                            value={props.selectedSkills}
                            onChange={(event)=> props.setSelectedSkills(event.target.value)}
                            label={"Skills"}
                            data={data? data.allSkills: []}
                        />
                    </Grid>
                    <Grid item>
                        <MultipleSelection
                            value={props.selectedSkillLevels}
                            onChange={(event)=> props.setSelectedSkillLevels(event.target.value)}
                            label={"Skill Level"}
                            data={data? data.allSkillLevels: []}
                        />
                    </Grid>
                    <Grid item>
                        <MultipleSelection
                            value={props.selectedCategories}
                            onChange={(event)=> props.setSelectedCategories(event.target.value)}
                            label={"Causes"}
                            data={data? data.allCategories: []}
                        />
                    </Grid>
                    <Grid item>
                        <MultipleSelection
                            value={props.selectedStatuses}
                            onChange={(event)=> props.setSelectedStatuses(event.target.value)}
                            label={"Status"}
                            data={[
                                {name:"Open", id:"Open"},
                                {name:"In Progress", id:"InProgress"},
                                {name:"Completed", id:"Completed"}
                            ]}
                        />
                    </Grid>
                    <Grid item>
                        <MultipleSelection
                            value={props.selectedSupportTime}
                            onChange={(event)=> props.setSelectedSupportTime(event.target.value)}
                            label={"Commitment"}
                            data={[
                                {name:"0-1 hrs", id:0},
                                {name:"1-4 hrs", id:1},
                                {name:"4-8 hrs", id:2},
                                {name:"8-16 hrs", id:3},
                                {name:"16-40 hrs", id:4},
                                {name:"40+ hrs", id:5}
                            ]}
                        />
                    </Grid>
                    <Grid item style={{flex:"1"}}></Grid>
                    <Grid item>
                        {
                        (props.selectedOpportunityTypes.length || props.selectedSkills.length || props.selectedSkillLevels.length || props.selectedCategories.length || props.selectedStatuses.length || props.selectedSupportTime.length)?
                        <Button classes={{label:classes.BoldButtonText}} onClick={props.clearFilters}>Clear Filters</Button>:
                        ""
                        }
                    </Grid>
                </Grid>
            </Container>
        </AppBar>
    );
}



export default SelectBar;