import React from 'react';
import logo from '../../images/logo.png';

const Header = () => {
    return (
        <div>
            <div className='d-flex px-5 pt-5'>
                <img className='' style={{ height: "50px", width: '50px' }} src={logo} alt="" />
                <h1 className='text-danger ps-4'>Daily Activities</h1>
            </div>
            <h4 className='px-5 py-3 ms-5'><strong>Select Today's Activity</strong></h4>
        </div>
    );
};

export default Header;