// import PropTypes from 'prop-types';

import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {
const priceOptions = [
          {
            "id": 1,
            "name": "Basic Membership",
            "features": [
              "Access to gym facilities",
              "Cardio equipment usage",
              "Strength training equipment usage",
              "Locker room access"
            ],
            "price": 30.99
          },
          {
            "id": 2,
            "name": "Premium Membership",
            "features": [
              "Access to gym facilities",
              "Cardio equipment usage",
              "Strength training equipment usage",
              "Locker room access",
              "Unlimited group fitness classes",
              "Personal trainer consultation"
            ],
            "price": 49.99
          },
          {
            "id": 3,
            "name": "Family Membership",
            "features": [
              "Access to gym facilities",
              "Cardio equipment usage",
              "Strength training equipment usage",
              "Locker room access",
              "Unlimited group fitness classes",
              "Personal trainer consultation",
              "Access for two adults and two children"
            ],
            "price": 79.99
          },
          {
            "id": 4,
            "name": "Student Membership",
            "features": [
              "Access to gym facilities",
              "Cardio equipment usage",
              "Strength training equipment usage",
              "Locker room access",
              "Valid student ID required"
            ],
            "price": 24.99
          }
        ]
      
      
return (
    <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4 mt-6 lg:mt-12 mx-[100px]">
        {
            priceOptions.map((option, idx)=><PriceOption key={idx} option={option}></PriceOption>)
        }
    </div>
);
};

PriceOptions.propTypes = {
    
};

export default PriceOptions;