import React from 'react';

const TimeCalculate = () => {
    const breakTimes = [
        { id: 111, time: 10 },
        { id: 222, time: 20 },
        { id: 333, time: 30 },
        { id: 444, time: 40 },
        { id: 555, time: 50 },
        { id: 666, time: 60 },
    ]
    return (
        <div>
            <h4 className='mx-3 my-4'>Add a Break</h4>
            <div className='bg-white p-4 rounded-3 shadow'>
                {
                    breakTimes.map(breakTime => <button className='btn btn-outline-danger mx-3 mt-2' key={breakTime.id}>{breakTime.time}m</button>)
                }
            </div>
        </div>
    );
};

export default TimeCalculate;