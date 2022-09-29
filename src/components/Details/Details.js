import React from 'react';
import AddBreakTime from '../AddBreakTime/AddBreakTime';
import Profile from '../Profile/Profile';

const Details = (props) => {
    const { activityTime } = props;
    return (
        <div className='mt-lg-5'>
            <Profile></Profile>
            <AddBreakTime activityTime={activityTime}></AddBreakTime>
        </div>
    );
};

export default Details;