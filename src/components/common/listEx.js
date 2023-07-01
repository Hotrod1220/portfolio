import { useState, useEffect } from 'react';
import { ReactComponent as ToggleArrow} from '../../images/icons/chevron-right.svg';

function ListExperience({content}) {
    const [display, setDisplay] = useState('none')
    const [color, setColor] = useState('var(--white)')
    const [animation, setAnimation] = useState('')
    const [direction, setDirection] = useState('normal')

    function handleClick() {
        setDisplay(display === 'none' ? 'block' : 'none')
        setColor(color === 'var(--white)' ? 'var(--lightsecondary)' : 'var(--white)')
        setAnimation('arrowClick')
        setDirection(direction === 'normal' ? 'reverse' : 'normal')
    }

    return(
        <div className="toggle-menu">
            <div className="toggle-menu__title" style={{color:color}} onClick={handleClick}>
                <div>
                    <h3>{content.title}</h3>
                    <p>{content.employer}</p>   
                </div>
                <div>
                    <p>{content.date}</p>
                    <div className="toggle-arrow">
                        <ToggleArrow className="arrowSvg" style={
                            {fill:color,
                            'animationName': animation,
                            'animationDirection':direction}
                        }/>
                    </div>
                </div>
            </div>
            <div className="toggle-menu__content" style={{display:display}}>
                <ul>
                    {content.description.map((entry) => (
                        <li key={entry}><p>{entry}</p></li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default ListExperience;