import React from "react";
import {Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle} from "@material-ui/core";

interface ErrorDialogProps {
    text:string;
    title:string;
    open : boolean;
    onClose:()=>void;
}
const ErrorDialog = (props:ErrorDialogProps) =>{
    const {text,open,onClose,title} = props;
    return (
        <Dialog
            open={open}
            onClose={onClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    {text}
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose} color="primary">
                    Ok
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default ErrorDialog;
