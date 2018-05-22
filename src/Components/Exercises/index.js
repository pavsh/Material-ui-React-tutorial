import React,{Fragment} from "react";
import { Typography,Paper,Grid } from "material-ui";
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
const styles = {
  Papper: { padding: 20, marginTop: 10, marginBottom: 10, height: 500, overflowY: 'auto'}
}

export default props => (

  <Grid container>
    <Grid item xs>
      <Paper style={styles.Papper}>
        {props.exercises.map(([group,exercises])=>
        !props.category || props.category===group
            ? <Fragment key = {group}>
              <Typography
                variant="headline"
                style={{ textTransform: "capitalize" }}
              >
                {group}
              </Typography>

              <List component="ul">
                {exercises.map(({ id,title }) =>
                  <ListItem 
                    key = {id}
                    button
                    onClick={() => props.onSelect(id)}
                    >
                    <ListItemText 
                      primary={title}
                    />
                  </ListItem>
                )}


              </List>
            </Fragment>
        :null
          
        )}
      </Paper>
    </Grid>
    <Grid item xs>
      <Paper style={styles.Papper}>
       <Typography
          variant="display1"
          
       >
       {props.exercise.title}
       </Typography>
       <Typography
          variant="subheading"
          style={{ marginTop: 20}}
       >
          {props.exercise.description}       </Typography>
      </Paper>
     
    </Grid>
  </Grid>
);
