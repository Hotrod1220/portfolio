import useFetch from '../common/useFetch'
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

function Skills() {
    const { data, loading, error } = useFetch('http://localhost:8000/Knowledge')

    if (data != null) {
        var languages = data.Languages
        var frameworks = data.Frameworks
        var tools = data.Tools
        const allSkills = [languages, frameworks, tools]
        const logos = [python, c, sql, html, css, javascript, pytorch, mysql, googletest, reactjs, jquery, github, gitlab, vscode, unixcli]
        let logoIndex = 0

        for (let i = 0; i < allSkills.length; i++) {
            let skillsList = allSkills[i]

            for (let j = 0; j < skillsList.length; j++) {
                let title = skillsList[j].title.toLowerCase().replace(/\s/g, '')
                title = title.charAt(0).toUpperCase() + title.slice(1)

                for (let k = 0; k < logos.length; k++) {
                    if (logos[k].render.name == 'SvgC') {
                        title = 'C'
                    }
                    if ('Svg' + title == logos[k].render.name) {
                        skillsList[j].logo = logos[logoIndex]
                        logoIndex++
                        break;
                    }
                }
            }
        }
    }

    return (
        <section>
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