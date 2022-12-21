import React from 'react';
import exampleImg from '../assets/exampleimg.png'

const Entertainment = () => {
    return (
        <main>
            <div className='flex-row justify-space-between'>
                <h1>Entertainment</h1>
            </div>
            <div className="flex-column justify-space-between p-3">
                <section className="card">
                    <h1 className="card-header">Some Fun Entertainment Events</h1>
                    <div className="card-body">
                        <meat className="container flex-row justify-space-between">
                            <img src={exampleImg} className="display-inline" style={{ width: "40%"}} alt="example"/>
                            <p className="flex-row">Some info about said event</p>
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