import * as React from "react";
import { Button, FormControl, FormGroup } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import { useStylesSignIn } from "../../../SignIn";
import { Modal } from "../../../../components/Modal";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { AuthApi } from "../../../../services/api/AuthApi";
interface LoginModalProps {
  open: boolean;
  onClose: () => void;
}
export interface LoginFormProps {
  email: string;
  password: string;
}

const LoginFormSchema = yup.object().shape({
  password: yup.string().min(6, "Максимальная длина пароля").required(),
  email: yup.string().email("Неверная почта").required("Введите почту"),
});

const LoginModal: React.FC<LoginModalProps> = ({ open, onClose }) => {
  const classes = useStylesSignIn();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormProps>({
    resolver: yupResolver(LoginFormSchema),
  });

  const onSubmit = async (data: LoginFormProps) => {
    try {
      const userData = await AuthApi.signIn(data);
      console.log(userData);
    } catch {
      
    }
  };
  return (
    <Modal visible={open} onClose={onClose} title="Войти в аккаунт">
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl
          className={classes.loginFormControl}
          component="fieldset"
          fullWidth
        >
          <Controller
            name="email"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                error={!!errors.email}
                label={errors.email?.message}
                className={classes.loginSideField}
                {...field}
              />
            )}
          />

          <Controller
            name="password"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                error={!!errors.password}
                label={errors.password?.message}
                className={classes.loginSideField}
                {...field}
              />
            )}
          />
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
