import { loginSuccess, setUser } from "../redux/authSlice";
import { get, post } from "../utils/axiosAPI";
import { path } from "../utils/axiosAPI";
import config from "../config";

export const login = async ({ username, password }, dispatch, navigate) => {
  try {
    const res = await post(path.login, { username, password });
    dispatch(loginSuccess(res.data.accessToken));
    getUser(res.data.accessToken, dispatch);
    // handleShowLogin();
    navigate(config.routes.home);
  } catch (error) {
    return error.response.data.message;
    // setErrorMessage(error.response.data.message);
  }
}

export const getUser = async (accessToken, dispatch) => {
  try {
    const res = await get(path.getUser, {
      headers: {
        Authorization: `bearer ${accessToken}`
      }
    })
    dispatch(setUser(res));
  } catch (error) {
    console.log(error);
  }
}