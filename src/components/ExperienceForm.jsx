import { useState } from 'react';
import '.././styles/generalform.css';
import { v4 as uuidv4 } from 'uuid';

const JobExperience = document.getElementById('job-experience')

export default function ExperienceForm({title, fields, changeExperiences, stateExperience}) {
    // The experience object, give it a key as it is added upwards
    const [experience, setExperience] = useState({})

    return <>
        <form className="form-section" onSubmit={(event) => {
                event.preventDefault();
                changeExperiences([...stateExperience, {...experience, id:uuidv4()}])}
            }>
            <div className="form-title">{title}</div>
            {fields.map(function (field) {
                // Underscore so it works with class selectors
                let field_ = field.replace(' ', '_');

                let type = 'text'
                if (field.startsWith('Date')) {type = 'date'}
                return <div className="input-container">
                <label htmlFor={field_}>{field}</label>
                <input type={type} id={field_} name={field_} required
                onChange={function(event) 
                    {
                        setExperience(prevState => ({...prevState, [field_]: event.target.value}))
                    }
                }
                />
            </div>
            }
            )}
            {/* Button to pass data to the parent experiences array */}
            <button type='submit'>Submit</button>
        </form>
        
    </>
}
