import React from 'react';
import exampleImg from '../assets/exampleimg.png'

const Entertainment = () => {
    return (
        <main>
            <div className='flex-row justify-space-between'>
                <h1>Entertainment</h1>
            </div>
            <div className="flex-column justify-space-between">
                <section className="card">
                    <h1 className="card-header">Some Fun Entertainment Events</h1>
                    <div className="card-body">
                        <meat className="container">
                            <img src={exampleImg} className="my-3" style={{ width: "50%"}} alt="example"/>
                            <p>Some info about said event</p>
                        </meat>
                    </div>
                </section>

                <section className="card">
                    <h1 className="card-header">Some Fun Entertainment Events</h1>
                    <div className="card-body">
                    
                    </div>
                </section>

                <section className="card">
                    <h1 className="card-header">Some Fun Entertainment Events</h1>
                    <div className="card-body">

                    </div>
                </section>

                <section className="card">
                    <h1 className="card-header">Some Fun Entertainment Events</h1>
                    <div className="card-body">
                    
                    </div>
                </section>

                <section className="card">
                    <h1 className="card-header">Some Fun Entertainment Events</h1>
                    <div className="card-body">

                    </div>
                </section>
            </div>
        </main>
        );
}

export default Entertainment;