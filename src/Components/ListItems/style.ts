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
    }
}));

export default useStyles;
