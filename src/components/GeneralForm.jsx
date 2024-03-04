import '.././styles/generalform.css';
import { useState } from 'react';

// The fields should contain an add and edit button if condition is met

export default function GeneralForm({title, fields}) { 
    return <>
        <div className="form-section">
            <div className="form-title">{title}</div>
            {fields.map(field => 
                <div className="input-container">
                    <label htmlFor={field}>{field}</label>
                    <input type="text" id={field} name={field}
                    onChange={(event) => ChangeField(field, event.target.value)}
                    />
                    
                </div>
            )}
        </div>
    </>
}

function ChangeField(field, text) {
    const fieldDOM = document.getElementsByClassName(field)[0];
    console.log(field)
    fieldDOM.innerHTML = text;
}