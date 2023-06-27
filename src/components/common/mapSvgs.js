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
import { ReactComponent as php } from "../../images/icons/php.svg";

function mapSvgs(dataList) {
    const logos = [python, c, sql, html, css, javascript, pytorch, mysql, googletest, reactjs, jquery, github, gitlab, vscode, unixcli, php]

    for (let j in dataList) {
        let title = dataList[j].title.toLowerCase().replace(/\s/g, '')
        title = title.charAt(0).toUpperCase() + title.slice(1)

        for (let k in logos) {
            if (title == 'C++') {
                title = 'C'
            }
            if ('Svg' + title == logos[k].render.name) {
                dataList[j].logo = logos[k]
                break;
            }
        }
    }
    return dataList
}

export default mapSvgs;