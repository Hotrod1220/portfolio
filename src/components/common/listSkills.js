function ListSkills({ section, content }) {

    return (
        <div>
            <h3>{section}</h3>
            <ul>
                {content.map((skill) => (
                    <li key={skill.title}>
                        {skill.logo.render(skill.logo.$$typeof)}
                        <p>{skill.title}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ListSkills;