import React, { useState } from 'react';
import CalculateTime from '../TimeCalculate/CalculateTime';

const AddBreakTime = (props) => {
    const { activityTime } = props;
    const [time, setTime] = useState(0);
    const breakTimes = [
        { id: 111, time: 10 },
        { id: 222, time: 20 },
        { id: 333, time: 30 },
        { id: 444, time: 40 },
        { id: 555, time: 50 },
        { id: 666, time: 60 },
    ]

    const handleBreakTime = () => {
        const newTime = [...breakTimes, time];
        setTime(newTime);
    }

    return (
        <div>
            <h5 className='mx-3 my-4'>Add a Break</h5>
            <div className='bg-white p-4 rounded-3 shadow'>
                {
                    breakTimes.map(breakTime => <button onClick={handleBreakTime} className='btn btn-outline-danger mx-3 mt-2' key={breakTime.id}>{breakTime.time}m</button>)
                }
            </div>
            <div className='bg-white p-4 rounded-3 shadow mb-4'>
                <h5 className='fs-6'>Break Time : </h5>
            </div>
            <CalculateTime activityTime={activityTime}></CalculateTime>
        </div>
    );
};

export default AddBreakTime;