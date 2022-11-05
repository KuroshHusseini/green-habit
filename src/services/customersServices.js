import axios from "axios";

const url = "http://localhost:3002/customers";

export const getCustomers = async () => {
  const res = await axios.get(url);
  return res.data;
};
export const getSingleCustomers = async (id) => {
  const res = await axios.get(`${url}/${id}`);
  return res.data;
};

export const createCustomer = async ({ email, password }) => {
  const res = await axios.post("api/auth/sign-up", { email, password });
  console.log("🚀 ~ file: index.jsx ~ line 6 ~ createUser ~ res", res);
};
