import * as React from "react";
import { useStylesSignIn } from "../../../SignIn";
import { Button, FormControl, FormGroup } from "@material-ui/core";
import { Modal } from "../../../../components/Modal";

interface RegisterModalProps {
  open: boolean;
  onClose: () => void;
}
const RegisterModal: React.FC<RegisterModalProps> = ({ open, onClose }) => {
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
              Регистрация
            </Button>
          </FormGroup>
        </FormControl>
      </form>
    </Modal>
  );
};

export { RegisterModal };
