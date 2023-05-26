import React, { useState } from 'react'
import {Card,
CardActionArea,
CardMedia,
CardContent,
Typography,
CardActions,
Button} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import cup from '../image/cup-1834296_960_720.jpg'  
function ProjectCard(props) {

    const useStyles = makeStyles({
        root: {
          maxWidth: 300,
        },
        media: {
          height: 100,
        },
      });
      const classes = useStyles();      

  return (
    <Card className={classes.root}>
    <CardActionArea>
      {/* <CardMedia
        className={classes.media}
        image={cup}
        title="Contemplative Reptile"
      /> */}
      <img src={cup} className={classes.media}>
      </img>
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {props.projectName}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
         {props.projectDecription}
        </Typography>
      </CardContent>
    </CardActionArea>
    <CardActions>
      <Button size="small" color="primary">
        Share
      {/* <Link to="/" target="_blank">Share</Link> */}
      </Button>
      <Button size="small" color="primary">
        Visit live
       {/* <Link to={props.projectUrl} target="_blank">Go to page</Link> */}
      </Button>
    </CardActions>
  </Card>
  )
}

export default ProjectCard