import React, { useEffect, useState } from 'react';
import Activity from '../Activity/Activity';
import Details from '../Details/Details';
import Header from '../Header/Header';
import './Activities.css';

const Activities = () => {
    const [activities, setActivities] = useState([]);
    const [activityTime, setActivityTime] = useState(0);

    useEffect(() => {
        fetch('fakeData.json')
            .then(res => res.json())
            .then(data => setActivities(data))
    }, [])


    const handleAddToList = (time) => {
        let newActivityTime = 0
        newActivityTime = activityTime + time;
        setActivityTime(newActivityTime);
    }

    return (
        <div>
            <div className="row">
                <div className='col-lg-9 col-md-12 col-12 mb-5'>
                    <Header></Header>
                    <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 m-3 px-5'>
                        {
                            activities.map(activity => <Activity
                                activity={activity}
                                key={activity._id}
                                handleAddToList={handleAddToList}
                            ></Activity>)
                        }
                    </div>
                </div>

                <div className='col-lg-3 col-md-12 col-12 details-container'>
                    <Details
                        activityTime={activityTime}
                    ></Details>
                </div>
            </div>
        </div>
    );
};

export default Activities;