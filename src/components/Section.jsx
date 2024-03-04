import '.././styles/style.css'

// Content can be array of experiences or plaintext
export default function Section({title, content, className}) {
    const plusClassname = "preview-row-content " + className
    return <>
        <div className="preview-row-section">
            <div className="preview-row-title">{title}</div>
            <div className={plusClassname}>
                {content}
            </div>
        </div>
    </>
}