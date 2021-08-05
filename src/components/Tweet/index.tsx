import {
  Avatar,
  Grid,
  IconButton,
  Paper,
  Typography,
  Menu,
  MenuItem,
} from "@material-ui/core";
import classNames from "classnames";
import React from "react";
import { useHomeStyles } from "../../pages/Home/theme";

import { Link, useHistory } from "react-router-dom";

import Comment from "@material-ui/icons/ChatBubble";
import RepeatIcon from "@material-ui/icons/Repeat";
import Like from "@material-ui/icons/FavoriteBorder";
import ShareIcon from "@material-ui/icons/Reply";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { formatDate } from "../../utils/formatDate";

interface TweetProps {
  classes: ReturnType<typeof useHomeStyles>;
  text: string;
  _id: number;
  createdAt: string;
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
  createdAt,
}): React.ReactElement => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const history = useHistory();

  const handleClickTweet = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    history.push(`/home/tweet/${_id}`);
  };

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation();
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <a
      onClick={handleClickTweet}
      href={`/home/tweet/${_id}`}
      className={classes.tweetWrapper}
    >
      <Paper className={classNames(classes.tweetsHeader, classes.tweet)}>
        <Grid container spacing={3}>
          <Grid item xs={1}>
            <Avatar alt="Remy Sharp" src={user.avatarUrl} />
          </Grid>
          <Grid item xs={11}>
            <div className={classes.tweetContent}>
              <Typography className={classes.tweetHeader}>
                <div>
                  <b>{user.fullname}</b>{" "}
                  <span className={classes.tweetUserName}>
                    @{user.username}
                  </span>
                  &nbsp;
                  <span className={classes.tweetUserName}>·</span>&nbsp;
                  <span className={classes.tweetUserName}>
                    {formatDate(new Date(createdAt))}
                  </span>
                </div>
                <div className={classes.tweetPopupMenu}>
                  <IconButton
                    aria-label="more"
                    aria-controls="long-menu"
                    aria-haspopup="true"
                    onClick={handleClick}
                  >
                    <MoreVertIcon />
                  </IconButton>
                  <Menu
                    id="long-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={open}
                    onClose={handleClose}
                  >
                    <MenuItem onClick={handleClose}>Удалить</MenuItem>
                  </Menu>
                </div>
              </Typography>
            </div>
            &nbsp;
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
    </a>
  );
};
