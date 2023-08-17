import React from 'react';
import { data } from '../data';
import SliderCard from './SliderCard';


const SliderCardContainer = ({ activeIndex }) => {
    return (
        <div className='w-full'>
            {data.map((item, index) => {
                return (
                    <div key={index} className="absolute text-center w-full h-full transition-transform duration-150" style={{
                        transform: `translateX(${100 * (index - activeIndex)}%)`,
                    }}>
                        <SliderCard {...item} />
                    </div>
                );
            })}
        </div>
    );
};

export default SliderCardContainer;