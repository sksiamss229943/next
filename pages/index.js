import axios from "axios";
import { v4 as uuid } from "uuid";
import User from "../components/user";

const HomePage = ({ datas }) => {
  return (
    <>
      {datas.map((data) => (
        <User key={uuid()} name={data.name} email={data.email} />
      ))}
    </>
  );
};

export const getStaticProps = async () => {
  let datas = (await axios.get("https://api.npoint.io/7b4ad0821da3fb5052cc"))
    .data;
  return {
    props: {
      datas,
    },
  };
};

export default HomePage;