import PropTypes from 'prop-types';
import { IoMdDoneAll } from "react-icons/io";
import { AwesomeButton } from 'react-awesome-button';
import 'react-awesome-button/dist/styles.css';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Plan = ({ offer }) => {
    const { name, description, price, features } = offer;

    // const [click, setClick] = useState(false);

    // const handleSubscribe = () => {
    //     setClick(!click)
    //     if(click){
            
    //     }
    // 
    
    const notify = () => toast("Succesfully subscribed to the plan");

    return (
        <div className='border-2 border-orange-500 rounded-2xl p-4 space-y-4 flex flex-col items-center'>

            <div className='text-center font-bold text-5xl p-2 text-blue-600'>
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
                        features.map((feature, idx) => <li key={idx} className='font-medium list-none flex items-center'><IoMdDoneAll className='mr-2 text-green-600'></IoMdDoneAll> {feature}</li>)
                    }
                </div>
            </div>


            <div className='w-full'>
                <AwesomeButton onMouseUp={notify} type="primary" className='w-full'>Subscribe Now</AwesomeButton>
            </div>

            <ToastContainer></ToastContainer>
        </div>
    );
};

Plan.propTypes = {
    offer: PropTypes.string
}

export default Plan;