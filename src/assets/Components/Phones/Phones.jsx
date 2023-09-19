// import PropTypes from 'prop-types';

import axios from "axios";
import { useEffect, useState } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

const Phones = () => {
    const [phones, setPhones]=useState([])
    // get api link from programming hero github -> broken phone -> example api
    // fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
    // .then(res => res.json())
    // .then(data => console.log('Fetch data: ',data.data))
    // Axios will automatically convert data to json
    useEffect(()=>{
        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
        .then(data => {
            const phoneData= data.data.data;
            const phonesWithFakeData= phoneData.map(phone=>{
                const obj={
                    name: phone.phone_name,
                    price: parseInt(phone.slug.split('-')[1]),
                }
                console.log(obj);
                return obj;
            })
            setPhones(phonesWithFakeData)
        })
    },[])
    // again
    // .then(data => console.log(data.data))
    // // again
    // .then(data => console.log(data.data.data))
    return (
        <div className="flex flex-col items-center md:my-12 bg-gray-200 p-12 mx-[auto] w-max rounded-xl shadow-2xl border-2 border-gray-300">
             <h1 className='text-4xl text-gray-600 font-bold md:mb-6'>iPhones Price</h1>
        <BarChart width={1200} height={400} data={phones} margin={{ top: 20, right: 30, left: 30, bottom: 5 }} >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis dataKey="price"/>
          <Bar dataKey="price" fill="#8884d8" barSize={20}/>
          <Tooltip/>
        </BarChart>

        </div>
    );
};

Phones.propTypes = {
    
};

export default Phones;