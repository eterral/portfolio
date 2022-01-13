import '../Contact/Contact.css'
export default function Contact() {
    return (
        <section id="contact">
        <div className="contact-container">
            
            <div className="contact-box-container">
                <p>elliott.terral@gmail.com</p>
            </div>
            <a href="https://www.linkedin.com/in/elliott-terral/" target="_blank">
            <div className="contact-box-container">
                <p>linkedin</p>
            </div>
            </a>
            <a href="https://github.com/eterral/" target="_blank">
            <div className="contact-box-container">
                <p>github</p>
            </div>
            </a>
            <div className="contact-box-container">
                <p>resume</p>
            </div>
        </div>
        </section>
    )
}
