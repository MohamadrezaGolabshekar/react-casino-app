import React, { FC } from "react";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import useStyles from "./style";
import { IProp } from "./Interface";
import { EStatus } from "../../DB/Interface";


const CardItem: FC<IProp> = ({ item }: IProp) => {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Card className={classes.root}>
            <CardHeader
                avatar={
                    <span
                        className={classes.status}
                        style={{
                            backgroundColor: item.status === EStatus.ACTIVE ? "green" : "#dc2d2d"
                        }}></span>
                }
                title={item.provider}
            />
            <CardMedia
                className={classes.media}
                image={item.thumbnail}
                title={item.title}
            />
            <CardContent>
                <Typography variant="body1" color="textPrimary" component="h4">{item.title}</Typography>
                <Typography variant="body2" color="textSecondary" component="h4">{item.category}</Typography>
            </CardContent>
           
        </Card>
    );
}

export default React.memo(CardItem);