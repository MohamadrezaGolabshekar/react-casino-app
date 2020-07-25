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
    },
    loading: {
        position: "absolute",
        top: 16
    },
    button: {
        width: 250,
        color: "white",
        border: "none",
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        height: 60,
    }
}));

export default useStyles;
