import axios from "axios";

const url = "http://localhost:3002/customers";

export const getCustomers = async () => {
  const res = await axios.get(url);
  return res.data;
};
export const getSingleCustomers = async (id) => {
  try {
    const res = await axios.get(`${url}/${id}`);
    return res.data;
  } catch (error) {
    console.log(
      "🚀 ~ file: customersServices.js ~ line 14 ~ getSingleCustomers ~ error",
      error
    );
  }
};
