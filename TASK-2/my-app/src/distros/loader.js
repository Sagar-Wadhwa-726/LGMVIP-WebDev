/*Importing loader so as to use it */
import Loader from "react-loader-spinner";
const Loaderspinner = () => {
  return (
    <div className="loadimg" style={{ marginLeft: "32%", marginRight: "12%" }}>
      <Loader
        type="Puff"
        color="rgb(255, 0, 115)"
        height={300}
        width={500}
        timeout={5000}
      />
    </div>
  );
};
export default Loaderspinner;
