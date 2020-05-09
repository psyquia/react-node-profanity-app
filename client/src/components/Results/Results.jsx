import React from 'react';
import { List, ListItem, Paper, Grid, ListItemText, Typography, CircularProgress } from '@material-ui/core';
import { ReportButton, BadWordResult } from '../../components';
import useStyles from './Results.style';

const Results = ({ data, loading, handle, onReport }) => {
    const classes = useStyles();

    const tweetsDiv =
        data.map((word, i) => (
            <BadWordResult key={i} onReport={onReport} handle={handle} data={word} />
        ));

    return (
        <Paper className={classes.root}>
            {loading && (
                <CircularProgress className={classes.loading} />
            )}
            {data[0] && !loading && (
                <Grid className={classes.gridC} container justify="center">
                    <List className={classes.lists}>
                        {tweetsDiv}
                    </List>
                </Grid>
            )
            }
        </Paper >
    )
}

export default Results;
