import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    listWrapper: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap"
    },
    cardsWrapper: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around"
    },
    loading: {
        fontWeight: "bold",
        fontSize: 18,
        marginTop: 10
    }
}));

export default useStyles;
