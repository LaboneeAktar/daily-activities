import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckSquare } from '@fortawesome/free-solid-svg-icons';

const Activity = (props) => {
    // console.log(props.activity);
    const { picture, title, about, time } = props.activity;
    return (
        <div>
            <div className="card shadow-lg" style={{ height: '430px' }}>
                <img src={picture} className="card-img-top img-fluid" alt="..." />
                <div className="card-body">
                    <h5 className="card-title fw-bold">{title}</h5>
                    <p className="card-text">{about.slice(0, 100) + '...'}</p>
                    <p><strong>Time Required:</strong> {time} min</p>
                    <div className=''>
                        <button className='btn btn-danger px-lg-5 py-lg-2 position-absolute bottom-0 ms-lg-4 ms-md-5 ms-5'><span className='pe-2'>Add to List</span> <span>
                            <FontAwesomeIcon icon={faCheckSquare}></FontAwesomeIcon>  </span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Activity;