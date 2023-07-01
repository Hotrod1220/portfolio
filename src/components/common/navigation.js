
function Navigation() {
    return(
        <header>
            <div className="sticky-header">
                <div id="home" className="primary-nav">
                    <a href="#home" className="logo">TM</a>
                    <nav>
                        <ul>
                            <li><a href="#skills">Technologies</a></li>
                            <li><a href="#experience">Experience</a></li>
                            <li><a href="#projects">Projects</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
}

export default Navigation;