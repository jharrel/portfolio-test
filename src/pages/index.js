import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
// import Lightbox from 'react-images'
import Gallery from '../components/Gallery'

import thumb01 from '../assets/images/thumbs/01.jpg'
import thumb02 from '../assets/images/thumbs/02.jpg'
import thumb03 from '../assets/images/thumbs/03.jpg'
import thumb04 from '../assets/images/thumbs/04.jpg'
import thumb05 from '../assets/images/thumbs/05.jpg'
import thumb06 from '../assets/images/thumbs/06.jpg'

import full01 from '../assets/images/fulls/01.jpg'
import full02 from '../assets/images/fulls/02.jpg'
import full03 from '../assets/images/fulls/03.jpg'
import full04 from '../assets/images/fulls/04.jpg'
import full05 from '../assets/images/fulls/05.jpg'
import full06 from '../assets/images/fulls/06.jpg'

// Software
import ChatApp from '../assets/images/thumbs/ChatApp.jpg'
import ChatApp1 from '../assets/images/fulls/ChatApp.jpg'

import BookList from '../assets/images/thumbs/BookList.jpg'
import BookList1 from '../assets/images/fulls/BookList.jpg'

import EventFox from '../assets/images/thumbs/EventFox.jpg'
import EventFox1 from '../assets/images/fulls/EventFox.jpg'

import Instagram from '../assets/images/thumbs/Instagram.jpg'
import Instagram1 from '../assets/images/fulls/Instagram1.jpg'

import iPhone from '../assets/images/thumbs/iPhone.jpg'
import iPhone1 from '../assets/images/fulls/iPhone.jpg'

import Movies from '../assets/images/thumbs/MovieSite.jpg'
import Movies1 from '../assets/images/fulls/Movies.jpg'

import Sports from '../assets/images/thumbs/Sports.jpg'
import Sports1 from '../assets/images/fulls/Sports.jpg'

const DEFAULT_IMAGES = [
    { id: '1', source: ChatApp, thumbnail: ChatApp1, caption: 'Chat App', description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.'},
    { id: '2', source: BookList, thumbnail: BookList1, caption: 'Photo 2', description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.'},
    { id: '3', source: EventFox1, thumbnail: EventFox, caption: 'Photo 3', description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.'},
    { id: '4', source: Instagram1, thumbnail: Instagram, caption: 'Instagram', description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.'},
    { id: '5', source: iPhone1, thumbnail: iPhone, caption: 'Photo 5', description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.'},
    { id: '6', source: Movies1, thumbnail: Movies, caption: 'Photo 6', description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.'},
    { id: '7', source: Sports1, thumbnail: Sports, caption: 'Photo 6', description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.'}
];

class HomeIndex extends React.Component {

    render() {
        const siteTitle = "Gatsby Starter - Strata"
        const siteDescription = "Site description"

        return (
            <Layout>
                <Helmet>
                        <title>{siteTitle}</title>
                        <meta name="description" content={siteDescription} />
                </Helmet>

                <div id="main">

                    <section id="one">
                        <header className="major">
                            <h2>Welcome. </h2>
                        </header>
                        <p>This portfolio is a collection of work from ranging from software developement to creative service works. Contact me if you might have any questions as I am always looking for my next opportunity to grow. </p>
                        <ul className="actions">
                            <li><a href="https://drive.google.com/open?id=1d7ACAzOZgRgEAnqSvMIYhAWXxw7gH78g" className="button" target="_blank">View my resume</a></li>
                        </ul>
                    </section>

                    <section id="two">
                        <h2>Recent Work</h2>

                        <div className="image">
          <img src={EventFox1} alt="" />
        </div>

                        <div className="content">
          <h2>
            <a href="https://eventfox-management-app.herokuapp.com/" target="_blank">Eventfox Management</a>
          </h2>
          <h3>
            Created with Ruby on Rails // Bootstrap 4
          </h3>
          <p>
            A project management application allowing users to create tasks within individual projects. Users can see their individually assigned tasks and have the option to update them or delete them upon completion.
          </p>
        </div>

        <section id="two" className="wrapper alt style2">
      <section className="spotlight">
        <div className="image">
          <img src={EventFox1} alt="" />
        </div>
        <div className="content">
          <h2>
            <a href="https://eventfox-management-app.herokuapp.com/" target="_blank">Eventfox Management</a>
          </h2>
          <h5>
            Created with Ruby on Rails // Bootstrap 4
          </h5>
          <br />
          <p>
            A project management application allowing users to create tasks within individual projects. Users can see their individually assigned tasks and have the option to update them or delete them upon completion.
          </p>
        </div>
      </section>
      </section>








                        {/* <Gallery images={DEFAULT_IMAGES.map(({ id, source, thumbnail, caption, description }) => ({
                            source,
                            thumbnail,
                            caption,
                            description
                        }))} /> */}

                        <ul className="actions">
                            <li><a href="#" className="button">Full Portfolio</a></li>
                        </ul>
                    </section>

                    <section id="three">
                        <h2>Get In Touch</h2>
                        <p>Accumsan pellentesque commodo blandit enim arcu non at amet id arcu magna. Accumsan orci faucibus id eu lorem semper nunc nisi lorem vulputate lorem neque lorem ipsum dolor.</p>
                        <div className="row">
                            <div className="8u 12u$(small)">
                                <form method="post" action="mailto:jharreldesign@gmail.com">
                                    <div className="row uniform 50%">
                                        <div className="6u 12u$(xsmall)"><input type="text" name="name" id="name" placeholder="Name" /></div>
                                        <div className="6u 12u$(xsmall)"><input type="email" name="email" id="email" placeholder="Email" /></div>
                                        <div className="12u"><textarea name="message" id="message" placeholder="Message" rows="4"></textarea></div>
                                    </div>
                                </form>
                                <ul className="actions">
                                    <li><input type="submit" value="Send Message" /></li>
                                </ul>
                            </div>
                            <div className="4u 12u$(small)">
                                <ul className="labeled-icons">
                                    <li>
                                        <h3 className="icon fa-home"><span className="label">Address</span></h3>
                                        San Francisco, CA 94523<br />
                                        United States
                                    </li>
                                    <li>
                                        <h3 className="icon fa-mobile"><span className="label">Phone</span></h3>
                                        971-533-9640
                                    </li>
                                    <li>
                                        <h3 className="icon fa-envelope-o"><span className="label">Email</span></h3>
                                        <a href="mailto:jharreldesign@gmail.com" target="_blank">jharreldesign@gmail.com</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>

                </div>

            </Layout>

            
        )
    }
}

export default HomeIndex