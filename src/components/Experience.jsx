import '.././styles/style.css'
import '.././styles/experience.css'
import changeDateFormat from '../changeDateFormat.js';

// A helper function that constructs a render from some data
// The parent would have an array of these, which are rendered on update
export default function Experience({title, datestart, dateend, workplace, descriptions, location}) {
    return <div className="job-container">
                <div className="bold-to-normal-row">
                    <div className="experience-bold-text">{title}, {workplace}</div>
                    <div>{changeDateFormat(datestart)} to {changeDateFormat(dateend)}</div>
                </div>
                <div className="bold-to-normal-row">
                    <div className="experience-bold-text">{location}</div>
                    <div>{Location}</div>
                </div>
                <div className="description-container">
                    <div className="description-item"> {descriptions}</div>
                </div>
            </div>
}