import { useState } from 'react';
import '.././styles/generalform.css';
// Try and create a form object out of state?
// Add that object to the Experience Div via a button


const JobExperience = document.getElementById('job-experience')

export default function ExperienceForm({title, fields}) {
    // The experience object, give it a key as it is added upwards
    const [experience, setExperience] = useState({})

    return <>
        <div className="form-section">
            <div className="form-title">{title}</div>
            {fields.map(function (field) {
                // Underscore so it works with class selectors
                let field_ = field.replace(' ', '_');

                let type = 'text'
                if (field.startsWith('Date')) {type = 'date'}

                return <div className="input-container">
                <label htmlFor={field_}>{field}</label>
                <input type={type} id={field_} name={field_}
                onChange={function(event) 
                    {
                        setExperience(prevState => ({...prevState, [field_]: event.target.value}))
                        console.log(experience);
                    }
                }
                />
            </div>
            }
            )}
            <button>Submit</button>
            {/* Button which adds the object to the preview */}
        </div>
    </>
}