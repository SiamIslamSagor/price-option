import PropTypes from "prop-types";
import Feature from "../Feature/Feature";
const PriceOption = ({ option }) => {
  const { name, price, features } = option;
  return (
    <div className="bg-blue-400 rounded-lg text-center flex flex-col p-4 text-white">
      <h2>
        <span className="text-5xl font-bold">{price}</span>
        <span className="text-2xl">/mon</span>
      </h2>
      <h4 className="text-3xl text-center my-8">{name}</h4>
      <div className="p-6 flex-grow">
        {features.map((feature, index) => (
          <Feature feature={feature} key={index}></Feature>
        ))}
      </div>
      <button className="btn mt-4 w-full">Buy Now</button>
    </div>
  );
};

PriceOption.propTypes = {
  option: PropTypes.object,
};

export default PriceOption;
