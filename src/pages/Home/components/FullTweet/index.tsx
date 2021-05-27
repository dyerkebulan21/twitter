import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Tweet } from "../../../../components/Tweet";
import { fetchTweetData } from "../../../../store/ducks/tweet/actionCreators";
import { selectedTweetData } from "../../../../store/ducks/tweet/selectors";
import { useHomeStyles } from "../../theme";

export const FullTweet: React.FC = (): React.ReactElement | null => {
  const dispatch = useDispatch();
  const classes = useHomeStyles();
  const params: { id: string } = useParams();
  const id = params.id;
  const tweetData = useSelector(selectedTweetData);
  React.useEffect(() => {
    if (id) {
      dispatch(fetchTweetData(id));
    }
  }, [dispatch]);
  if (!tweetData) {
    return null;
  }
  console.log(tweetData)
  //@ts-ignore
  return <Tweet classes={classes} {...tweetData} />;
};
