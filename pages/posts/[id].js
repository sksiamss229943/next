import axios from "axios";
function Post({ post }) {
  return (
    <>
      <div
        className="post"
        style={{
          background: "orange",
          margin: "20px",
          borderRadius: "10px",
          padding: "10px",
          color: "white",
        }}
      >
        <h2>{post.title}</h2>
        <h5>{post.body}</h5>
      </div>
    </>
  );
}

export const getServerSideProps = async (ctx) => {
  const { params } = ctx;
  const post = (
    await axios.get(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
  ).data;
  return {
    props: {
      post,
    },
  };
};

export default Post;
