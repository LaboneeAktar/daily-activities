import React from 'react';

const QAnswer = () => {
    return (
        <div className='container mt-lg-5 pt-5 pb-5'>
            <h1 className='text-center text-danger pb-4'>All Question Answers</h1>
            <div>
                <h4 className='fw-bold'>1. How Does React Work?</h4>
                <h5>Answer:</h5>
                <p><strong> React: </strong> React is not a framework. It is a JavaScript Library for building user interface. It's developed by Facebook.</p>
                <p>Whenever a component's state changes, code is re rendered by DOM, and browser has to repaint each and every element on the screen. This involves a lot of mathematical and other calculations.
                    Initally, virtual DOM will be an exact copy of real DOM.
                    In React, whenever a components' state changes, the changes are reflected in Virtual DOM.
                    Thus, Virtual DOM has the updated state of the component. The Render phase takes JSX and turns it into a javascript representation. This is nothing but the VirtualDOM. React goes through its virtual DOM ,creates a list of those changes that need to be made to the actual DOM and then does it all in one single process.</p>
            </div>
            <div className='py-5'>
                <h4 className='fw-bold'>2. Write dowm the Differences Between props and state.</h4>
                <h5 className='pb-3'>Answer:</h5>
                <table className="table text-center border">
                    <thead>
                        <tr>
                            <th scope="row">Number</th>
                            <th scope="col">Props</th>
                            <th scope="col">State</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1.</th>
                            <td>The Data is passed from one component to another.</td>
                            <td>The Data is passed within the component only.</td>
                        </tr>
                        <tr>
                            <th scope="row">2.</th>
                            <td>It is Immutable.</td>
                            <td>It is Mutable.</td>
                        </tr>
                        <tr>
                            <th scope="row">3.</th>
                            <td>Props can be used with state and functional components.</td>
                            <td>State can be used only with the state components/class component.</td>
                        </tr>
                        <tr>
                            <th scope="row">4.</th>
                            <td>Props are read-only.</td>
                            <td>State is both read and write.</td>
                        </tr>

                    </tbody>
                </table>
            </div>
            <div>
                <h4 className='fw-bold'>3. Write down the Uses of useEffect.</h4>
                <h5>Answer:</h5>
                <p><strong> The useEffect Hook Usages: </strong></p>
                <p className='ps-5'>1. Side Effect runs after every render. <br />
                    2. Side Effect runs only once after initial render. <br />
                    3. Side Effect runs after state value changes. <br />
                    4. Side Effect runs after props value change.
                </p>
            </div>

        </div>
    );
};

export default QAnswer;