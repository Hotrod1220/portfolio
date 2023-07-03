import { ReactComponent as LinkedIn } from '../../images/icons/linkedin.svg'
import { ReactComponent as Github } from "../../images/icons/github.svg";

function Contact() {
    return (
        <section id="contact" className="contact">
            <div className='container '>
                <h1>Contact</h1>
                <p>Want to get in touch, comment or critic my website? Feel free to send me a message.</p>
                <button className="button__text" onClick={() => window.location.href = 'mailto:tyrell.martens@hotmail.com'}> 
                    <p>Send an Email</p>
                </button><br/>
                <button onClick={() => window.location.href = 'https://github.com/Hotrod1220'}>
                    <Github/>
                </button>
                <button onClick={() => window.location.href = 'https://www.linkedin.com/in/tyrell-martens-014373241/'}>
                    <LinkedIn/>
                </button>
            </div>
        </section>
    );
}

export default Contact;