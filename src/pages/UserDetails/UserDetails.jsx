import { useParams, NavLink, Outlet } from "react-router-dom";
import fetchUsersById from "../../services/fetchUsersById";
import { useEffect, useState } from "react";
import Loader from "../../components/Loader/Loader";

const UserDetails = () => {
  const params = useParams();
  const [user, setUser] = useState(null);
  useEffect(() => {
    try {
      const getUser = async () => {
        const userInfo = await fetchUsersById(params.userId);
        setUser(userInfo);
      };
      getUser();
    } catch (error) {
      console.log(error);
    }
  }, [params.userId]);
  if (!user) return <Loader />;
  return (
    <div>
      <p>User Details #{params.userId}</p>
      <img src={user.image} />
      <h2>
        {user.firstName} {user.lastName}{" "}
      </h2>
      <p>{user.email} </p>
      <p>{user.age} </p>
      <div className="flex">
        <NavLink to="address">Address</NavLink>
        <NavLink to="posts">Posts</NavLink>
      </div>
      <Outlet />
    </div>
  );
};

export default UserDetails;
