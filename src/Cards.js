import { Grid, Typography} from '@material-ui/core';
import OpportunityCard from './components/OpportunityCard';
import {  useQuery } from '@apollo/client';
import { Fragment, useEffect } from 'react';

import ALL_PROJECTS from './queries/ALL_PROJECTS.js';
import useGetPageBottom from './hooks/getPageBottom.js';


const variables = {
  "filter": {
    "AND": [
      {
        "isActive": true,
        "isArchived": false,
        "isPrivate": false,
        "isVerified": true
      },
      {
        "status_not": "Expired"
      },
    ]
  },
  "first": 12,
  "orderBy": "customCreatedAt_DESC",
  "skip": 0
};


//Controls cards and queries (allProjects) about cards.
function Cards(props) {
  const {data, loading, error, fetchMore, refetch} = useQuery(ALL_PROJECTS, {variables: variables});
  const atBottom = useGetPageBottom();
  

  // fetching more to load more card at the bottom of page
  useEffect(()=>{
    console.log("fetchMore");
    if(atBottom){
      fetchMore({variables:{"skip":data.allProjects.length}});
    }
  }, [atBottom]);


  // refetching if user changes the search filter
  useEffect(()=>{
    console.log("refetch");
    let vars = {
      "filter": {
        "AND": [
          {
            "isActive": true,
            "isArchived": false,
            "isPrivate": false,
            "isVerified": true
          },
          {
            "status_not": "Expired"
          },
          ...props.filters
        ]
      },
      "first": 12,
      "orderBy": "customCreatedAt_DESC",
      "skip": 0
    };
    refetch(vars);

  }, [props.filters]);

  console.log("Cards called");
  

  //control the till the requested data comes.
  if(loading) return <Typography variant="body2">loading...</Typography>;
  if (error) return <Typography varinat="body2">Ups a problem occured</Typography>;

  return (
    <Fragment>
      <Grid container spacing={4}>
        {
          data.allProjects.map((cardData, index)=>(
            <Grid key={cardData.id} item xs={12} sm={6} md={4}>
              <OpportunityCard data={cardData}/>
            </Grid>
          ))
        }
        
      </Grid>
      {
        (data.projectCount.count > data.allProjects.length)?
        "":
        <Typography variant="body2" style={{marginTop:"30px"}}>no more results</Typography>
      }
    </Fragment> 
  );
}


export default Cards;
