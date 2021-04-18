import React from "react";
import {makeStyles} from '@material-ui/core/styles'
import { Grid,IconButton,Typography,Container } from "@material-ui/core";
import TwitterIcon from '@material-ui/icons/Twitter'
import SearchIcon from '@material-ui/icons/Search';
import NotificationIcon from '@material-ui/icons/NotificationsNone';
import BookmarkIcon from '@material-ui/icons/BookmarkBorder';
import Message from '@material-ui/icons/MailOutline';
import ListIcon from '@material-ui/icons/ListAlt';
import UserIcon from '@material-ui/icons/PersonOutline';


const useHomeStyles = makeStyles(()=> ({
    wrapper: {
        height: '100vh'
    },
    logo: {
        margin: "10px 0"
    },
    logoIcon: {
        fontSize: 36
    },
    sideMenuList: {
        listStyle: "none",
        padding: 0,
        margin: 0
    },
    sideMenuListItem: {
        display: "flex",
        alignItems: "center"
    },
    sideMenuListItemLabel: {
        fontWeight: 700,
        fontSize: 20,
        marginLeft: 15
    },
    sideMenuListItemIcon: {
        fontSize: 28
    }
}))

export const Home: React.FC = (): React.ReactElement => {
    const classes = useHomeStyles()
    return(
  <Container maxWidth="lg" className={classes.wrapper}>
    <Grid container spacing={3}>
      <Grid item xs={3}>
        <ul className={classes.sideMenuList}>
           <li className={classes.sideMenuListItem}>
              <IconButton className={classes.logo} color="primary">
                <TwitterIcon className={classes.logoIcon}/>
              </IconButton>

          </li>
           <li className={classes.sideMenuListItem}>
          <IconButton >
                <SearchIcon className={classes.sideMenuListItemIcon}/>
              </IconButton>
              <Typography className={classes.sideMenuListItemLabel} variant="h6">Поиск</Typography>
          </li>
           <li className={classes.sideMenuListItem}>
          <IconButton >
                <NotificationIcon className={classes.sideMenuListItemIcon}/>
              </IconButton>
              <Typography className={classes.sideMenuListItemLabel} variant="h6">Уведомления</Typography>
          </li>
           <li className={classes.sideMenuListItem}>
          <IconButton >
                <BookmarkIcon className={classes.sideMenuListItemIcon}/>
              </IconButton>
              <Typography className={classes.sideMenuListItemLabel} variant="h6">Сообщения</Typography>
          </li>
           <li className={classes.sideMenuListItem}>
          <IconButton >
                <Message className={classes.sideMenuListItemIcon}/>
              </IconButton>
              <Typography className={classes.sideMenuListItemLabel} variant="h6">Закладки</Typography>
          </li>
           <li className={classes.sideMenuListItem}>
          <IconButton >
                <ListIcon className={classes.sideMenuListItemIcon}/>
              </IconButton>
              <Typography className={classes.sideMenuListItemLabel} variant="h6">Список</Typography>
          </li>
           <li className={classes.sideMenuListItem}>
          <IconButton >
                <UserIcon className={classes.sideMenuListItemIcon}/>
              </IconButton>
              <Typography className={classes.sideMenuListItemLabel} variant="h6">Профиль</Typography>
          </li>
        </ul>
      </Grid>

      <Grid item xs={6}>
        xs
      </Grid>

      <Grid item xs={3}>
        xs
      </Grid>
    </Grid>
  </Container>
  )
};
