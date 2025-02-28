import React from "react";

const Features = ({featuresRef}) => {
  const features = [
    {
      icon: "public/icons/featureOne.svg",
      title: "Master our kitchen",
      description: "Learn to cook like a professional with our expert guidance",
    },
    {
      icon: "public/icons/featureTwo.svg",
      title: "Cook like a pro",
      description: "Discover techniques used by top chefs around the world",
    },
    {
      icon: "public/icons/featureThree.svg",
      title: "Save time",
      description: "Quick and efficient recipes that don't compromise on taste",
    },
    {
      icon: "public/icons/featureFour.svg",
      title: "Feel food",
      description: "Experience the joy of creating delicious meals at home",
    },
  ];
  return (
    <section ref={featuresRef} className="bg-[#121212] px-4 py-16 md:px-8 lg:px-16">
      <h2 className="text-center text-5xl font-[gilroy] text-white font-bold mb-30">
        Get a many of interesting <br /> features.
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {features.map((feature, index) => (
  <div
    key={index}
    className="bg-[#161616] rounded-xl text-center hover:bg-gray-800 transition-colors relative"
  >
    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/4">
      <img
        className="h-40 w-40 rounded-full object-cover"
        src={feature.icon}
        alt={feature.title}
      />
    </div>
    <div className="pt-20 px-6 pb-6">
      <h3 className="font-semibold text-lg text-white mb-2">
        {feature.title}
      </h3>
      <p className="text-gray-400 text-sm">
        {feature.description}
      </p>
      <button className="cursor-pointer bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 mt-4 px-4 border border-blue-500 hover:border-transparent rounded">
        More
      </button>
    </div>
  </div>
))}
      </div>
    </section>
  );
};

export default Features;
