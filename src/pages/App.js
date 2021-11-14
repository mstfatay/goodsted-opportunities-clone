import {Container, Typography} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

import SelectBar from '../SelectBar.js';
import Cards from '../Cards.js';
import { useState } from 'react';

const useStyles = makeStyles(theme => ({
  pageContainer:{
    paddingLeft: "16px",
    paddingRight: "16px",
    [theme.breakpoints.up("sm")]:{
      paddingLeft: "56px",
      paddingRight: "56px",
    }
  },

  pageHeader:{
    marginTop: "24px",
    marginBottom: "24px",
    fontSize: "20px",
    [theme.breakpoints.up('sm')]:{
      marginTop: "32px",
      marginBottom: "32px",
      fontSize: "30px",
    },
  },

  app:{
    backgroundColor: "#F3F4F7",
  }

}));



function App(props) {
  const classes = useStyles(props);
  const [selectedOpportunityTypes, setSelectedOpportunityTypes] = useState([]);
  const [selectedSkillLevels, setSelectedSkillLevels] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedStatuses, setSelectedStatuses] = useState([]);
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [selectedSupportTime, setSelectedSupportTime] = useState([]);


  function clearFilters(){
    setSelectedOpportunityTypes([]);
    setSelectedSkillLevels([]);
    setSelectedCategories([]);
    setSelectedStatuses([]);
    setSelectedSkills([]);
    setSelectedSupportTime([]);
  }


  // create filters object. It is added to options of allProjects query.
  let filters = [];
  if(selectedOpportunityTypes.length !== 0){
    filters.push({typeOfChallenge: {id_in: selectedOpportunityTypes}});
  }
  if(selectedSkillLevels.length !== 0){
    filters.push({skillLevels_some: {id_in: selectedSkillLevels}});
  }
  if(selectedCategories.length !== 0){
    filters.push({categories_some: {id_in: selectedCategories}});
  }
  if(selectedStatuses.length !== 0){
    filters.push({status_in: selectedStatuses});
  }
  if(selectedSkills.length !== 0){
    filters.push({
      requests_some:{
        OR:[
          {name_in: selectedSkills},
          {skills_some: {name_in: selectedSkills}}
        ]
      }
    });
  }
  if(selectedSupportTime.lenght !== 0){
    const timeValues = [1, 60, 240, 480, 960, 2400, 999999];
    filters.push({
      OR: selectedSupportTime.map((id)=>({
        expectedTimeForSupport_gt: timeValues[id]-1,
        expectedTimeForSupport_lt: timeValues[id+1],
      }))
    })
  }

 


  console.log('App called');


  return (
    <div className={classes.app}>
      <SelectBar 
        selectedOpportunityTypes={selectedOpportunityTypes} 
        setSelectedOpportunityTypes={setSelectedOpportunityTypes}
        selectedSkillLevels={selectedSkillLevels}
        setSelectedSkillLevels={setSelectedSkillLevels}
        selectedCategories={selectedCategories}
        setSelectedCategories={setSelectedCategories}
        selectedStatuses={selectedStatuses}
        setSelectedStatuses={setSelectedStatuses}
        selectedSkills={selectedSkills}
        setSelectedSkills={setSelectedSkills}
        selectedSupportTime={selectedSupportTime}
        setSelectedSupportTime={setSelectedSupportTime}
        clearFilters={()=>clearFilters()}
      />

      <Container className={classes.pageContainer} maxWidth="lg">
        <Typography className={classes.pageHeader} variant="h1">All Opportunities</Typography>
        <Cards filters={filters}/>
      </Container>
    </div>
  );
}

export default App;
