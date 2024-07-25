import axios from "axios";

const fetchUsersById = async (id) => {
  const response = await axios.get(`https://dummyjson.com/users/${id}`);
  return response.data;
};

export default fetchUsersById;
