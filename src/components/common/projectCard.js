import {useState} from 'react';
import mapSvgs from '../common/mapSvgs';
import ListSkills from '../common/listSkills';
import Modal from 'react-bootstrap/Modal';
import Carousel from 'react-bootstrap/Carousel';
import VisitSite from '../../images/icons/visitsite.png';
import { ReactComponent as BackArrow } from '../../images/icons/arrow-left.svg';
import { ReactComponent as Github } from '../../images/icons/github.svg';

function ProjectCard({content}) {
    const [show, setShow] = useState(false)
    const [index, setIndex] = useState(0)
    var tools = mapSvgs(content.tools)
    const name = 'project-highlight-' + content.highlight

    function handleSelect(index) {
        setIndex(index)
    }

    return(
        <div className={name}>
            <div onClick={() => setShow(true)}>
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
            <Modal className='modal' size='lg' show={show} onHide={() => setShow(false)}>
                <Modal.Body className='container wrapper'>
                    <div className="modal__title">
                        <BackArrow className="modal__arrow" onClick={() => setShow(false)}/>
                        <h1>{content.title}</h1>
                    </div>
                    <div className='four-grid modal__content'>
                        <div>
                            <Carousel activeIndex={index} onSelect={handleSelect}>
                                {content.images.map((img) => (
                                    <Carousel.Item>
                                        <img className="modal__img" src={img} alt={content.title}/>
                                    </Carousel.Item>
                                ))}
                            </Carousel>
                            <div className="modal__summary">
                                <h3>Summary</h3>
                                <p>{content.summary}</p>
                            </div>
                        </div>
                        <div className="modal__extra">
                            <div>
                                <ListSkills section={"Modal"} content={tools}/>
                            </div>
                            <div className="modal__links">
                                <h3>Links</h3>
                                {content.github ? (
                                    <a href={content.github} target="_blank" rel="noopener noreferrer">
                                        <Github/>
                                        <p>Github</p>
                                    </a>
                                ) : null}
                                {content.web ? (
                                    <a href={content.web} target="_blank" rel="noopener noreferrer">
                                        <img src={VisitSite} alt="Website Link"/>
                                        <p>Visit Site</p>
                                    </a>
                                ) : null}
                            </div>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </div>
    );
}

export default ProjectCard;