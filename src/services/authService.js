import { loginSuccess } from "../redux/authSlice";
import { post } from "../utils/axiosAPI";
import { path } from "../utils/axiosAPI";
import config from "../config";

export const login = async ({ username, password }, dispatch, navigate) => {
  try {
    const res = await post(path.login, { username, password });
    dispatch(loginSuccess(res.data));
    // handleShowLogin();
    navigate(config.routes.home);
  } catch (error) {
    return error.response.data.message;
    // setErrorMessage(error.response.data.message);
  }
}