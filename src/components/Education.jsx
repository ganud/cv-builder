import '.././styles/style.css'
import '.././styles/experience.css'
import changeDateFormat from '../changeDateFormat.js';

// A helper function that constructs a render from some data
// The parent would have an array of these, which are rendered on update
export default function Education({school, degree, field, dateend, datestart}) {
    return <div className="job-container">
                <div className="bold-to-normal-row">
                    <div className="experience-bold-text">{school}</div>
                    <div>{changeDateFormat(datestart)} to {changeDateFormat(dateend)}</div>
                </div>
                <div className="bold-to-normal-row">
                    <div className="experience-bold-text">{degree},</div>
                    <div>{field}</div>
                </div>
            </div>
}