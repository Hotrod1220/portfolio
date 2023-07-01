import { useState, useEffect } from 'react';
import { ReactComponent as DownArrow } from '../../images/icons/chevron-bottom.svg';

let index = 0

function Landing() {
    const data = [
        "Excellent team member!",
        "Leadership from Tyrell was marvelous.",
        "Pure passion in what he does.",
        "The best Tyrell Martens I know!",
        "Makes those better around him, just with his presence.",
        "Always goes the extra mile.",
        "Always willing to learn everything he can.",
        "\"Relentless pursuit of excellence\", Wow Tyrell is wordy.",
        "Always bringing positivity to the workplace.",
        "Great at following orders and handling criticism - my wife",
        "These are all made up... just a joke",
        "Shows up early, goes above and beyond, stays late. We're lucky to have him.",
        "I wonder if anyone is gonna read this."
    ]
    const [comments, setComments] = useState([data[0], data[1], data[2]])

    useEffect(() => {
        setTimeout(() => {
            index += 3
            setComments([
                data[index % data.length],
                data[(index + 1) % data.length],
                data[(index + 2) % data.length]
            ])
        }, 8000)
    }, [comments])

    return (
        <section id="home" className="container landing">
            <div className="landing__title">
                <h1><span>Ty</span>rell<br/>Martens</h1>
            </div>
            <div className="landing__comments">
                <p id="comment1">{comments[0]}</p>
                <p id="comment2">{comments[1]}</p>
                <p id="comment3">{comments[2]}</p>
            </div>
            <DownArrow className="landing__arrow"/>
        </section>
    );
}

export default Landing;