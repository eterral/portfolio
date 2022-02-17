import '../Projects/Projects.css'
import git from '../../assets/gitlogo.png'
import linkimg from '../../assets/link.png'
import misunderstood from '../../assets/misunderstood.png'
import frntr from '../../assets/frntr.png'
import realistsocialism from '../../assets/realistsocialism.png'
import { useState } from 'react'

export default function Projects() {
    return (
        <section id="projects">
            <div className='projected'>
                <div className='space'>
                    
                </div>
                <div className='projects-container'>
                    <div className='project'>
                        <div className='project-box'>
                            <img src={realistsocialism} className='image'/>
                        </div>
                        <div className='project-info'>
                            <a>Realist Socialism is a database of film posters and films from Central Eastern Europe. The front end is built in Node and React while the backend is Django and Postgresql. The front-end is deployed on Netlify and the back-end Heroku. Users need an account for full CRUD but anyone can read from the database</a>
                            <div className='project-links'>
                                <a href="https://github.com/eterral/realist-socialism" target="_blank" ><img src={git} className='logo' /></a>
                                <a href="https://unruffled-pike-ae83af.netlify.app/" target="_blank"><img src={linkimg} className='logo' /></a>
                            </div>
                        </div>
                    </div>
                    <div className='project'>
                        <div className='project-box'>
                            <img src={frntr} className='image'/>
                        </div>
                        <div className='project-info'>
                            <a>frntr is a proof of concept web store. Built on the MERN stack, the app features unit testing of CRUD routes in the backend, association between the schemas in the database and hand-rolled authentication. Work is still in progress to build out a review system and role based access to CRUD</a>
                            <div className='project-links'>
                                <a href="https://github.com/eterral/frntr-app" target="_blank" ><img src={git} className='logo' /></a>
                                <a href="https://frntr.netlify.app" target="_blank"><img src={linkimg} className='logo' /></a>
                            </div>
                        </div>
                    </div>
                    <div className='project'>
                        <div className='project-box'>
                            <img src={misunderstood} className='image'/>
                        </div>
                        <div className='project-info'>
                            <a>Misunderstood is built on HTML, CSS and JS. The app accesses two public APIs to display a random New Yorker cartoon with a caption taken from a random line of poetry. A favorite combination can be saved to local storage and a user can make a caption before seeing a cartoon.</a>
                            <div className='project-links'>
                                <a href="https://github.com/eterral/misunderstood" target="_blank" ><img src={git} className='logo' /></a>
                                <a href="https://eterral.github.io/misunderstood/" target="_blank"><img src={linkimg} className='logo' /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
