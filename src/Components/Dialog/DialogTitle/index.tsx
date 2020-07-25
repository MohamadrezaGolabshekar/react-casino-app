import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import Typography from '@material-ui/core/Typography';

const styles = (theme: any) => ({
    root: {
        margin: 0,
        padding: theme.spacing(2),
    },
    closeButton: {
        position: 'absolute',
        right: theme.spacing(1),
        top: theme.spacing(1),
        color: theme.palette.grey[500],
    },
    helpButton: {
        position: 'absolute',
        right: theme.spacing(9),
        top: theme.spacing(2),
        color: theme.palette.grey[500],
    },
});
const DialogTitle: any = withStyles(styles as any)((props) => {
    const { children, classes, onClose, ...other }: any = props;
    const [open, setOpen] = useState(false);
    const handleTooltipClose = () => {
        setOpen(false);
    };

    const handleTooltipOpen = () => {
        setOpen(true);
    };
    return (
        <MuiDialogTitle disableTypography className={classes.root} {...other}>
            <Typography variant="h6" style={{ textAlign: "center" }}>{children}</Typography>
            {onClose ? (
                <>
                    <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
                        <CloseIcon />
                    </IconButton>
                    <ClickAwayListener onClickAway={handleTooltipClose} >
                        <Tooltip
                            className={classes.helpButton}
                            PopperProps={{
                                disablePortal: true,
                            }}
                            onClose={handleTooltipClose}
                            open={open}
                            disableFocusListener
                            disableHoverListener
                            disableTouchListener
                            title="This is help text :)"
                        >
                            <Button onClick={handleTooltipOpen}><HelpOutlineIcon /></Button>
                        </Tooltip>
                    </ClickAwayListener>
                </>

            ) : null}
        </MuiDialogTitle>
    );
});

export default DialogTitle;
