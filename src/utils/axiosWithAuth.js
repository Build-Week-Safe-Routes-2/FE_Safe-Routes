import axios from "axios";

function axiosWithAuth() {
  const token = localStorage.getItem("token");

  return axios.create({
    baseURL: "https://safest-routes.herokuapp.com/api",
    headers: {
      Authorization: token
    }
  });
}

export default axiosWithAuth;
