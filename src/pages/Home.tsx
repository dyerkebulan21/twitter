import React from "react";
import { makeStyles, withStyles, createStyles } from "@material-ui/core/styles";
import {
  Grid,

  Typography,
  Container,
  InputBase,
  Paper,
} from "@material-ui/core";

import grey from "@material-ui/core/colors/grey";
import {Tweet} from '../components/Tweet'
import {SideMenu} from '../components/SideMenu'
import theme from "../theme";
import {AddFormTweet} from '../components/AddFormTweet'
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
    "&:hover": {
      "& div":{
        backgroundColor: "rgba(29,161,242, 0.1)",
      '& h6': {
        color: theme.palette.primary.main,
      },
      '& svg': {
        fill: theme.palette.primary.main
      }
      }
    },
    "& div": {
      display: "inline-flex",
      alignItems: "center",
      padding: "0px 25px 0 20px",
      position: "relative",
      left: -10,
      height: 55,
      borderRadius: "50px",
      marginBottom: 15,
      cursor: "pointer",
      transition: 'background-color 0.1s ease-in-out'
    }
  },
  sideMenuTweetButton: {
    padding: theme.spacing(3)
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
    maxWidth: 450,
    display: "flex",
    justifyContent: "space-between",
  },
  addForm: {
    padding: 20,
},
addFormBody: {
    display: 'flex',
    width: '100%',

},
addFormBottom: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',

},

addFormBottomActions: {
    marginTop: 10,
    paddingLeft: 70,

},
addFormBottomRight: {
  display: 'flex',
  alignItems: 'center',

},
tweetAvatar: {
    width: theme.spacing(6.5),
    height: theme.spacing(6.5),
    marginRight: 15,

},
addFormTextarea: {
    width: '100%',
    border: 0,
    fontSize: 20,
    outline: 'none',
    fontFamily: 'inherit',
    resize: 'none',

},
addFormCircleProgress: {
  position: 'relative',
  width: 20,
  height: 20,
  margin: '0 10px',
  '& .MuiCircularProgress-root': {
    position: 'absolute',
  },

}
}));

export const Home: React.FC = (): React.ReactElement => {
  const classes = useHomeStyles();
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
          <SearchTextField placeholder="Поиск по твиттеру" fullWidth />
        </Grid>
      </Grid>
    </Container>
  );
};
