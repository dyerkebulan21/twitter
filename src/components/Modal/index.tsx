import React from 'react'
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';


interface ModalProps {
    children: React.ReactNode;
    title?: string;
    onClose: () => void;
    visible?: boolean
}


export const Modal: React.FC<ModalProps> = ({title, children, visible = true, onClose}:ModalProps ):React.ReactElement | null => {

    if(!visible) return null
 
    return (
        <Dialog open={visible} onClose ={onClose} aria-labelledby = "form-control">
            <DialogTitle id="form-dialog-title">
                <IconButton onClick={onClose} color="secondary" aria-label="iconbutton">
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
