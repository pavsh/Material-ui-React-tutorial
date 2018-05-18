import React from "react";
import { Grid } from "material-ui";
import LeftPane from "./LeftPane"
import RightPane from "./RightPane"
const styles = {
 Papper: {padding: 20, marginTop: 10, marginBottom: 10}
}

export default props => (

  <Grid container>
    <Grid item xs>
      <LeftPane styles={styles}>
      </LeftPane>
    </Grid>
    <Grid item xs>
      <RightPane styles={styles}>
      </RightPane>
    </Grid>
  </Grid>
);
