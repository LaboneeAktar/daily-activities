import React, { useEffect, useState } from 'react';
import Activity from '../Activity/Activity';
import Header from '../Header/Header';

const Activities = () => {
    const [activities, setActivities] = useState([]);

    useEffect(() => {
        fetch('fakeData.json')
            .then(res => res.json())
            .then(data => setActivities(data))
    }, [])

    return (
        <div>
            <div className="row">
                <div className='col-8'>
                    <Header></Header>
                    {
                        activities.map(activity => <Activity
                            activity={activity}
                            key={activity._id}
                        ></Activity>)
                    }
                </div>

                <div className='col-4'>
                    <h1>Details</h1>
                </div>
            </div>
        </div>
    );
};

export default Activities;