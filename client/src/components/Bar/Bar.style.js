import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        width: "80%",
        [theme.breakpoints.down('xs')]: {
            width: '90%'
        },
    },
    title: {
        flexGrow: 1,
        fontFamily: "monospace",
        fontSize: "4ch",
        [theme.breakpoints.down('xs')]: {
            fontSize: '3ch',
        },
    },
    appbar: {
        alignItems: "center"
    }
}));