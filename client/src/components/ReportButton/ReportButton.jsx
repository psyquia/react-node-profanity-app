import React, { useState } from "react";

import { Button, Typography } from '@material-ui/core';
import useStyles from './ReportButton.style';


const ReportButton = ({ word, onReport }) => {
    const classes = useStyles();

    return (
        <React.Fragment>
            <Button className={classes.myButton} size="small" color="secondary" onClick={() => onReport(false)}>
                <Typography className={classes.buttonText}>Not a risky word?</Typography>
            </Button>
        </React.Fragment>
    );
};

export default ReportButton;
