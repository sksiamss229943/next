import axios from "axios";
import Router from "next/router";
function Post({ post }) {
  return (
    <>
      <div
        className="post"
        style={{
          background: "orange",
          margin: "20px",
          borderRadius: "5px",
          padding: "10px",
          color: "white",
        }}
      >
        <h2>{post.title}</h2>
        <h5>{post.body}</h5>
      </div>
      <div className="button">
        <button
          style={{
            padding: "0.5rem 1.5rem",
            margin: "20px",
          }}
          onClick={() => Router.back()}
        >
          Back
        </button>
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
