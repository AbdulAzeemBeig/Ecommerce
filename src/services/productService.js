import api from "./api";

export const getProducts = async () => {
  try {
    const response = await api.get("http://localhost:5000/api/products");
    return response.data;
  } catch (error) {
    throw error;
  }
};
export const fetchProductById = async (productId) => {
  try {
    const response = await api.get(`/products/${productId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
