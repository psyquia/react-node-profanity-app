import React, { useState, useEffect } from 'react';
import { ReportButton } from '../../components';
import { ListItem, Paper, ListItemText, Typography } from '@material-ui/core';
import useStyles from './BadWordResult.style';

const BadWordResult = ({ onReport, data, handle }) => {
    const [state, setState] = useState(true);

    useEffect(() => {
        onReport(data[0]);
    }, [state])

    const classes = useStyles();

    return (state &&
        <ListItem alignItems="flex-start" >
            <ListItemText
                primary={
                    <React.Fragment>
                        <strong>{data[0]}</strong>
                        <ReportButton onReport={setState} word={data[0]} className={classes.rButton} />
                    </React.Fragment>}
                secondary={
                    <React.Fragment>
                        {data[1].map((tweet, i) => (
                            <React.Fragment key={i}>
                                <Typography
                                    component="span"
                                    variant="body2"
                                    className={classes.inline}
                                    color="textPrimary"
                                >
                                    @{handle} —
                                    </Typography>
                                <Typography component='span'>
                                    {tweet + '\n'}
                                </Typography>
                            </React.Fragment>
                        ))}
                    </React.Fragment>
                }
            />
        </ListItem>
    );
}

export default BadWordResult;