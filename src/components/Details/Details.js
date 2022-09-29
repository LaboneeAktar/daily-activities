import React from 'react';
import AddBreakTime from '../AddBreakTime/AddBreakTime';
import Profile from '../Profile/Profile';

const Details = () => {
    return (
        <div className='position-sticky top-0'>
            <Profile></Profile>
            <AddBreakTime></AddBreakTime>
        </div>
    );
};

export default Details;