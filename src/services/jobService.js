import { toast } from "react-toastify";
import { path, post } from "../utils/axiosAPI";
import config from "../config";

export const applyJob = async (formData, accessToken, navigate) => {
  try {
    const res = await post(path.applyJob, formData, {
      headers: {
        Authorization: `bearer ${accessToken}`,
        "Content-Type": "multipart/form-data"
      }
    });
    toast.success(res.message);
    navigate(config.routes.job);
  } catch (error) {
    console.log(error);
    toast.error("Lỗi Từ Server!");
  }
}