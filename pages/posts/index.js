import axios from "axios";
import Link from "next/link";

const posts = ({ posts }) => {
  return (
    <>
      {posts.map((post) => (
        <>
          <Link href={`/posts/${post.id}`} >
            <div
              className="post"
              style={{
                cursor: "pointer",
                userSelect: "none",
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
          </Link>
        </>
      ))}
    </>
  );
};

export const getServerSideProps = async () => {
  const posts = (await axios.get("https://jsonplaceholder.typicode.com/posts"))
    .data;
  return {
    props: {
      posts,
    },
  };
};

export default posts;
