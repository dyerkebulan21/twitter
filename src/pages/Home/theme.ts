import {makeStyles} from '@material-ui/core/styles'
import grey from "@material-ui/core/colors/grey";
import theme from "../../theme";
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
  
  },
  rightSide: {
    paddingTop: 20,
    position: "sticky",
    top: 0 
  },
  rightSideBlockHeader: {
    borderTop: 0,
    borderLeft: 0,
    borderRight: 0,
    backgroundColor: 'transparent',
    padding: '13px 18px',
    '& b': {
      fontSize: 20,
      fontWeight: 800,
    },
  },
  rightSideBlockItem: {
    cursor: 'pointer',
    '& .MuiTypography-body1': {
      fontWeight: 700,
    },
    '& .MuiListItemAvatar-root': {
      minWidth: 50,
    },
    '& .MuiListItemText-root': {
      margin: 0,
    },
    '&:hover': {
      backgroundColor: '#edf3f6',
    },
    '& a': {
      color: "inherit",
      textDecoration: "none"
    }
  },
  rightSideBlock: {
    backgroundColor: '#F5F8FA',
    borderRadius: 15,
    marginTop: 20,
    '& .MuiList-root': {
      paddingTop: 0,
    },
  },
  tweetWrapper: {
    color: 'inherit',
    textDecoration: "none"
  }
  

  }));
  