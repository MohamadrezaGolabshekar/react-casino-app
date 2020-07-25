import { makeStyles } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
    status: {
        display: "inline-block",
        width: 10,
        height: 10,
        borderRadius: "50px"
    },
    root: {
        width: 300,
        marginTop: theme.spacing(3)
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: red[500],
    },
}));

export default useStyles;
