import ListSkills from '../common/listSkills';
import mapSvgs from '../common/mapSvgs';

const data = {
    "Languages": [
        {
            "title": "Python",
            "logo": "python.svg"
        },
        {
            "title": "C++",
            "logo": "c++.svg"
        },
        {
            "title": "SQL",
            "logo": "sql.svg"
        },
        {
            "title": "HTML",
            "logo": "html.svg"
        },
        {
            "title": "CSS",
            "logo": "css.svg"
        },
        {
            "title": "JavaScript",
            "logo": "javascript.svg"
        }
    ],
    "Frameworks": [
        {
            "title": "PyTorch",
            "logo": "pytorch.svg"
        },
        {
            "title": "MySQL",
            "logo": "mysql.svg"
        },
        {
            "title": "GoogleTest",
            "logo": "googletest.svg"
        },
        {
            "title": "ReactJS",
            "logo": "reactjs.svg"
        },
        {
            "title": "jQuery",
            "logo": "jquery.svg"
        }
    ],
    "Tools": [
        {
            "title": "Github",
            "logo": "github.svg"
        },
        {
            "title": "GitLab",
            "logo": "gitlab.svg"
        },
        {
            "title": "VS Code",
            "logo": "vscode.svg"
        },
        {
            "title": "UNIX CLI",
            "logo": "unixcli.svg"
        }
    ]
}

function Skills() {
    var languages = mapSvgs(data.Languages)
    var frameworks = mapSvgs(data.Frameworks)
    var tools = mapSvgs(data.Tools)

    return (
        <section className="skills container wrapper"id="skills">
            <h1>Technologies</h1>
            <div className="three-grid">
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
        </section>
    );
}

export default Skills;