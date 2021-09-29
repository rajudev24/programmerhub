import React from 'react';
import './Choose.css'

const Choose = (props) => {
    const {engineer} = props
    let total = 0;
    for (const choose of engineer){
        total = total + parseFloat(choose.income);
    }
    return (
        <div className='select-engineer'>
            <h3>Select Employee</h3>
                <h4>Select No of Enginner: {props.engineer.length} </h4>
                {
                    engineer.map( select =>
                        <h5 className ='engineer-list'>
                            Enginner Name: {select.fullName} </h5>
                         )
                }
                <h3>Total: ${total} </h3>
                

        </div>
    );
};

export default Choose;