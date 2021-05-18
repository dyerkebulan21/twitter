import React from "react";

import {
  Grid,
  Typography,
  Container,
  InputAdornment,
  Paper,
  List,
  ListItem,
  ListItemText,
  Divider,
  ListItemAvatar,
  Avatar,
  Button,
  
} from "@material-ui/core";
import {SearchTextField} from '../../components/SearchTextFiled'
import SearchIcon from '@material-ui/icons/Search';
import {Tweet} from '../../components/Tweet'
import {SideMenu} from '../../components/SideMenu'

import {AddFormTweet} from '../../components/AddFormTweet'
import { useHomeStyles } from "./theme";
import PersonAddIcon from '@material-ui/icons/PermIdentity';

import {useDispatch, useSelector} from 'react-redux'
import { fetchTweets } from "../../store/ducks/tweets/actionCreators";
import { selectedTweetsItem, selectIsTweetsLoading } from "../../store/ducks/tweets/selectors";
import CircularProgress from '@material-ui/core/CircularProgress';
export const Home: React.FC = (): React.ReactElement => {
  const dispatch = useDispatch();
  const classes = useHomeStyles();
  const tweets = useSelector(selectedTweetsItem);
  const isLoading = useSelector(selectIsTweetsLoading)
  React.useEffect(() => {
    dispatch(fetchTweets())
  },[])
  return (
    <Container maxWidth="lg" className={classes.wrapper}>
      <Grid container spacing={3}>
        <Grid item xs={3}>
         <SideMenu classes={classes}/>
        </Grid>

        <Grid item xs={6}>
          <Paper className={classes.tweetsWrapper} variant="outlined">
            <Paper className={classes.tweetsHeader} variant="outlined">
            
              <Typography variant="h6">Главная</Typography>
       
            </Paper>
            <div className={classes.addForm}>
            <AddFormTweet classes={classes}/>
            </div>
            {isLoading ? <div style={{textAlign: "center", marginTop: 30}}><CircularProgress color="primary"/></div> : tweets.map((tweet) =>  <Tweet text={tweet.text} classes={classes} user={tweet.user}/>)}
           
          </Paper>
          
        </Grid>

        <Grid item xs={3}>
          <div className={classes.rightSide}>
          <SearchTextField variant="outlined" placeholder="Поиск по твиттеру" fullWidth InputProps={{
              startAdornment: (<InputAdornment position="start"><SearchIcon/></InputAdornment>)
          }}/>
          </div>
          <Paper className={classes.rightSideBlock}>
              <Paper className={classes.rightSideBlockHeader} variant="outlined">
                <b>Актуальные темы</b>
              </Paper>
              <List>
                <ListItem className={classes.rightSideBlockItem}>
                  <ListItemText
                    primary="Санкт-Петербург"
                    secondary={
                      <Typography component="span" variant="body2" color="textSecondary">
                        Твитов: 3 331
                      </Typography>
                    }
                  />
                </ListItem>
                <Divider component="li" />
                <ListItem className={classes.rightSideBlockItem}>
                  <ListItemText
                    primary="#коронавирус"
                    secondary={
                      <Typography component="span" variant="body2" color="textSecondary">
                        Твитов: 163 122
                      </Typography>
                    }
                  />
                </ListItem>
                <Divider component="li" />
                <ListItem className={classes.rightSideBlockItem}>
                  <ListItemText
                    primary="Беларусь"
                    secondary={
                      <Typography component="span" variant="body2" color="textSecondary">
                        Твитов: 13 554
                      </Typography>
                    }
                  />
                </ListItem>
                <Divider component="li" />
              </List>
            </Paper>
            <Paper className={classes.rightSideBlock}>
              <Paper className={classes.rightSideBlockHeader} variant="outlined">
                <b>Кого читать</b>
              </Paper>
              <List>
                <ListItem className={classes.rightSideBlockItem}>
                  <ListItemAvatar>
                    <Avatar
                      alt="Remy Sharp"
                      src="https://pbs.twimg.com/profile_images/1267938486566428673/US6KRPbA_normal.jpg"
                    />
                  </ListItemAvatar>
                  <ListItemText
                    primary="Dock Of Shame"
                    secondary={
                      <Typography component="span" variant="body2" color="textSecondary">
                        @FavDockOfShame
                      </Typography>
                    }
                  />
                  <Button color="primary">
                    <PersonAddIcon />
                  </Button>
                </ListItem>
                <Divider component="li" />
              </List>
            </Paper>

        </Grid>
      </Grid>
    </Container>
  );
};
