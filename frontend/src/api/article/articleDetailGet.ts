// article 세부 조회 Get

import api from "../api";

const articleDetailGet = async (articleId: any) => {
  try {
    const accessToken = localStorage.getItem("accessToken");
    const response = await api.get("/article/" + articleId, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error: ", error);
    throw error;
  }
};

export default articleDetailGet;
