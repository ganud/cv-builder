import '.././styles/generalform.css';
import { useState } from 'react';

// The fields should contain an add and edit button if condition is met

export default function GeneralForm({title, fields}) { 
    return <>
        <div className="form-section">
            <div className="form-title">{title}</div>
            {fields.map(function (field) {
                // Underscore so it works with class selectors
                let field_ = field.replace(' ', '_')

                return <div className="input-container">
                <label htmlFor={field_}>{field}</label>
                <input type="text" id={field_} name={field_}
                onChange={(event) => ChangeField(field_, event.target.value)}
                />
            </div>
            }
            )}
            <div className="input-container">
                <label htmlFor="Summary_Statement">Summary Statement</label>
                <textarea name="Summary_Statement" id="Summary_Statement" cols="20" rows="5"
                    onChange={(event) => ChangeField('Summary_Statement', event.target.value)}
                ></textarea>
                
            </div>
        </div>
    </>
}

// Changes the preview text of a field, provided the field name and the preview's class name are the same
function ChangeField(field, text) {
    const fieldDOM = document.getElementsByClassName(field)[0];
    fieldDOM.textContent = text;
}