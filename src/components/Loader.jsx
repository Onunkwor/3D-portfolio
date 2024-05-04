import { Html } from "@react-three/drei";
import { loader } from "../assets/icons";
const Loader = () => {
  return (
    <Html>
      <div className="flex justify-center items-center">
        <div className="w-20 h-20">
          <img src={loader} alt="loader" className="animate-spin z-[88]" />
        </div>
      </div>
    </Html>
  );
};

export default Loader;
