import axios from "axios";

const url = "http://localhost:3002/suggestions";

export const getSuggestions = async () => {
  const res = await axios.get(url);
  return res.data;
};
export const getSingleSuggestion = async (id) => {
  const res = await axios.get(`${url}/${id}`);
  return res.data;
};
