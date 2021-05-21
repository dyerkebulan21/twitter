import { Avatar, Grid, IconButton, Paper, Typography } from "@material-ui/core";
import classNames from "classnames";
import React from "react";
import { useHomeStyles } from "../../pages/Home/theme";
import Comment from "@material-ui/icons/ChatBubble";
import RepeatIcon from "@material-ui/icons/Repeat";
import Like from "@material-ui/icons/FavoriteBorder";
import ShareIcon from "@material-ui/icons/Reply";
import { Link } from "react-router-dom";
interface TweetProps {
  classes: ReturnType<typeof useHomeStyles>;
  text: string;
  _id: number,
  user: {
    username: string;
    fullname: string;
    avatarUrl: string;
  };
}

export const Tweet: React.FC<TweetProps> = ({
  user,
  text,
  _id,
  classes,
}): React.ReactElement => {
  return (
    <Link to={`/home/tweet/${_id}`} className={classes.tweetWrapper}>
    <Paper className={classNames(classes.tweetsHeader, classes.tweet)}>
      <Grid container spacing={3}>
        <Grid item xs={1}>
          <Avatar alt="Remy Sharp" src={user.avatarUrl} />
        </Grid>
        <Grid item xs={11}>
          <b>{user.fullname}</b>{" "}
          <span className={classes.tweetUserName}>@{user.username}</span>&nbsp;
          <span className={classes.tweetUserName}>·</span>&nbsp;
          <span className={classes.tweetUserName}>1 час</span>&nbsp;
          <Typography variant="body1" gutterBottom>
            {text}
          </Typography>
          <div>
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
          </div>
        </Grid>
      </Grid>
    </Paper>
    </Link>
  );
};
