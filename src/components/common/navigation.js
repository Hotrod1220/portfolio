
function Navigation() {
    return(
        <header className="sticky-header">
            <div id="home" className="primary-nav">
                <div className="container">
                    <a href="#home" className="logo">Tyrell Martens</a>
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