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
export const Home: React.FC = (): React.ReactElement => {
  const classes = useHomeStyles()
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
            
            <AddFormTweet classes={classes}/>

            <Tweet text={"Сегодня я несчастна. Но как говорил мне один дядя ‘судьба красивых женщин всегда печальна’"} classes={classes} user={{fullname: "yerkebulan", username: "dyerkebulan21", avatarUrl : "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"}}/>
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
