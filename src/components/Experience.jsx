import '.././styles/style.css'
import '.././styles/experience.css'

// A helper function that constructs a render from some data
// The parent would have an array of these, which are rendered on update
export default function Experience({title, datestart, dateend, workplace, descriptions, location}) {
    return <div className="job-container">
                <div className="bold-to-normal-row">
                    <div className="experience-bold-text">{title}</div>
                    <div>{datestart} to {dateend}</div>
                </div>
                <div className="bold-to-normal-row">
                    <div className="experience-bold-text">{workplace},</div>
                    <div>Long Island, NY</div>
                </div>
                <div className="description-container">
                    <div className="description-item"> {descriptions}</div>
                    <div className="description-item"> Stuff I didds</div>
                </div>
            </div>
}