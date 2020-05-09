import React, { useState, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import { Card, Button, FormControl, Typography } from '@material-ui/core';
import useStyles from './HandleHolder.style';

const HandleHolder = ({ handleEnter, handleClick }) => {
    const [state, setState] = useState({
        input: ""
    });
    const classes = useStyles();

    const handleHandle = async (e) => {
        const tempHandle = e.target.value;

        setState({
            input: tempHandle,
        })
    }

    return (
        <React.Fragment>
            <FormControl fullWidth className={classes.margin} variant="outlined">
                <TextField
                    className={classes.handle}
                    id="filled-basic"
                    label="Enter your @"
                    variant="filled"
                    onChange={handleHandle}
                    onKeyPress={handleEnter(state.input)}
                />
            </FormControl>
            <Button variant="outlined" color="primary" onClick={handleClick(state.input)}>
                Start Digging
            </Button>
        </React.Fragment>
    );
}

export default HandleHolder;