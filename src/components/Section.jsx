import '.././styles/style.css'

// Content can be array of experiences or plaintext
export default function Section({title, content}) {
    return <>
        <div className="preview-row-section">
            <div className="preview-row-title">{title}</div>
            <div className="preview-row-content">
                {content}
            </div>
        </div>
    </>
}