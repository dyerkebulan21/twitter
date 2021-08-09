import * as React from "react";
import { Button, FormControl, FormGroup } from "@material-ui/core";
import { useStylesSignIn } from "../../../SignIn";
import { Modal } from "../../../../components/Modal";

interface LoginModalProps {
  open: boolean;
  onClose: () => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ open, onClose }) => {
  const classes = useStylesSignIn();
  return (
    <Modal visible={open} onClose={onClose} title="Войти в аккаунт">
      <form>
        <FormControl
          className={classes.loginFormControl}
          component="fieldset"
          fullWidth
        >
          <FormGroup aria-label="position" row>
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Войти
            </Button>
          </FormGroup>
        </FormControl>
      </form>
    </Modal>
  );
};

export { LoginModal };
