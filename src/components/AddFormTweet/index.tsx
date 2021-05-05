import React from 'react'

import { Avatar, Button, CircularProgress, IconButton, TextareaAutosize } from '@material-ui/core'
import classNames from 'classnames'
import Emoji from '@material-ui/icons/SentimentVerySatisfied';
import ImageOutlinedIcon from '@material-ui/icons/ImageOutlined';
import { useHomeStyles } from '../../pages/Home';

interface AddFormProps {
    classes: ReturnType<typeof useHomeStyles>
}

export const AddFormTweet:React.FC<AddFormProps> = ({classes}: AddFormProps):React.ReactElement => {

    return (
        <div className={classes.addForm}>
            <div className={classes.addFormBody}>
                <Avatar className={classes.tweetAvatar} src="https://pbs.twimg.com/profile_images/1256312479027802115/i5jciPxi_400x400.jpg"></Avatar>
                <TextareaAutosize className={classes.addFormTextarea} placeholder="Что происходит"></TextareaAutosize>
            </div>
            <div className={classes.addFormBottom}>
                <div className={classNames(classes.tweetFooter, classes.addFormBottomActions)}>
                    <IconButton color="primary">
                        <ImageOutlinedIcon style={{fontSize:28}}></ImageOutlinedIcon>
                    </IconButton>
                    <IconButton>
                        <Emoji style={{fontSize:28}}/>
                    </IconButton>
                </div>
                <div className={classes.addFormBottomRight}>
                    <span>280</span>
                    <div>
                        <CircularProgress style={{color: 'rgba(0,0,0,0.1)'}} variant="static" size="28" value={100} thickness={4}/>
                    </div>
                    <Button variant="contained" color="primary">
                        Твитнуть
                    </Button>
                </div>
            </div>
        </div>
    )
}
