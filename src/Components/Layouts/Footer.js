import React from "react";
import {Tabs,Paper} from "material-ui"
import {Tab} from "material-ui/Tabs"
export default ({muscles,category,onSelect}) => {
  const index = category
  ? muscles.findIndex(group=>group===category) +1
  :0
  
  return (
    <Paper >
      <Tabs
        value={index}
        onChange = {(e,index)=>
          onSelect(index===0 ? '':muscles[index-1])
        }
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <Tab label="All" />
        {muscles.map(group =>
          <Tab 
            key={group}
            label={group}
          />
        )}

      </Tabs>
    </Paper>
  )
}
 

