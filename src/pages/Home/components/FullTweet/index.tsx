import {
  Avatar,
  CircularProgress,
  Grid,
  IconButton,
  Paper,
  Typography,
} from "@material-ui/core";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import Comment from "@material-ui/icons/ChatBubble";
import RepeatIcon from "@material-ui/icons/Repeat";
import Like from "@material-ui/icons/FavoriteBorder";
import ShareIcon from "@material-ui/icons/Reply";

import {
  fetchTweetData,
  setTweet,
} from "../../../../store/ducks/tweet/actionCreators";
import {
  selectedTweetData,
  selectIsTweetLoading,
} from "../../../../store/ducks/tweet/selectors";

import { useHomeStyles } from "../../theme";
import classNames from "classnames";

export const FullTweet: React.FC = (): React.ReactElement | null => {
  const dispatch = useDispatch();
  const classes = useHomeStyles();
  const params: { id: string } = useParams();
  const id = params.id;
  const tweetData = useSelector(selectedTweetData);
  const isTweetLoading = useSelector(selectIsTweetLoading);
  React.useEffect(() => {
    if (id) {
      dispatch(fetchTweetData(id));
    }
    return () => {
      dispatch(setTweet(undefined));
    };
  }, [dispatch]);

  if (isTweetLoading) {
    return (
      <div style={{ textAlign: "center", marginTop: 30 }}>
        <CircularProgress color="primary" />
      </div>
    );
  }
  console.log(tweetData);
  if (typeof tweetData !== "undefined") {
    return (
      <Paper className={classes.fullTweet}>
        <div className={classNames(classes.tweetsHeaderUser)}>
            <Avatar alt="Remy Sharp" src={tweetData.user.avatarUrl} />
            <Typography>
            <b>{tweetData.user.fullname}</b>
            <div>
            <span className={classes.tweetUserName}>
              @{tweetData.user.username}
            </span>
         
            &nbsp;
            <span className={classes.tweetUserName}>·</span>&nbsp;
            <span className={classes.tweetUserName}>1 час</span>&nbsp;
            </div>
            </Typography>
            </div>
            <Typography className={classes.fullTweetText} gutterBottom>
              {tweetData.text}
            </Typography>
          
              <div className={classes.tweetFooter}>
                <div>
                  <IconButton>
                    <Comment style={{ fontSize: 20 }} />
                  </IconButton>
                  <span>1</span>
                </div>
                <div>
                  <IconButton>
                    <RepeatIcon style={{ fontSize: 20 }} />
                  </IconButton>
                  <span>1</span>
                </div>
                <div>
                  <IconButton>
                    <Like style={{ fontSize: 20 }} />
                  </IconButton>
                  <span>1</span>
                </div>
                <div>
                  <IconButton>
                    <ShareIcon style={{ fontSize: 20 }} />
                  </IconButton>
                  <span>1</span>
                </div>
              </div>
      
     
      </Paper>
    );
  }

  return null;
};
