import { loginSuccess, logoutSuccess, setUser } from "../redux/authSlice";
import { createAxiosJwt, get, post } from "../utils/axiosAPI";
import { path } from "../utils/axiosAPI";
import config from "../config";

export const login = async ({ username, password }, dispatch) => {
  try {
    const res = await post(path.login, { username, password });
    console.log("res - login", res);
    if (res.success) {
      dispatch(loginSuccess(res.data));
      getUser(res.data.accessToken, res.data.refreshToken, dispatch);
    }
    // handleShowLogin();
   
  } catch (error) {
    console.log(error);
    return error.response.data.message;
    // return "test";
    // setErrorMessage(error.response.data.message);
  }
}

export const logout = async (accessToken, refreshToken, dispatch) => {
  console.log("logout function", accessToken);
  console.log("logout function", refreshToken);
  console.log("logout function", dispatch);
  const axiosJwt = createAxiosJwt(accessToken, refreshToken, dispatch);
  try {
    dispatch(logoutSuccess());
    const res = await axiosJwt.patch(path.logout, {}, {
      headers: {
        Authorization: `bearer ${accessToken}`
      },
      // withCredentials: true
    })
    console.log(res);
  } catch (error) {
    console.log(error);
  }
  // try {
  //   const res = await patch(path.logout, _id, {
  //     headers: {
  //       Authorization: `bearer ${accessToken}`
  //     }
  //   })
  //   console.log(res);
  //   dispatch(logoutSuccess());
  // } catch (error) {
  //   console.log(error);
  // }
}

export const getUser = async (accessToken, refreshToken, dispatch) => {
  const axiosJwt = createAxiosJwt(accessToken, refreshToken, dispatch);
  try {
    const res = await axiosJwt.get(path.getUser, {
      headers: {
        Authorization: `bearer ${refreshToken}`
      },
      // withCredentials: true
    })
    dispatch(setUser(res.data));
    console.log("getUser", res);
  } catch (error) {
    console.log(error);
  }
  // try {
  //   const res = await get(path.getUser, {
  //     headers: {
  //       Authorization: `bearer ${accessToken}`
  //     }
  //   })
  //   console.log("getUser", res);
  //   dispatch(setUser(res));
  // } catch (error) {
  //   console.log(error);
  // }
}