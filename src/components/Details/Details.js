import React from 'react';
import Profile from '../Profile/Profile';
import TimeCalculate from '../TimeCalculate/TimeCalculate';

const Details = () => {
    return (
        <div className='position-sticky top-0'>
            <Profile></Profile>
            <TimeCalculate></TimeCalculate>
        </div>
    );
};

export default Details;