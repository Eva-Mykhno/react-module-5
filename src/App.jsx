import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import NotFound from "./pages/NotFound/NotFound";
import Users from "./pages/Users/Users";
import UserDetails from "./pages/UserDetails/UserDetails";
import UserPosts from "./components/UserPosts/UserPosts";

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/users" element={<Users />} />
        <Route path="/users/:userId" element={<UserDetails />}>
          <Route path="address" element={<h2>User address</h2>} />
          <Route path="posts" element={<UserPosts />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
