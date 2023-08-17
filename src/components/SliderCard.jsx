import React from 'react';
import { data } from '../data';


const SliderCard = ({ activeIndex }) => {
    return (
        <div className='w-full'>
            {data.map((item, index) => {
                return (
                    <div key={index} className="absolute text-center w-full h-full transition-transform duration-150" style={{
                        transform: `translateX(${100 * (index - activeIndex)}%)`,
                    }}>
                        <img src={item.image} alt="image" className='mx-auto' />
                        <h4>Name : {" "}{item.first_name} {item.last_name}</h4>
                        <p>Email : {" "}{item.email}</p>
                        <p>Age : {" "}{item.age}</p>
                        <p>Gender : {" "}{item.gender}</p>
                    </div>
                );
            })}
        </div>
    );
};

export default SliderCard;