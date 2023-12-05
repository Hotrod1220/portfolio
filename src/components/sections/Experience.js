import ListExperience from "../common/listEx";

const data = [
    {
        "title": "Research Assistant",
        "date": "May 2023 - Present",
        "employer": "University of Lethbridge",
        "description": [
            "Created dynamic and insightful visualizations of neural network neurons, unraveling the intricacies of complex data structures to enhance understanding and facilitate informed decision-making.",
            "Creation of neural networks using Python, PyTorch, and TorchAudio to perform auditory scene reverb classification.",
            "Utilized audio convolution to generate audio datasets with varying auditory scene characteristics.",
            "Preprocessing of audio datasets to perform spatial and spectral decomposition."
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