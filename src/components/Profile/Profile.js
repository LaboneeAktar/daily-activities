import React from 'react';
import profile from '../../images/profile.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

const Profile = () => {
    return (
        <div>
            <div className='d-flex'>
                <img src={profile} className="w-25" alt="" />
                <div className='ms-4 mt-3'>
                    <h6 className='fs-5'>Labonee Aktar Bejly</h6>
                    <p> <FontAwesomeIcon icon={faLocationDot}></FontAwesomeIcon> <span className='ps-2'>Nawabganj, Dinajpur</span></p>
                </div>
            </div>
            <div>
                <h5 className='text-center mt-3'>"Information"</h5>
                <div className='bg-white text-center p-4 rounded-3 shadow'>
                    <h5>Student</h5>
                    <p>Pundra University of Science & Technology <br /> Rangpur Road, Gokul, Bogura.</p>
                    <div className='info d-flex justify-content-around p-3 rounded-3'>
                        <span>
                            <h5>5.5</h5>
                            <p>Height</p>
                        </span>
                        <span>
                            <h5>45Kg</h5>
                            <p>Weight</p>
                        </span>
                        <span>
                            <h5>22yrs</h5>
                            <p>Age</p>
                        </span>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;