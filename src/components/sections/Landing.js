import { useState, useEffect } from 'react';

let index = 0

function Landing() {
    const data = [
        "Excellent team member!",
        "We can always count on you to lighten the mood in the workplace.",
        "Leadership from Tyrell was marvelous.",
        "Pure passion in what he does.",
        "Makes those better around him, just with his presence",
        "Always goes the extra mile.",
        "'Relentless pursuit of excellence', Wow Tyrell is wordy.",
        "The best Tyrell Martens I know!",
        "I like to think people thought these things... just a joke",
        "I wonder if anyone is gonna read this."
    ]
    const [comments, setComments] = useState(data[0])

    useEffect(() => {
        setTimeout(() => {
            index++
            index %= 10
            setComments(data[index])
        }, 8000)
    }, [comments])

    return (
        <section>
            <div>
                <h1><span>Ty</span>rell Martens</h1>
            </div>
            <div>{comments}</div>
        </section>
    );
}

export default Landing;