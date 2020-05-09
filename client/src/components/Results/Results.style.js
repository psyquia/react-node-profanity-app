import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    lists: {
        width: '50%',
        [theme.breakpoints.down('xs')]: {
            width: '100%'
        },
        maxWidth: '90ch',
        textAlign: "center",
        itemAlign: "center",
        backgroundColor: 'rgba(240,240,240,0.8)',
        overflow: 'auto',
        justifyContent: 'center'
    },
    loading: {
        position: 'absolute',
        marginTop: "12%",
        left: '49%',
        [theme.breakpoints.down('lg')]: {
            left: '48%',
        },
        [theme.breakpoints.down('xs')]: {
            left: '45%',
            marginTop: '50%'
        },
    },
    root: {
        textAlign: 'center',
        overflow: 'auto',
        width: "70%",
        height: "60ch",
        [theme.breakpoints.down('xs')]: {
            width: '90%',
            height: '49ch',
        },
        display: "flex",
        alignItems: "stretch",
    },
}));