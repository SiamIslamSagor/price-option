import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {
  const priceOptions = [
    {
      id: 1,
      name: "Basic Membership",
      price: "$29.99",
      features: [
        "Access to gym equipment",
        "Group fitness classes",
        "Locker room access",
        "Cardio machines",
        "Free weights area",
        "WiFi access",
        "24/7 gym access",
        "Discounts on personal training",
      ],
    },
    {
      id: 2,
      name: "Premium Membership",
      price: "$49.99",
      features: [
        "Access to gym equipment",
        "Group fitness classes",
        "Locker room access",
        "Cardio machines",
        "Free weights area",
        "Personal trainer sessions",
        "Sauna and spa access",
        "WiFi access",
        "24/7 gym access",
        "Discounts on supplements",
        "Complimentary towel service",
      ],
    },
    {
      id: 3,
      name: "Ultimate Membership",
      price: "$79.99",
      features: [
        "Access to gym equipment",
        "Group fitness classes",
        "Locker room access",
        "Cardio machines",
        "Free weights area",
        "Personal trainer sessions",
        "Sauna and spa access",
        "Nutritional counseling",
        "Towel service",
        "Access to swimming pool",
        "Sports facilities",
        "WiFi access",
        "24/7 gym access",
        "Discounts on supplements",
        "Complimentary protein shakes",
      ],
    },
  ];
  return (
    <div className="m-12">
      <h2 className="text-5xl">Best Prices in the town</h2>
      <div className="grid grid-cols-3 gap-6">
        {priceOptions.map((option) => (
          <PriceOption key={option.id} option={option}></PriceOption>
        ))}
      </div>
    </div>
  );
};

export default PriceOptions;
