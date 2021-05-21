import React from 'react'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { IconButton } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

export const BackButton:React.FC = ():React.ReactElement => {
    const history = useHistory()
    const handleClickButton = () => {
        history.goBack()
    }
    return (
        <div style={{marginRight: 20}}>
            <IconButton color="primary" onClick={handleClickButton}>
                <ArrowBackIcon/>
            </IconButton>
        </div>
    )
}
