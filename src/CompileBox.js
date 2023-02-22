import React from 'react';

const CompileBox = () => {
    return (
        
        <div className='compile-box'>
            <div className="input-box">
                <textarea name="user-input" id="user-input"  />
            </div>
            <div className="output-box">
                <textarea name="user-output" id="user-output" />
            </div>
           
        </div>        
        
    );
};

export default CompileBox;
