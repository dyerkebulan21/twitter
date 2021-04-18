import React from 'react'
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';


interface ModalProps {
    children: React.ReactNode;
    title: string;
}


export const Modal: React.FC<ModalProps> = ({title, children}:ModalProps ):React.ReactElement => {
    const [open, setOpen] = React.useState(false)
    // const handleClickOpen = () => {
    //     setOpen(true)
    // }
    const handleClose = () => {
        setOpen(false);
    }
    return (
        <Dialog open={open} onClose ={handleClose} aria-labelledby = "form-control">
            <DialogTitle id="form-dialog-title">
                <IconButton onClick={handleClose} color="secondary" aria-label="iconbutton">
                    <CloseIcon color="secondary" style={{fontSize: 26}}/>
                </IconButton>
                {title}
            </DialogTitle>
            <DialogContent>
                {children}
            </DialogContent>
        </Dialog>
    )
}
