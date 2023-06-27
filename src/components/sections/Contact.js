
function Contact() {
    return (
        <section>
            <h1>Contact</h1>
            <p>Want to get in touch, comment or critic my website? Feel free to send me a message.</p>
            <button onClick={() => window.location.href = 'mailto:tyrell.martens@hotmail.com'}> 
                Send me an Email
            </button>
        </section>
    );
}

export default Contact;