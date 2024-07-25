import axios from "axios";

const fetchUsers = async () => {
  const response = await axios.get(`https://dummyjson.com/users`);
  return response.data.users;
};

export default fetchUsers;
