import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
    container: {
        height: "100vh",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    modalPaper: {
        width: "95vw",
        maxWidth: "100% !important"
    }
}));

export default useStyles;
