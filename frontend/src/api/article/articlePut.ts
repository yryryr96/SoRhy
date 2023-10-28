//article 수정 -> Put
import api from "../api";

const articlePut = async (articleId: any) => {
  try {
    const accessToken = localStorage.getItem("accessToken");
    const response = await api.put("/article/" + articleId, {
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

export default articlePut;
