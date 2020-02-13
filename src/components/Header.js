import React from 'react'

import Footer from './Footer'
import avatar from '../assets/images/avatar.jpg'

class Header extends React.Component {
    render() {
        return (
            <header id="header">
                <div className="inner">
                    <a href="#" className="image avatar"><img src={avatar} alt="" /></a>
                    <h1>Hello, my name is <strong>Jason Harrel</strong>, and I am a full-stack, graphic design and video editor.</h1>
                </div>
                <Footer />
            </header>
        )
    }
}

export default Header
