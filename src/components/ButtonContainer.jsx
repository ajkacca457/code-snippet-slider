import React from 'react';

const ButtonContainer = () => {
    return (
        <div className='absolute bottom-10  left-1/2 transform -translate-x-1/2 flex w-1/2 justify-between'>
            <button className='w-fit bg-slate-600 text-white px-4 py-2'>Prev</button>
            <button className='w-fit bg-slate-600 text-white px-4 py-2'>Next</button>
        </div>
    );
};

export default ButtonContainer;