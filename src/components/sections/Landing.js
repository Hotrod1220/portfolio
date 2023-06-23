import useFetch from "../common/useFetch";

function Landing() {
    const temp = useFetch('http://localhost:8000/Knowledge')
    console.log(temp)

    return (
        <section>
            <div>
                <h1>Tyrell Martens</h1>
            </div>
        </section>
    );
}

export default Landing;