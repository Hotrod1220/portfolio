import Photo from '../../images/suit.jpg'

function About() {
    return(
        <section>
            <div>
                <h1>Hi, I am Tyrell Martens</h1>
                <p>
                    I am a computer science student at the University of Lethbridge set to graduate spring 2024. 
                    I have a passion for all things computer science with a particular fascination for machine learning, 
                    data science and full-stack development. I strive to relentlessly pursue excellence in every aspect of my life.
                </p>
            </div>
            <div>
                <img src={Photo} alt='Tyrell Martens'/>
            </div>
        </section>
    );
}

export default About;