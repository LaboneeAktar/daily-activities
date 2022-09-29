import { useState } from 'react';
import CalculateTime from '../TimeCalculate/CalculateTime';

const AddBreakTime = (props) => {
    const { activityTime } = props;
    const [breakTime, setBreakTime] = useState(0);

    const breakTimes = [
        { id: 111, value: 10 },
        { id: 222, value: 20 },
        { id: 333, value: 30 },
        { id: 444, value: 40 },
        { id: 555, value: 50 },
        { id: 666, value: 60 },
    ]
    const handleBreakTime = (value) => {
        setBreakTime(value);
    }
    return (
        <div>
            <h5 className='mx-3 my-4'>Add a Break</h5>
            <div className='bg-white p-4 rounded-3 shadow'>
                {
                    breakTimes.map(breakTime => <button onClick={() => handleBreakTime(breakTime.value)} className='btn btn-outline-danger mx-3 mt-2' key={breakTime.id}>{breakTime.value}m</button>)
                }
            </div>
            <CalculateTime
                activityTime={activityTime}
                handleBreakTime={handleBreakTime}
                breakTime={breakTime}
            ></CalculateTime>
        </div>
    );
};

export default AddBreakTime;