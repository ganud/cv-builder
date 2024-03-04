import '.././styles/style.css'
import '.././styles/experience.css'

// Multiple instances may into preview div content
// Experience contains general info in emphasis, and an array of desciptions
export default function Experience({title, datestart, dateend, workplace, descriptions}) {
    return <>
        <div className="job-container">
            <div className="bold-to-normal-row">
                <div className="experience-bold-text">Human Resources</div>
                <div>07/2017 to 03/2021</div>
            </div>
            <div className="bold-to-normal-row">
                <div className="experience-bold-text">Meta,</div>
                <div>Long Island, NY</div>
            </div>
            <div className="description-container">
                <div className="description-item"> Stuff I didddd</div>
                <div className="description-item"> Stuff I didds</div>

            </div>
        </div>
    </>
}