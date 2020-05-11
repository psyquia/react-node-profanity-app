import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton } from "@material-ui/core";
import useStyles from './Bar.style.js';

const Bar = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static" className={classes.appbar}>
                <Toolbar>
                    <Typography variant="h4" className={classes.title}>
                        Twitter Profanity Search
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
}



export default Bar;