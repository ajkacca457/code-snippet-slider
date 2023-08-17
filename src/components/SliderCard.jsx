import React from 'react';
import { data } from '../data';

const SliderCard = () => {
    return (
        <>
            {data.map((item, index) => {
                return (
                    <div key={index} className={`absolute text-center w-2/3 left-1/2 transform -translate-x-1/2`}>
                        <img src={item.image} alt="image" className='mx-auto' />
                        <h4>Name : {" "}{item.first_name} {item.last_name}</h4>
                        <p>Email : {" "}{item.email}</p>
                        <p>Age : {" "}{item.age}</p>
                        <p>Gender : {" "}{item.gender}</p>
                    </div>
                );
            })}
        </>
    );
};

export default SliderCard;