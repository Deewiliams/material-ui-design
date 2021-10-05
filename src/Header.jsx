import { AppBar, Toolbar, Typography } from '@material-ui/core'
import React from 'react'
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';
import { makeStyles } from '@material-ui/core';

const  useStyles = makeStyles({
    TypographyStlyes: {
        flex: 1
    }
})
const Header = () => {
    const classes = useStyles(); 
    return (
        <AppBar position=" static" >
            <Toolbar>
            <Typography className={classes.TypographyStlyes} >
                Material-Ui
            </Typography>
            <AccountCircleRoundedIcon />
            </Toolbar>
        </AppBar>
    )
}
 
export default Header
