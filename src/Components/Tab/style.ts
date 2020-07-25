import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    tabWrapper: {
        display: "flex",
        justifyContent: "center"
    },
    disabled: {
        backgroundColor: theme.palette.primary.main,
        color: `${theme.palette.primary.light} !important`
    },
    buttonGroup: {
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap"
    }
}));

export default useStyles;
