import { Comment } from "react-loader-spinner";

const Loader = () => {
  return (
    <div>
      <Comment
        visible={true}
        height="180"
        width="180"
        ariaLabel="comment-loading"
        wrapperStyle={{}}
        wrapperClass="comment-wrapper"
        color="#fff"
        backgroundColor="#F4442E"
      />
    </div>
  );
};
export default Loader;
