import { CircularProgress } from "@material-ui/core";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Tweet } from "../../../../components/Tweet";
import {
  fetchTweetData,
  setTweet,
} from "../../../../store/ducks/tweet/actionCreators";
import {
  selectedTweetData,
  selectIsTweetLoading,
} from "../../../../store/ducks/tweet/selectors";
import { useHomeStyles } from "../../theme";

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
  if (tweetData) {
    //@ts-ignore
    return <Tweet classes={classes} {...tweetData} />;
  }

  return null;
};
