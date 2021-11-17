import Loader from "react-loader-spinner";
import "./styles.css";

const Loading = () => {
  return (
    <Loader
      className="loading"
      type="ThreeDots"
      color="#2e86c1"
      height={70}
      width={70}
    />
  );
};

export default Loading;
