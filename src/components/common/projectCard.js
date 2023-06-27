import ListSkills from '../common/listSkills';
import mapSvgs from '../common/mapSvgs';

function ProjectCard({content}) {
    var tools = mapSvgs(content.tools)

    return(
        <div>
            <div>
                <img src={content.images[0]} alt="Project Image"/>
            </div>
            <div>
                <h3>{content.title}</h3>
                <p>{content.description}</p>
                <ListSkills section={null} content={tools}/>
            </div>
        </div>
    );
}

export default ProjectCard;