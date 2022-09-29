import React from 'react';
import Swal from 'sweetalert2';

const CalculateTime = ({ activityTime, breakTime }) => {

    const handleToast = () => {
        Swal.fire(
            'Good job!',
            'Your Activity is Completed!',
            'success'
        )
    }

    return (
        <div>
            <h5 className='mx-3 my-4'>Activity Details</h5>
            <div className='bg-white p-4 rounded-3 shadow mb-2'>
                <h5>Activity Time : <span className='ms-2 text-muted'>{activityTime} Minutes</span></h5>
            </div>
            <div className='bg-white p-4 rounded-3 shadow mb-4'>
                <h5>Break Time : <span className='ms-4 text-muted'>{breakTime} Minutes </span></h5>
            </div>
            <div className='text-center'>
                <button onClick={handleToast} className='btn btn-danger px-lg-5 py-lg-2 ms-lg-4 ms-md-5 ms-5'>Activity Complete</button>
            </div>
        </div >
    );
};

export default CalculateTime;