import React from 'react';

const Activity = (props) => {
    console.log(props.activity);
    const { picture, title, about, time } = props.activity;
    return (
        <div>
            <div className="card" style={{ height: '430px' }}>
                <img src={picture} className="card-img-top img-fluid" alt="..." />
                <div className="card-body">
                    <h5 className="card-title fw-bold">{title}</h5>
                    <p className="card-text">{about.slice(0, 100) + '...'}</p>
                    <h6><strong>Time Required:</strong> {time} min</h6>
                    <div className=''>
                        <button className='btn btn-danger px-lg-5 py-lg-2 position-absolute bottom-0 ms-lg-4 ms-md-5 ms-5'>Add to List</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Activity;