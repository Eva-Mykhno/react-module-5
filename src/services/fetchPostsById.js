import axios from "axios";

const fetchPostsById = async (id) => {
  const response = await axios.get(`https://dummyjson.com/posts/users/${id}`);
  return response.data.posts;
};

export default fetchPostsById;
