import ListExperience from "../common/listEx";

const data = [
    {
        "title": "Research Assistant",
        "date": "May 2023 - Present",
        "employer": "University of Lethbridge",
        "description": [
            "Research was conducted on the cocktail party problem and head-related transfer functions to discover an efficient algorithm to separate acoustic signals into individual sources.",
            "Utilized audio convolution to generate audio datasets with varying auditory scene characteristics.",
            "Preprocessing of audio datasets to perform spatial and spectral decomposition.",
            "Creation of neural networks using Python, PyTorch, and TorchAudio to perform auditory scene reverb classification and phoneme classification."
        ]
    }
]

function Experience() {

    return (
        <section id="experience" className="container wrapper"> 
            <h1>Professional Experience</h1>
            {data.map((exp) => (
                <div key={exp.title}>
                    <ListExperience content={exp} />
                </div>
            ))}
        </section>
    );
}

export default Experience;