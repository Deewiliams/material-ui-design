import * as React from "react";
import {
  CardHeader,
  Avatar
} from "@material-ui/core";
import {red} from 'material-ui-colors'
const Profile = () => {
    return (
        <div>
            <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        // action={
        //   <IconButton aria-label="settings">
        //     <MoreVertIcon />
        //   </IconButton>
        // }
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      />
        </div>
    )
}

export default Profile
