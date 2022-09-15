import axios from "axios";
import Router from "next/router";
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
function Post({ post }) {
  return (
    <>
      <div
        className="container"
        style={{
          maxWidth: "50rem",
          margin: "20px auto",
          padding: "0 20px",
        }}
      >
        <div
          className="post"
          style={{
            background: "orange",
            borderRadius: "5px",
            padding: "10px",
            color: "white",
            margin: "20px 0",
          }}
        >
          <h2>{capitalizeFirstLetter(post.title)}</h2>
          <h5>{capitalizeFirstLetter(post.body)}</h5>
        </div>
        <div className="button">
          <button
            style={{
              padding: "0.5rem 1.5rem",
            }}
            onClick={() => Router.back()}
          >
            Back
          </button>
        </div>
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
