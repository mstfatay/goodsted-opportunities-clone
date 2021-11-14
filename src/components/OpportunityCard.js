import { Grid, Typography, Box, IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import {Link} from 'react-router-dom'
import _ from 'lodash';

import ProcessText from './ProcessText.js';
import ChipButton from './ChipButton.js';
import TypeChip from './TypeChip.js';


const useStyles = makeStyles(theme=>({
    card:{
        borderRadius: theme.shape.borderRadius * 4,
        overflow: "hidden",
        boxShadow: "rgb(214 215 216) 0px 2px 2px 0px",
    },

    cardImageSize:{
        height: "215px",
        width: "100%",
        objectFit: "cover",
    },

    cardTitle:{
        fontSize: "18px",
        fontWeight: 600,
        color: "rgb(28, 44, 46)",
        WebkitBoxOrient: "vertical",
        WebkitLineClamp: 2,
        display: "-webkit-box",
        overflow: "hidden",
        textOverflow: "ellipsis",
    },

    leadIcon: {
        height: "36px",
        width: "36px",
    },

    leadTitle: {
        fontWeight: "600",
    },

    cardContent:{
        padding: "16px",
    },

    hearthIconButton:{
        backgroundColor: "#ffffff",
        height: "42px",
        width: "42px",
    },

    cardInfoSizing: {
        marginTop: "8px",
        color: "rgb(114, 115, 116)",
    },
    cardChipsSizing: {
        marginTop: "14px",
    },
    cardLeadSizing:{
        padding: "18px 16px 22px 16px",
    }, 
}));


function OpportunityCard(props){
    const classes = useStyles(props);

    
    const opportunityType = _.get(props.data, 'typeOfChallenge.name', '')
    const title = _.get(props.data, 'name', 'not found')
    const imageSrc = _.get(props.data, 'image', '')
    const processType = _.get(props.data, 'status', '')
    
    let skills = [
        ..._.get(props.data, 'skills', []).map((skill)=>_.get(skill, 'name', "not found")), 
        ..._.get(props.data, 'requests', []).map((skill)=>_.get(skill, 'name', "not found"))
    ];
    const leadAvatarSrc = _.get(props.data, 'community.profileImage', '');
    const leadName = _.get(props.data, 'community.name', '');


    //ready featuresText
    let featuresList = [];
    const typeOfChallenge = props.data.typeOfChallenge.mainType.name;
    featuresList.push(typeOfChallenge);

    let address = props.data.isDateFlexible ? "Flexible" : props.data.address;
    address = props.data.isLocationRemote ? "Remote" : address;
    featuresList.push(address);

    const time = Number(props.data.expectedTimeForSupport);
    if(time !== 0){
        const timeText =  Number.parseInt(time/60) + " hrs " + (time%60) + " mins";
        featuresList.push(timeText);
    }
    const featuresText = featuresList.join(" | ") + " | ";


    //ready skills 
    if(skills.length>2){
        let len = skills.length;
        skills = skills.slice(0,2);
        skills.push("+" + String(len-2));
    }


    return (
        <Link to={"/opportunity/"+ props.data.id} >
            <Box position="relative">
                <Box position="absolute" top="16px" left="16px">
                    <TypeChip type={opportunityType}/>
                </Box>

                <Box position="absolute" top="12px" right="16px">
                    <IconButton className={classes.hearthIconButton} variant="contained" color="primary">
                        <FavoriteBorderIcon/>
                    </IconButton>
                </Box>

                <Grid className={classes.card} >
                    {
                        imageSrc?
                        <img className={classes.cardImageSize} src={imageSrc} alt=""/>:
                        <Box className={classes.cardImageSize} style={{backgroundColor:"#9f9f9f"}}></Box>
                    }
                    
        
                    <Box padding="16px 16px 0px 16px" minHeight="150px">
                        <Typography className={classes.cardTitle} variant="body2">{title}</Typography>
                        <Typography className={classes.cardInfoSizing} variant="body2">{featuresText}<ProcessText type={processType}/> </Typography>
                        
                        <Grid container className={classes.cardChipsSizing} direction="row" spacing={1}>
                            {skills.map((name, index)=>(
                                <Grid item key={index}>
                                    <ChipButton label={name} height="36px"/>
                                </Grid>
                            ))}
                        </Grid>
                    </Box>

                    <Box padding="18px 16px 22px 16px">
                        <Grid container direction="row" alignItems="center" spacing={1}>
                            <Grid item>
                                <img className={classes.leadIcon} src={leadAvatarSrc} alt=""/>
                            </Grid>
                            <Grid item>
                                <Typography className={classes.leadTitle} variant="body2" color="secondary">
                                    {leadName}
                                </Typography>
                            </Grid>
                        </Grid>
                    </Box>
                </Grid>
            </Box>
        </Link>
    )
}


export default OpportunityCard;