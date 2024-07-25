import { useParams } from "react-router-dom";
import fetchPostsById from "../../services/fetchPostsById";
import { useEffect, useState } from "react";

const UsersPosts = () => {
  const params = useParams();
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    try {
      const getData = async () => {
        const data = await fetchPostsById(params.userId);
        setPosts(data);
      };
      getData();
    } catch (error) {
      console.log(error);
    }
  }, [params.userId]);
  return (
    <div>
      <ul>
        {posts.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
};
export default UsersPosts;
