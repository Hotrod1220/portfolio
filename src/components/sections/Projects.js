import ProjectCard from '../common/projectCard';
import progress from '../../images/projects/progress.jpeg'
import waldo1 from '../../images/projects/waldo1.png'
import rock from '../../images/projects/rock.png'
import paper from '../../images/projects/paper.png'
import scissors from '../../images/projects/scissors.png'
import maze1 from '../../images/projects/maze1.png'
import maze2 from '../../images/projects/maze2.png'
import warriors1 from '../../images/projects/warriors1.png'
import warriors2 from '../../images/projects/warriors2.png'
import warriors3 from '../../images/projects/warriors3.png'
import raytracing1 from '../../images/projects/raytracing1.png'
import raytracing2 from '../../images/projects/raytracing2.png'
import raytracing3 from '../../images/projects/raytracing3.png'
import tydon from '../../images/projects/tydon.png'
import retrograde from '../../images/projects/retrograde.png'

const data = [
    {
        "title": "Digit Identification",
        "description": "Honours Thesis project that uses neural networks to identify all the handwritten digits present in an image.",
        "summary": "This project uses a convolutional neural network, the MNIST digit dataset, and object detection algorithms to identify the handwritten digits that are present on an image. It was created for my honours thesis during the 2023-2024 school year. Feel free to contact me regarding the project details or to receive my official thesis paper.",
        "tools": [
            {
                "title": "Python",
                "logo": "python.svg"
            },
            {
                "title": "PyTorch",
                "logo": "pytorch.svg"
            }
        ],
        "github": "https://github.com/Hotrod1220/Digit_Identification",
        "web": null,
        "images" : ["progress"],
        "highlight" : "large"
    },
    {
        "title": "TataLab",
        "description": "A website for TataLab, a robotics and auditory research lab at the University of Lethbridge.",
        "summary": "A website that was created for TataLab at the University of Lethbridge. They are a lab that focuses on robotics, auditory research and many other neuroscience fields. Feel free to contact me regarding details of the project.",
        "tools": [
            {
                "title": "ReactJS",
                "logo": "reactjs.svg"
            },
            {
                "title": "JavaScript",
                "logo": "javascript.svg"
            },
            {
                "title": "HTML",
                "logo": "html.svg"
            },
            {
                "title": "CSS",
                "logo": "css.svg"
            }
        ],
        "github": null,
        "web": "tatalab.ca",
        "images" : ["progress"],
        "highlight" : "large2"
    },
    {
        "title": "Where's Waldo",
        "description": "A project that detects and reveals the location of Waldo in an image.",
        "summary": "Where's Waldo is a program that uses a multi-task (convolution and linear regression tasks) neural network, to predict the location of Waldo in an image. The final accuracy was on average 90% for classification and 87% for the boundary box. Feel free to contact me regarding details of the project.",
        "tools": [
            {
                "title": "Python",
                "logo": "python.svg"
            },
            {
                "title": "PyTorch",
                "logo": "pytorch.svg"
            }
        ],
        "github": "https://github.com/Hotrod1220/waldo",
        "web": null,
        "images" : ["waldo1"],
        "highlight" : "vertical1"
    },
    {
        "title": "Rock Paper Scissors",
        "description": "Project that experiments with CSS animations and typographic design.",
        "summary": "The website is visualization of the clashing between rock, paper, and scissors. The rock crushes the scissors, the rock gets covered by the paper, and the paper gets cut by the scissors.",
        "tools": [
            {
                "title": "HTML",
                "logo": "html.svg"
            },
            {
                "title": "CSS",
                "logo": "css.svg"
            }
        ],
        "github": "https://github.com/Hotrod1220/ROCK-PAPER-SCISSORS",
        "web": "https://hotrod1220.github.io/ROCK-PAPER-SCISSORS/index.html",
        "images" : ["rock", "paper", "scissors"],
        "highlight" : "vertical2"
    },
    {
        "title": "V-I-R-U-S",
        "description": "Javascript maze game where the user must solve all puzzles to finish the game.",
        "summary": "The user is a virus that must explore the maze and solve the puzzles scattered around in order to open the door that leads outside the maze. Patience, and low sensitivity on your mouse, are needed to complete the game. UI and UX design principles were explored during the process.",
        "tools": [
            {
                "title": "JavaScript",
                "logo": "javascript.svg"
            },
            {
                "title": "jQuery",
                "logo": "jquery.svg"
            },
            {
                "title": "HTML",
                "logo": "html.svg"
            },
            {
                "title": "CSS",
                "logo": "css.svg"
            }
        ],
        "github": "https://github.com/Hotrod1220/V-I-R-U-S",
        "web": "https://hotrod1220.github.io/V-I-R-U-S/",
        "images" : ["maze1", "maze2"],
        "highlight" : "normal"
    },
    {
        "title": "Golden State Warriors",
        "description": "A website that shows the adversities that the Golden States Warriors overcame leading to their 2022 NBA championship.",
        "summary": "This website shows the timeline of the fall and rise of the 2022 Golden State Warriors. The journey is explored throughout the different key events that affected the Warriors, eventually leading to the 2022 playoff games that were played. Information design was explored during the process.",
        "tools": [
            {
                "title": "JavaScript",
                "logo": "javascript.svg"
            },
            {
                "title": "jQuery",
                "logo": "jquery.svg"
            },
            {
                "title": "HTML",
                "logo": "html.svg"
            },
            {
                "title": "CSS",
                "logo": "css.svg"
            }
        ],
        "github": "https://github.com/Hotrod1220/Warriors-2022",
        "web": "https://hotrod1220.github.io/Warriors-2022/",
        "images" : ["warriors1", "warriors2", "warriors3"],
        "highlight" : "normal"
    },
    {
        "title": "Ray Tracing Fundamentals",
        "description": "A website that goes through the fundamentals of the computer technology ray tracing. ",
        "summary": "Explore the fundamentals behind ray tracing. From the mathematics to different applications that demonstrate the astonishing affects of ray tracing.",
        "tools": [
            {
                "title": "HTML",
                "logo": "html.svg"
            },
            {
                "title": "CSS",
                "logo": "css.svg"
            }
        ],
        "github": "https://github.com/Hotrod1220/ray_tracing_fundamentals",
        "web": "https://hotrod1220.github.io/ray_tracing_fundamentals/",
        "images" : ["raytracing1", "raytracing2", "raytracing3"],
        "highlight" : "normal"
    },
    {
        "title": "Tydons Pizzeria",
        "description": "A website for a fictional pizzeria, that is able to manage employees, menu items and orders.",
        "summary": "Feeling hungry for a imaginary pizza? This website can add, edit and delete pizza orders, employees, and different menu items. This website properly checks for inputs to ensure no injection is possible.",
        "tools": [
            {
                "title": "SQL",
                "logo": "sql.svg"
            },
            {
                "title": "PHP",
                "logo": "php.svg"
            },
            {
                "title": "MySQL",
                "logo": "mysql.svg"
            }
        ],
        "github": "https://github.com/Hotrod1220/TydonsPizzeria",
        "web": null,
        "images" : ["tydon"],
        "highlight" : "normal"
    },
    {
        "title": "Retrograde",
        "description": "C++ text adventure game where you must solve the puzzles scattered across the map in order to solve the mystery.",
        "summary": "C++ text adventure game where the user must search a destroyed space station before losing all the oxygen in their suit. The action of picking up objects, removing items from you inventory, moving, and opening doors consumed the limited oxygen supply you have. Solve the mystery of what happened before you pass. Code was tested using Google Test.",
        "tools": [
            {
                "title": "C++",
                "logo": "c++.svg"
            },
            {
                "title": "GoogleTest",
                "logo": "googletest.svg"
            }
        ],
        "github": "https://github.com/Hotrod1220/text-adventure-game",
        "web": null,
        "images" : ["retrograde"],
        "highlight" : "normal"
    }
]

function Projects() {
    const images = [progress, progress, waldo1, rock, paper, scissors, maze1, maze2, warriors1, warriors2, warriors3, raytracing1, raytracing2, raytracing3, tydon, retrograde]
    let index = 0

    for (let project in data) {
        let proj_imgs = data[project].images
        
        for (let image in proj_imgs) {
            
            if (images[index].indexOf(proj_imgs[image]) !== -1) {
                proj_imgs[image] = images[index]
                index++
                index %= images.length
            }
        }
    }

    return(
        <section id="projects" className='projects container wrapper'>
            <h1>Projects</h1>
            <div className="three-grid">
                {data.map((content) => (
                    <ProjectCard content={content} key={content.title}/>
                ))}
            </div>
        </section>
    );
}

export default Projects;