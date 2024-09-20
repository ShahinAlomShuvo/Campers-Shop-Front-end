import FeaturesCard from "../ui/FeaturesCard";

const Features = () => {
  return (
    <div className="space-y-10 py-10">
      <div className="space-y-3 text-center">
        <h2 className="text-3xl font-bold">Features</h2>
        <p className="text-sm text-gray-500 w-full  md:w-[50%] mx-auto">
          Our gear offers advanced durability, weather-resistant protection, and
          innovative technology for optimal performance. Designed for comfort
          and mobility, it combines sleek aesthetics with functionality,
          ensuring you're ready for any adventure with confidence and style.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-col lg:grid-cols-4 gap-6">
        <FeaturesCard></FeaturesCard>
        <FeaturesCard></FeaturesCard>
        <FeaturesCard></FeaturesCard>
        <FeaturesCard></FeaturesCard>
      </div>
    </div>
  );
};

export default Features;
