import React, { useEffect, useState } from 'react';
import Choose from '../ChooseEnginner/Choose';
import Engineer from '../Engineer/Engineer';
import './Employee.css'

const Employee = () => {
    const [employees, setEmployees] = useState([]);
    const [engineer, setEngineer] = useState([]);
    //Load data
    useEffect(() => {
        fetch('./data.JSON')
            .then(res => res.json())
            .then(data => setEmployees(data))
    }, [])

    //Handle Button
    const contactNow = (employee) => {
        const chooseEnginner = [...engineer, employee];
        setEngineer(chooseEnginner)
    }

    return (
        <div className='employee-body'>
            {/* Websie Details  */}
            <div className='site-details'>
                <h3>Welcome to Programmer Hub! There is lots of engineer from various countries & various field of expertise. If you have any problem then feel free you can contact with us according to your problem & You want to hire someone then you can hire from Programmer Hub.</h3>
                <h3>Total: $100K</h3>
            </div>
            <div className='employee'>
                <div className='employee-container'>

                    {
                        employees.map(employee =>
                            <Engineer
                                key={employee.id}
                                employee={employee}
                                contactNow={contactNow}
                            >
                            </Engineer>)
                    }
                </div>
                <div className='select-employee'>
                    <Choose engineer={engineer} ></Choose>
                </div>
            </div>

        </div>
    );
};

export default Employee;