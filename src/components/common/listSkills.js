import BrowserRouter from 'react';

function ListSkills({ section, content }) {
    var name, grid;
    if (section === null) {
        name = "projects__content__tools"
    } else if (section === "Modal") {
        section = "Tools"
        name = "three-grid__style modal__list"
        grid = "two-grid"
    } else {
        name = "three-grid__style"
        grid = "two-grid"
    }

    return (
        <div className={name}>
            <h3>{section}</h3>
            <ul>
                {content.map((skill) => (
                    <li key={skill.title} className={grid}>
                        {/* <BrowserRouter basename=""> */}
                            {console.log(skill)}
                            {/* {skill.logo.render(skill.logo.$$typeof)} */}
                            <p>{skill.title}</p>
                        {/* </BrowserRouter> */}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ListSkills;