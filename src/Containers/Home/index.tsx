import React from 'react';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from "../../Components/Dialog/DialogTitle";
import Tab from "../../Components/Tab";
import SearchForm from "../../Components/SearchForm";
import ListItems from "../../Components/ListItems";
import { useAppContext } from "../../Context/AppContext";
import useStyles from "./style";

export default function AlertDialog() {
    const [open, setOpen] = React.useState(false);
    const [state, dispatch]: any = useAppContext();
    const classes = useStyles();
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div className={classes.container}>
            <Button variant="outlined" color="primary" onClick={handleClickOpen}>
                casino games
            </Button>
            <Dialog aria-labelledby="customized-dialog-title" open={open} classes={{paper: classes.modalPaper}}>
                <DialogTitle onClose={handleClose}>
                    CASINO APP
                </DialogTitle>
                <DialogContent dividers>
                    <Tab selectedTab={state.tab} dispatch={dispatch}/>
                    <br/>
                    <SearchForm />
                    <br/>
                    <ListItems />
                </DialogContent>
            </Dialog>
        </div>
    );
}