import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    margin: {
        margin: theme.spacing(2),
        alignItems: "center"
    },
    withoutLabel: {
        marginTop: theme.spacing(3),
    },
    handle: {
        width: '80%',
        maxWidth: "500px"
    },
    cards: {
        width: "60%",
        maxWidth: "900px",
        height: "40ch",
        marginTop: "18px",
        backgroundColor: "rgba(245,245,245,0.8)",
        [theme.breakpoints.down('lg')]: {
            width: '70%',
        },
        [theme.breakpoints.down('xs')]: {
            width: '80%',
        },
    },
}));