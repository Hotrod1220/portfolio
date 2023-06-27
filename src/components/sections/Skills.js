import useFetch from '../common/useFetch';
import ListSkills from '../common/listSkills';
import mapSvgs from '../common/mapSvgs';

function Skills() {
    const { data, loading, error } = useFetch('http://localhost:8000/Knowledge')

    if (data != null) {
        var languages = mapSvgs(data.Languages)
        var frameworks = mapSvgs(data.Frameworks)
        var tools = mapSvgs(data.Tools)
    }
    return (
        <section>
            <h1>Technologies</h1>
            {error && <div><p>There was an error: </p>{error.name}</div>}
            {loading && <p>Loading...</p>}
            {data &&
                <div>
                    <div>
                        <ListSkills section="Languages" content={languages} />
                    </div>
                    <div>
                        <ListSkills section="Frameworks" content={frameworks} />
                    </div>
                    <div>
                        <ListSkills section="Tools" content={tools} />
                    </div>
                </div>
            }
        </section>
    );
}

export default Skills;