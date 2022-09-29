import React from 'react';

const Activity = (props) => {
    console.log(props.activity);
    const { picture, title, about, time } = props.activity;
    return (
        <div>
            <div className="card" style={{ height: '400px' }}>
                <img src={picture} className="card-img-top img-fluid" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="/" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
    );
};

export default Activity;