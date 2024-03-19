import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Bcharts = () => {

    const plans = [
        {
            "name": "Starter Plan",
            "price": 29.99
        },
        {
            "name": "Silver Plan",
            "price": 49.99
        },
        {
            "name": "Gold Plan",
            "price": 79.99
        },
        {
            "name": "Student Plan",
            "price": 24.99
        },
        {
            "name": "Family Plan",
            "price": 99.99
        },
        {
            "name": "Corporate Plan",
            "price": 80
        }
    ]

    return (
        <div className='flex justify-center'>
            <div className='p-4 border-2'>
                <h1 className='text-center text-xl font-semibold text-red-500 p-3'>Price plan at a glans</h1>
                <BarChart width={900} height={400} data={plans}>
                    <CartesianGrid></CartesianGrid>
                    <Tooltip></Tooltip>
                    <Legend></Legend>
                    <XAxis dataKey={'name'} className='font-semibold'></XAxis>
                    <YAxis></YAxis>
                    <Bar dataKey={'price'} fill='#900C3F'></Bar>
                </BarChart>
            </div>
        </div>
    );
};

export default Bcharts;