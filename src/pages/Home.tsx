import React from "react";
import { makeStyles, withStyles, createStyles } from "@material-ui/core/styles";
import {
  Grid,
  IconButton,
  Typography,
  Container,
  TextField,
  InputBase,
  Paper,
  Avatar,
} from "@material-ui/core";
import TwitterIcon from "@material-ui/icons/Twitter";
import SearchIcon from "@material-ui/icons/Search";
import NotificationIcon from "@material-ui/icons/NotificationsNone";
import BookmarkIcon from "@material-ui/icons/BookmarkBorder";
import Message from "@material-ui/icons/MailOutline";
import ListIcon from "@material-ui/icons/ListAlt";
import UserIcon from "@material-ui/icons/PersonOutline";
import grey from "@material-ui/core/colors/grey";
import {Tweet} from '../components/Tweet'

const SearchTextField = withStyles(() =>
  createStyles({
    input: {
      borderRadius: 30,
      backgroundColor: "#E6ECF0",
      height: 40,
      padding: 0,
    },
  })
)(InputBase);

export const useHomeStyles = makeStyles(() => ({
  wrapper: {
    height: "100vh",
  },
  logo: {
    margin: "10px 0",
  },
  logoIcon: {
    fontSize: 36,
  },
  sideMenuList: {
    listStyle: "none",
    padding: 0,
    margin: 0,
  },
  sideMenuListItem: {
    display: "flex",
    alignItems: "center",
  },
  sideMenuListItemLabel: {
    fontWeight: 700,
    fontSize: 20,
    marginLeft: 15,
  },
  sideMenuListItemIcon: {
    fontSize: 28,
  },
  tweetsWrapper: {
    height: "100%",
    borderBottom: "none",
    borderTop: "none",
    borderRadius: 0,
  },
  tweetsHeader: {
    borderRight: 0,
    borderLeft: 0,
    borderRadius: 0,
    borderTop: 0,
    padding: "10px 15px",
    "& h6": {
      fontWeight: 800,
    },
  },
  tweet: {
    paddingTop: 15,
    paddingLeft: 15,
    "& :hover": {
      backgroundColor: "rgb(248, 250, 290)",
      cursor: "pointer",
    },
  },
  tweetUserName: {
    color: grey[500],
  },
  tweetFooter: {
    width: 450,
    display: "flex",
    justifyContent: "space-between",
  },
}));

export const Home: React.FC = (): React.ReactElement => {
  const classes = useHomeStyles();
  return (
    <Container maxWidth="lg" className={classes.wrapper}>
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <ul className={classes.sideMenuList}>
            <li className={classes.sideMenuListItem}>
              <IconButton className={classes.logo} color="primary">
                <TwitterIcon className={classes.logoIcon} />
              </IconButton>
            </li>
            <li className={classes.sideMenuListItem}>
              <IconButton>
                <SearchIcon className={classes.sideMenuListItemIcon} />
              </IconButton>
              <Typography
                className={classes.sideMenuListItemLabel}
                variant="h6"
              >
                Поиск
              </Typography>
            </li>
            <li className={classes.sideMenuListItem}>
              <IconButton>
                <NotificationIcon className={classes.sideMenuListItemIcon} />
              </IconButton>
              <Typography
                className={classes.sideMenuListItemLabel}
                variant="h6"
              >
                Уведомления
              </Typography>
            </li>
            <li className={classes.sideMenuListItem}>
              <IconButton>
                <BookmarkIcon className={classes.sideMenuListItemIcon} />
              </IconButton>
              <Typography
                className={classes.sideMenuListItemLabel}
                variant="h6"
              >
                Сообщения
              </Typography>
            </li>
            <li className={classes.sideMenuListItem}>
              <IconButton>
                <Message className={classes.sideMenuListItemIcon} />
              </IconButton>
              <Typography
                className={classes.sideMenuListItemLabel}
                variant="h6"
              >
                Закладки
              </Typography>
            </li>
            <li className={classes.sideMenuListItem}>
              <IconButton>
                <ListIcon className={classes.sideMenuListItemIcon} />
              </IconButton>
              <Typography
                className={classes.sideMenuListItemLabel}
                variant="h6"
              >
                Список
              </Typography>
            </li>
            <li className={classes.sideMenuListItem}>
              <IconButton>
                <UserIcon className={classes.sideMenuListItemIcon} />
              </IconButton>
              <Typography
                className={classes.sideMenuListItemLabel}
                variant="h6"
              >
                Профиль
              </Typography>
            </li>
          </ul>
        </Grid>

        <Grid item xs={6}>
          <Paper className={classes.tweetsWrapper} variant="outlined">
            <Paper className={classes.tweetsHeader} variant="outlined">
              <Typography variant="h6">Главная</Typography>
            </Paper>
            <Tweet text={"Сегодня я несчастна. Но как говорил мне один дядя ‘судьба красивых женщин всегда печальна’"} classes={classes} user={{fullname: "yerkebulan", username: "dyerkebulan21", avatarUrl : "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"}}/>
          </Paper>
        </Grid>

        <Grid item xs={3}>
          <SearchTextField placeholder="Поиск по твиттеру" fullWidth />
        </Grid>
      </Grid>
    </Container>
  );
};
