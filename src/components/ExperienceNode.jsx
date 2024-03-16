import '.././styles/generalform.css';
import { useState } from 'react';

// Has an edit and delete button
// Somehow is tied to a key
export default function ExperienceNode({Experience}) {
    const [experience, setExperience] = useState(Experience)
    return <>
        {/* // Adds experience inputs with values filled in
        // Pressing the edit button w/ values edits, etc */}
        
        {Object.entries(Experience).map(([key, value]) => {
                return <div className="input-container">
                    <label htmlFor={key}>{key}</label>
                    <input type={key} id={key} name={key} placeholder={value}
                    onChange={function(event) 
                        {
                            console.log(experience)
                            setExperience(prevState => ({...prevState, [key]: event.target.value}))
                        }
                    }
                    />
                </div>
            })
        }
        <div className="flex-row">
            {/* Map experience with experiences, if it matches with id replace */}
            <button >Edit</button>
            <button>Delete</button>

        </div>
    </>
}