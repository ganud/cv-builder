import '.././styles/style.css'
import Experience from './Experience.jsx'
import Section from './Section.jsx'
import GeneralForm from './GeneralForm.jsx'
// Contains the sidebar and cv mirrror
export default function App() {
    return <>
    <div className="sidebar">
        <div className="title">CV-BUILDER</div>
        <div className="form-container">
            <GeneralForm
                title='General Info'
                fields={['Full Name','Phone', 'Email', 'Website', 'Address']}
            ></GeneralForm>
        </div>
    </div>
    <div className="content">
        <div className="preview-container">
            {/* Start with a header
            Have rows of resume column components, with inputtable text */}
            <div className="preview-header">
                <div className="flex-row-center">
                    <div className="Full_Name">Jone Jonesy</div>
                </div>
                <div className="flex-row-center">
                    <div className="Phone">stuff</div>
                    <div className="Email">stuff</div>
                    <div className="Website">stuff</div>
                    <div className="Address">stuff</div>
                </div>
            </div>
            <Section
                className="Summary_Statement"
                title = "Summary Statement"
                content= 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, odio voluptas! Magni optio nesciunt voluptatem tempora consequuntur perferendis, ipsum molestias enim, minima sapiente quasi, necessitatibus eum? Fugit soluta quo necessitatibus.'
            >
            </Section>
            <div className="preview-row-section">
                <div className="preview-row-title">Practical Experience</div>
                <div className="preview-row-content">
                    <Experience></Experience>
                    <Experience></Experience>
                    <Experience></Experience>
                </div>
            </div>
            <div className="preview-row-section">
                <div className="preview-row-title">Education</div>
                <div className="preview-row-content">
                    <Experience></Experience>
                    <Experience></Experience>
                    <Experience></Experience>
                </div>
            </div>
            
        </div>
    </div>
    </>
}