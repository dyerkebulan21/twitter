import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core";
import TwitterIcon from "@material-ui/icons/Twitter";
import Button from "@material-ui/core/Button";
import SearchIcon from "@material-ui/icons/Search";
import PeopleIcon from "@material-ui/icons/People";
import ModeCommentOutlinedIcon from "@material-ui/icons/ModeCommentOutlined";
import { LoginModal } from "./SignIn/components/LoginModal";
import { RegisterModal } from "./SignIn/components/RegisterModal";
export const useStylesSignIn = makeStyles((theme) => ({
  wrapper: {
    display: "flex",
    height: "100vh",
  },
  blueSide: {
    backgroundColor: "#71C9F8",
    flex: "0 0 50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    overflow: "hidden",
  },
  blueSideBigIcon: {
    position: "absolute",
    top: "50%",
    left: "53%",
    width: "350%",
    height: "350%",
    transform: "translate(-50%, -50%)",
  },
  blueSideInfo: {
    listStyle: "none",
    position: "relative",
    width: 380,
    padding: 0,
    margin: 0,
    "& h6": {
      color: "white",
      fontWeight: 700,
      fontSize: 20,
      display: "flex",
      aligItems: "center",
    },
  },

  blueSideListInfoItem: {
    marginBottom: 40,
  },
  blueSideInfoIcon: {
    marginRight: 30,
    fontSize: 32,
  },
  loginSide: {
    flex: "0 0 50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  loginSideTwitterIcon: {
    fontSize: 45,
  },
  loginSideWrapper: {
    width: 380,
  },
  loginSideTitle: {
    fontWeight: 800,
    fontSize: 32,
    marginBottom: 45,
    marginTop: 20,
  },
  loginFormControl: {
    marginBottom: theme.spacing(2),
  },
}));

export const SignIn: React.FC = (): React.ReactElement => {
  const classes = useStylesSignIn();
  const [visibleModal, setVisibleModal] = React.useState<"signIn" | "signUp">();

  const handleClickOpenSignIn = (): void => {
    setVisibleModal("signIn");
  };

  const handleClickOpenSignUp = (): void => {
    setVisibleModal("signUp");
  };

  const handleCloseModal = (): void => {
    setVisibleModal(undefined);
  };

  return (
    <div className={classes.wrapper}>
      <div className={classes.blueSide}>
        <TwitterIcon className={classes.blueSideBigIcon} color="primary" />
        <ul className={classes.blueSideInfo}>
          <li className={classes.blueSideListInfoItem}>
            <Typography variant="h6">
              <SearchIcon className={classes.blueSideInfoIcon} />
              Читайте о том что вам интересно
            </Typography>
          </li>
          <li className={classes.blueSideListInfoItem}>
            <Typography variant="h6">
              <PeopleIcon className={classes.blueSideInfoIcon} />
              Узнайте о чем говорят в мире
            </Typography>
          </li>
          <li className={classes.blueSideListInfoItem}>
            <Typography variant="h6">
              <ModeCommentOutlinedIcon className={classes.blueSideInfoIcon} />{" "}
              Присоединяйтесь к общению{" "}
            </Typography>
          </li>
        </ul>
      </div>
      <section className={classes.loginSide}>
        <div className={classes.loginSideWrapper}>
          <TwitterIcon
            className={classes.loginSideTwitterIcon}
            color="primary"
          />
          <Typography
            gutterBottom
            variant="h4"
            className={classes.loginSideTitle}
          >
            Узнайте что происходит в мире прямо сейчас
          </Typography>
          <Typography>
            <b>Присоединяйтесь к Твиттеру прямо сейчас</b>
          </Typography>
          <br />

          <Button
            onClick={handleClickOpenSignUp}
            style={{ marginBottom: 20 }}
            variant="contained"
            color="primary"
            fullWidth
          >
            Зарегистрироваться
          </Button>
          <Button
            onClick={handleClickOpenSignIn}
            variant="outlined"
            color="inherit"
            fullWidth
          >
            Войти
          </Button>
          <LoginModal
            open={visibleModal === "signIn"}
            onClose={handleCloseModal}
          />
          <RegisterModal
            open={visibleModal === "signUp"}
            onClose={handleCloseModal}
          />
        </div>
      </section>
    </div>
  );
};
