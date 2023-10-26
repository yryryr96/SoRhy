import axios, { Axios, AxiosResponse } from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL + "/api",
});

api.interceptors.request.use(
  async (request) => {
    return request;
  },
  (error) => {
    return Promise.reject(error);
  },
);

api.interceptors.response.use(
  async (response: any) => {
    if (!response.data.success) {
      if (response.data.apiError.status === 1005) {
        if (response.config.url === "/refresh") {
          localStorage.removeItem("userStore");
          localStorage.removeItem("refreshToken");
          localStorage.removeItem("accessToken");
          localStorage.removeItem("email");
          localStorage.removeItem("password");
          return response;
        }
        const email = localStorage.getItem("email");
        const password = localStorage.getItem("password");
        const refreshToken = localStorage.getItem("refreshToken");

        const newResponse: AxiosResponse = await api
          .post("/refresh", {
            email,
            refreshToken,
            password,
          })
          .then(async (res) => {
            if (res.data.success) {
              response.config.headers["Authorization"] = `Bearer ${res.data.response.accessToken}`;
              localStorage.setItem("accessToken", res.data.response.accessToken);
              localStorage.setItem("refreshToken", refreshToken != null ? refreshToken : "");
              const newResponse = await api.request(response.config);
              return newResponse;
            }
            return res;
          });

        if (newResponse.data.success) {
          return newResponse;
        }
      }
    }
    return response;
  },
  async (error) => {
    return Promise.reject(error);
  },
);

export default api;
