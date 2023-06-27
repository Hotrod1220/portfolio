import ListExperience from "../common/listEx";
import useFetch from "../common/useFetch";

function Experience() {
    const { data, loading, error } = useFetch('http://localhost:8000/Experience')
    return (
        <section> 
            <h1>Professional Experience</h1>
            {error && <div><p>There was an error: </p>{error.name}</div>}
            {loading && <p>Loading...</p>}
            {data &&
                data.map((exp) => (
                    <div key={exp.title}>
                        <ListExperience content={exp} />
                    </div>
                ))
            }
        </section>
    );
}

export default Experience;