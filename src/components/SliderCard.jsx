import React from 'react';

const SliderCard = ({ image, first_name, last_name, email, age, gender }) => {
    return (
        <>
            <img src={image} alt="image" className='mx-auto my-2' />
            <h4>Name : {" "}{first_name} {last_name}</h4>
            <p>Email : {" "}{email}</p>
            <p>Age : {" "}{age}</p>
            <p>Gender : {" "}{gender}</p>
        </>
    );
};

export default SliderCard;