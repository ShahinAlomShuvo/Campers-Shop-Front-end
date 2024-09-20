import features1 from "../../assets/images/feature.webp";
import fetures2 from "../../assets/images/feature2.webp";
import fetures3 from "../../assets/images/feature3.webp";
import fetures4 from "../../assets/images/features4.webp";
import { Button } from "./button";

const FeaturesCard = () => {
  return (
    <div className="relative">
      <img src={features1} alt="" />
      <div className="absolute bottom-7 left-4 space-y-3">
        <h2 className="text-2xl font-semibold text-white">Backpacks</h2>
        <Button className="bg-[#c19d60] font-semibold">View Details</Button>
      </div>
    </div>
  );
};

export default FeaturesCard;
