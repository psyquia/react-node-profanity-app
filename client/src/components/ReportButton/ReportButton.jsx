import React, { useState } from "react";

import { Button, Typography } from '@material-ui/core';
import useStyles from './ReportButton.style';


const ReportButton = ({ word, onReport }) => {
    const classes = useStyles();
    const [state, setState] = useState(true);

    const text = (state) ? "Not an offensive word?" : "Your report has been sent.";

    return (
        <React.Fragment>
            <Button className={classes.myButton} size="small" color="secondary" onClick={() => onReport(false)}>
                <Typography className={classes.buttonText}>{text}</Typography>
            </Button>
        </React.Fragment>
    );
};

export default ReportButton;
