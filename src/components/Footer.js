import React from 'react'

class Footer extends React.Component {
    render() {
        return (
            <div id="footer">
                <div className="inner">
                    <ul className="icons">
                        {/* <li><a href="#" className="icon fa-twitter"><span className="label">Twitter</span></a></li> */}
                        <li><a href="http://www.github.com/jharrel" className="icon fa-github" target="_blank"><span className="label" >Github</span></a></li>
                        {/* <li><a href="#" className="icon fa-dribbble"><span className="label">Dribbble</span></a></li> */}
                        <li><a href="mailto:jharreldesign@gmail.com" className="icon fa-envelope-o" target="_blank"><span className="label">Email</span></a></li>
                    </ul>
                    <ul className="copyright">
                        <li>&copy; Gatsby Starter Strata</li><li>Design: <a href="http://html5up.net">HTML5 UP</a></li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Footer
