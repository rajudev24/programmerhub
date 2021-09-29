import React from 'react';
import './Engineer.css'

const Engineer = (props) => {
    const { fullName, email, country, img, income, role } = props.employee;

    return (
        <div className='engineer-container'>
            <div className='image'>
                <img src={img} alt="" />
            </div>
            <div className='engineer-details'>
                <h2>Name: {fullName} </h2>
                <h4>Job Position: {role} </h4>
                <h4>Email: {email} </h4>
                <h4> Country: {country} </h4>
                <h4> Salary: ${income} </h4>
                <button onClick={() => props.contactNow(props.employee)} className='enginner-btn fas fa-phone-alt'> Hire Now</button>
                <span className='social-account'>Follow: <i className=" social-account fab fa-linkedin fa-2x"></i>  <i className="fab fa-github fa-2x"></i></span>
            </div>
        </div>
    );
};

export default Engineer;
