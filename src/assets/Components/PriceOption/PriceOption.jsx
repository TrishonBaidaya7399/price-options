import PropTypes from 'prop-types';

const PriceOption = ({ option }) => {
  const { name, features, price } = option;

  return (
    <div className='border-2 border-gray-400 hover:border-blue-600 bg-gray-200 rounded-xl shadow-xl p-6 h-fit duration-[0.4s] hover:transform hover:translate-x-3 hover:-translate-y-3'>
      <h1 className='text-center'>
        <span className="text-6xl">{price}</span>
        <span className="text-2xl">/month</span>
      </h1>
      <h1 className='text-2xl my-3 font-semibold text-center'>
        {name}
      </h1>
      <h1>
        <ol style={{ listStyle: 'decimal' }}>
          {features.map((feature, index) => (
            <li key={index}>{index+1}. {feature}</li>
          ))}
        </ol>
      </h1>
      <button className='w-full btn btn-primary mt-4 hover:bg-white hover:text-gray-600 duration-300 hover:text-[16px] hover:font-bold'>Buy Now</button>
    </div>
  );
};

PriceOption.propTypes = {
  option: PropTypes.shape({
    name: PropTypes.string.isRequired,
    features: PropTypes.arrayOf(PropTypes.string).isRequired,
    price: PropTypes.number.isRequired,
  }),
};

export default PriceOption;
