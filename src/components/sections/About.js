import Photo from "../../images/suit.jpg"

function About() {
    return (
        <section className="about" id="about">
            <div className="container">
                <h1 className="margin-bottom-zero">About</h1>
                <div className="two-grid">
                    <div className="about__content wrapper">
                        <h2>Hi, I am <span>Tyrell Martens</span></h2>
                        <p>I am a <span>computer science student</span> at the University of Lethbridge set to graduate spring 2024.</p>
                        <p>
                            I have a passion for all things computer science with a particular fascination for <span>machine learning,
                            data science and full-stack development.</span> I strive to relentlessly pursue excellence in every aspect of my life.
                        </p>
                    </div>
                    <div className="wrapper">
                        <img className="about__img" src={Photo} alt="Tyrell Martens" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;