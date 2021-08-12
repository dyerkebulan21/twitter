import axios from "axios";
import { LoginFormProps } from "../../pages/SignIn/components/LoginModal";

interface ResponseApi {
  data: any;
  status: string;
}

export const AuthApi = {
  async signIn(formData: LoginFormProps): Promise<any> {
    const { data } = await axios.post<ResponseApi>("/auth/login", {
      username: formData.email,
      password: formData.password,
    });
    return data.data;
  },
};
