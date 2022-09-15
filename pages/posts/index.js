import axios from "axios";
import Link from "next/link";

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const posts = ({ posts }) => {
  return (
    <>
      <div className="container" style={{ padding: "0 20px" }}>
        <h1
          style={{
            textAlign: "center",
            margin: "20px 0",
            fontSize: "2.7rem",
          }}
        >
          Siam Blogs
        </h1>
        {posts.map((post) => (
          <>
            <Link href={`/posts/${post.id}`}>
              <div
                className="post"
                style={{
                  cursor: "pointer",
                  userSelect: "none",
                  background: "orange",
                  margin: "0 auto 20px",
                  borderRadius: "5px",
                  padding: "10px",
                  color: "white",
                  maxWidth: "50rem",
                }}
              >
                <h2>{capitalizeFirstLetter(post.title)}</h2>
              </div>
            </Link>
          </>
        ))}
      </div>
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
