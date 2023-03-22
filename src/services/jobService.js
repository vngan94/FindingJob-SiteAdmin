import { path, post } from "../utils/axiosAPI";

export const applyJob = async (formData, accessToken) => {
  try {
    const res = await post(path.applyJob, formData, {
      headers: {
        Authorization: `bearer ${accessToken}`,
        "Content-Type": "multipart/form-data"
      }
    });
    console.log(res);
  } catch (error) {
    console.log(error);
  }
}