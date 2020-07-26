import React, { FC } from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import useStyles from "./style";
import { IProp } from "./Interface";
import { EStatus } from "../../DB/Interface";


const CardItem: FC<IProp> = ({ item }: IProp) => {
    const classes = useStyles();

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