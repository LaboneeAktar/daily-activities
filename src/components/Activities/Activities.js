import React, { useEffect, useState } from 'react';
import Activity from '../Activity/Activity';
import Details from '../Details/Details';
import Header from '../Header/Header';
import './Activities.css';

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
                <div className='col-lg-9 col-md-12 col-12'>
                    <Header></Header>
                    <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 m-3 px-5'>
                        {
                            activities.map(activity => <Activity
                                activity={activity}
                                key={activity._id}
                            ></Activity>)
                        }
                    </div>
                </div>

                <div className='col-lg-3 col-md-12 col-12 details-container position-relative'>
                    <Details></Details>
                </div>
            </div>
        </div>
    );
};

export default Activities;