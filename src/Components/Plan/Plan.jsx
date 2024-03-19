import PropTypes from 'prop-types';

const Plan = ({ offer }) => {
    const { name, description, price, features } = offer;
    return (
        <div className='border-2 border-orange-500 rounded-2xl p-4 space-y-4 flex flex-col items-center'>

            <div className='text-center font-bold text-4xl p-2 text-orange-600'>
                {price}
            </div>

            <div className='p-2 bg-orange-500 rounded-2xl text-white w-1/2'>
                <h1 className='text-center text-3xl font-bold'>{name}</h1>
            </div>

            <div className='text-center font-medium text-lg p-2'>
                {description}
            </div>

            <div className='text-lg flex flex-col items-center flex-grow'>
                <div className=''>
                    {
                        features.map((feature, idx) => <li key={idx} className='font-medium'>{feature}</li>)
                    }
                </div>
            </div>


            <button className='btn items-center w-full bg-orange-500 text-white'>Subscribe Now</button>
        </div>
    );
};

Plan.propTypes = {
    offer: PropTypes.string
}

export default Plan;