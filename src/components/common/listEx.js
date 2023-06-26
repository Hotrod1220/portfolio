
function ListExperience({content}) {

    return(
        <div>
            <div>
                <h3>{content.title}</h3>
                <p>{content.date}</p>
                <p>{content.employer}</p>
            </div>
            <div>
                <ul>
                    {content.description.map((entry) => (
                        <li key={entry}>{entry}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default ListExperience;