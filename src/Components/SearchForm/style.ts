import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        width: 200,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
    formWrapper: {
        display: "flex",
        alignItems: "center",
        flexWrap: "wrap",
        justifyContent: "center"
    }
}));

export default useStyles;
