import ListSkills from '../common/listSkills';
import mapSvgs from '../common/mapSvgs';

function ProjectCard({content}) {
    var tools = mapSvgs(content.tools)
    let name = 'project-highlight-' + content.highlight

    return(
        <div className={name}>
            <div className="project">
                <img src={content.images[0]} alt={content.title} className="project__img"/>
                <div className="project__content">
                    <div>
                        <h3>{content.title}</h3>
                        <p>{content.description}</p>
                    </div>
                    <ListSkills section={null} content={tools}/>
                </div>
            </div>
        </div>
    );
}

export default ProjectCard;