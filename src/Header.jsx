import { AppBar, Toolbar, Typography } from '@material-ui/core'
import React from 'react'

const Header = () => {
    return (
        <AppBar position=" static" >
            <Toolbar>
            <Typography>
                This is our header
            </Typography>
            </Toolbar>
        </AppBar>
    )
}
 
export default Header
