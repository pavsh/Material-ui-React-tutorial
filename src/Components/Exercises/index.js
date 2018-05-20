import React,{Fragment} from "react";
import { Typography,Paper,Grid } from "material-ui";
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
const styles = {
 Papper: {padding: 20, marginTop: 10, marginBottom: 10}
}

export default props => (

  <Grid container>
    <Grid item xs>
      <Paper style={styles.Papper}>
        {props.exercises.map(([group,exercises])=>
        <Fragment>
        <Typography 
          variant="headline"
          style={{textTransform:"capitalize"}}
          >
          {group}
        </Typography>
      
        <List component="ul">
        {exercises.map(({title})=>
                <ListItem button>
                  <ListItemText primary={title} />
                </ListItem>
        )}
       
          
        </List>
          </Fragment>
        )}
      </Paper>
    </Grid>
    <Grid item xs>
      <Paper style={styles.Papper}>
        Right Pane
      </Paper>
     
    </Grid>
  </Grid>
);
