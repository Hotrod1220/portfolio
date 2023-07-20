import ListSkills from '../common/listSkills';
import { ReactComponent as python } from "../../images/icons/python.svg";
import { ReactComponent as c } from "../../images/icons/c++.svg";
import { ReactComponent as sql } from "../../images/icons/sql.svg";
import { ReactComponent as html } from "../../images/icons/html.svg";
import { ReactComponent as css } from "../../images/icons/css.svg";
import { ReactComponent as javascript } from "../../images/icons/javascript.svg";
import { ReactComponent as pytorch } from "../../images/icons/pytorch.svg";
import { ReactComponent as mysql } from "../../images/icons/mysql.svg";
import { ReactComponent as googletest } from "../../images/icons/googletest.svg";
import { ReactComponent as reactjs } from "../../images/icons/reactjs.svg";
import { ReactComponent as jquery } from "../../images/icons/jquery.svg";
import { ReactComponent as github } from "../../images/icons/github.svg";
import { ReactComponent as gitlab } from "../../images/icons/gitlab.svg";
import { ReactComponent as vscode } from "../../images/icons/vscode.svg";
import { ReactComponent as unixcli } from "../../images/icons/unixcli.svg";

const data = {
    "Languages": [
        {
            "title": "Python",
            "logo": python
        },
        {
            "title": "C++",
            "logo": c
        },
        {
            "title": "SQL",
            "logo": sql
        },
        {
            "title": "HTML",
            "logo": html
        },
        {
            "title": "CSS",
            "logo": css
        },
        {
            "title": "JavaScript",
            "logo": javascript
        }
    ],
    "Frameworks": [
        {
            "title": "PyTorch",
            "logo": pytorch
        },
        {
            "title": "MySQL",
            "logo": mysql
        },
        {
            "title": "GoogleTest",
            "logo": googletest
        },
        {
            "title": "ReactJS",
            "logo": reactjs
        },
        {
            "title": "jQuery",
            "logo": jquery
        }
    ],
    "Tools": [
        {
            "title": "Github",
            "logo": github
        },
        {
            "title": "GitLab",
            "logo": gitlab
        },
        {
            "title": "VS Code",
            "logo": vscode
        },
        {
            "title": "UNIX CLI",
            "logo": unixcli
        }
    ]
}

function Skills() {

    return (
        <section className="skills container wrapper" id="skills">
            <h1>Technologies</h1>
            <div className="three-grid">
                <div>
                    <ListSkills section="Languages" content={data.Languages} />
                </div>
                <div>
                    <ListSkills section="Frameworks" content={data.Frameworks} />
                </div>
                <div>
                    <ListSkills section="Tools" content={data.Tools} />
                </div>
            </div>
        </section>
    );
}

export default Skills;