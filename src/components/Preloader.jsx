import ClipLoader from "react-spinners/ClipLoader";

const Preloader = ({ loading }) => {
  return (
    <div
      className={`fixed inset-0 flex items-center justify-center bg-white z-50 ${
        loading ? "block" : "hidden"
      }`}
    >
      <ClipLoader color="#3498db" loading={loading} size={60} />
    </div>
  );
};

export default Preloader;
