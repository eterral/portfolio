import '../Contact/Contact.css'
import Pdf from '../../assets/Elliott_Terral_Resume.PDF'
export default function Contact() {
    return (
        <section id="contact">
        <div className="contact-container">
            
            <div className="contact-box-container">
                <p className='email'>elliott.terral@gmail.com</p>
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
            <a href={Pdf} target="_blank">
            <div className="contact-box-container">
                <p>resume</p>
            </div>
            </a>
        </div>
        </section>
    )
}
