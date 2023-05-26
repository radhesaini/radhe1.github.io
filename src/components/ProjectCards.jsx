import React from 'react'
import {
Card,
CardActionArea,
CardMedia,
Typography,
CardActions,
Button,
CardContent
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import './ProjectCards.css'

const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
  });

export default function ProjectCards(props) {
    const classes = useStyles();
  // const { homePageImg,
  //   name,
  //   duratinStart,
  //   duratinEnd,
  //   description,
  //   Technology_and_skills,
  // } = props;
    return (
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              component="img"
              alt="Contemplative Reptile"
              height="140"
              image={props.homePageImg}
              title="Contemplative Reptile"
            />
            
            <CardContent>
            <Typography gutterBottom variant="p" component="p">
            {props.duratinStart} - {props.duratinEnd}
              </Typography>
              <Typography gutterBottom variant="h4" component="h4">
                {props.name}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {props.description}
              </Typography>
              
              <Typography variant="h7" color="textSecondary" component="h7">
              Technology And Skills
                </Typography>
              <Typography variant="h6" color="textSecondary" component="h6">
              Technology And Skills: {props.Technology_and_skills}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions className='bottom-btn'>
            <Button size="small" color="primary">
              Share
            </Button>
            <Button size="small" color="primary">
              Learn More
            </Button>
          </CardActions>
        </Card>
      );
    }