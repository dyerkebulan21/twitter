import { Avatar, Grid, IconButton, Paper, Typography } from "@material-ui/core";
import classNames from "classnames";
import React from "react";
import { useHomeStyles } from "../../pages/Home/theme";

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
    
    </Link>
  );
};
