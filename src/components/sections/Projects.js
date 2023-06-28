import ProjectCard from '../common/projectCard';
import useFetch from '../common/useFetch';
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

function Projects() {
    const {data, loading, error} = useFetch('http://localhost:8000/Projects')
    const images = [progress, progress, waldo1, rock, paper, scissors, maze1, maze2, warriors1, warriors2, warriors3, raytracing1, raytracing2, raytracing3, tydon, retrograde]
    let index = 0

    for (let project in data) {
        let proj_imgs = data[project].images
        
        for (let image in proj_imgs) {
            
            if (images[index].indexOf(proj_imgs[image]) != -1) {
                proj_imgs[image] = images[index]
                index++
                index %= images.length
            }
        }
    }

    return(
        <section id="projects">
            <h1>Projects</h1>
            {error && <div><p>There was an error: </p>{error.name}</div>}
            {loading && <p>Loading...</p>}
            {data &&
                <div>
                    {data.map((content) => (
                        <ProjectCard content={content} key={content.title}/>
                    ))}
                </div>
            }
        </section>
    );
}

export default Projects;