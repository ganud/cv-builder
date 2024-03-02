import '.././styles/style.css'
import Experience from './Experience.jsx'
// Contains the sidebar and cv mirrror
export default function App() {
    return <>
    <div className="sidebar">

    </div>
    <div className="content">
        <div className="preview-container">
            {/* Start with a header
            Have rows of resume column components, with inputtable text */}
            <div className="preview-header">
                <div className="flex-row-center">
                    Jone Jonesy
                </div>
                <div className="flex-row-center">
                    <div className="div">stuff</div>
                    <div className="div">stuff</div>
                    <div className="div">stuff</div>
                    <div className="div">stuff</div>
                </div>
            </div>
            <div className="preview-row-section">
                <div className="preview-row-title">Summary Statement</div>
                <div className="preview-row-content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, odio voluptas! Magni optio nesciunt voluptatem tempora consequuntur perferendis, ipsum molestias enim, minima sapiente quasi, necessitatibus eum? Fugit soluta quo necessitatibus.</div>
            </div>
            <div className="preview-row-section">
                <div className="preview-row-title">Practical Experience</div>
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