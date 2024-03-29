import '.././styles/style.css'
import Experience from './Experience.jsx'
import Section from './Section.jsx'
import GeneralForm from './GeneralForm.jsx'
import ExperienceForm from './ExperienceForm.jsx'
import Education from './Education.jsx'
import { useState } from 'react'

// Contains the sidebar and cv mirrror
export default function App() {

    const [experiences, setExperiences] = useState([])
    const [educations, setEducations] = useState([])

    return <>
    <div className="sidebar">
        <div className="title">CV-BUILDER</div>
        <div className="form-container">
            <GeneralForm
                title='General Info'
                fields={['Full Name','Phone', 'Email', 'Website', 'Address']}
            ></GeneralForm>
            <ExperienceForm
                title='Work Experience'
                fields={['Company Name','Position','Location', 'Description', 'Date Start', 'Date End']}
                // Allow form fields to influence the preview by changing parent contents
                changeExperiences={function(experiences) {
                    setExperiences(experiences)
                }}
                stateExperience={experiences}
            >
            </ExperienceForm>
            <ExperienceForm
                title='Education'
                fields={['School','Degree', 'Field', 'Date Start', 'Date End']}
                changeExperiences={function(educations) {
                    setEducations(educations)
                }}
                stateExperience={educations}
            >
            </ExperienceForm>
        </div>
    </div>
    <div className="content">
        <div className="preview-container">
            <div className="preview-header">
                <div className="flex-row-center">
                    <div className="Full_Name">Your Name</div>
                </div>
                <div className="flex-row-center">
                    <div className="Phone">Phone</div>
                    <div className="Email">Email</div>
                    <div className="Website">Website</div>
                    <div className="Address">Address</div>
                </div>
            </div>
            <Section
                className="Summary_Statement"
                title = "Summary Statement"
                content= ''
            >
            </Section>
            <div className="preview-row-section">
                <div className="preview-row-title">Practical Experience</div>
                <div className="preview-row-content" id='job-experience'>
                    {experiences.map(function(experience) {
                        return <Experience key={experience.id}
                            title={experience.Position}
                            datestart={experience.Date_Start}
                            dateend={experience.Date_End}
                            workplace={experience.Company_Name}
                            descriptions={experience.Description}
                            location={experience.Location}
                        >    
                        </Experience>
                    })}
                </div>
            </div>

            <div className="preview-row-section">
                <div className="preview-row-title">Education</div>
                <div className="preview-row-content">
                {educations.map(function(education) {
                        return <Education key={education.id}
                            school={education.School}
                            field={education.Field}
                            degree={education.Degree}
                            datestart={education.Date_Start}
                            dateend={education.Date_End}
                        >    
                        </Education>
                    })}
                </div>
            </div>
            
        </div>
    </div>
    </>
}