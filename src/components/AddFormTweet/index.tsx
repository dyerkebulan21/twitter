import React from 'react'

import { Avatar, Button, CircularProgress, IconButton, TextareaAutosize } from '@material-ui/core'
import classNames from 'classnames'
import Emoji from '@material-ui/icons/SentimentVerySatisfied';
import ImageOutlinedIcon from '@material-ui/icons/ImageOutlined';
import { useHomeStyles } from '../../pages/Home';

interface AddFormProps {
    classes: ReturnType<typeof useHomeStyles>
}
const MAX_LENGTH = 280
export const AddFormTweet:React.FC<AddFormProps> = ({classes}: AddFormProps):React.ReactElement => {
    const[text,setText] = React.useState<string>('')
    const textLimirPercent = Math.round(text.length / 280 * 100)
    const handleChangeText = (e: React.FormEvent<HTMLTextAreaElement>) => {
        if(e.currentTarget) {
            setText(e.currentTarget.value)
        }
    }
    const countText = MAX_LENGTH - text.length
    return (
        <div className={classes.addForm}>
            <div className={classes.addFormBody}>
                <Avatar className={classes.tweetAvatar} src="https://pbs.twimg.com/profile_images/1256312479027802115/i5jciPxi_400x400.jpg"></Avatar>
                <TextareaAutosize onChange={handleChangeText} className={classes.addFormTextarea} placeholder="Что происходит" value={text}></TextareaAutosize>
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
                    {text &&
                        <>
                        <span >{countText}</span>
                    <div className={classes.addFormCircleProgress}>
                        <CircularProgress style={text.length >= MAX_LENGTH ? {color: "red"} : undefined} variant="static" size={20} value={text.length >= MAX_LENGTH ? 100 : textLimirPercent} thickness={5}/>
                        <CircularProgress style={{color: 'rgba(0,0,0,0.1)'}} variant="static" size={20} value={100} thickness={5}/>
                    </div>
                        </>
                    }
                    <Button disabled={text.length >= MAX_LENGTH} variant="contained" color="primary">
                        Твитнуть
                    </Button>
                </div>
            </div>
        </div>
    )
}
