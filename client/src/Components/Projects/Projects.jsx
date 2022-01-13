import '../Projects/Projects.css'
import git from '../../assets/gitlogo.png'
import linkimg from '../../assets/link.png'
import misunderstood from '../../assets/misunderstood.png'
import frntr from '../../assets/frntr.png'

export default function Projects() {
    return (
        <section id="projects">
        <div className='projects-container'>

            <div className='project'>
                <div className='project-box'>
                    <img src={misunderstood} />
                </div>
                <div className='project-info'>
                    <a>Misundestood is built on HTML, CSS and JS. The app accesses two public APIs to display a random New Yorker cartoon with a caption taken from a random line of poetry. </a>
                    <div className='project-links'>
                        <a href="https://github.com/eterral/misunderstood" target="_blank" ><img src={git} className='logo' /></a>
                        <a href="https://eterral.github.io/misunderstood/" target="_blank"><img src={linkimg} className='logo' /></a>
                    </div>
                </div>
            </div>
            <div className='project'>
            <div className='project-box'>
                    <img src={frntr} />
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
                    <a>Coming Soon</a>
                </div>
                <div className='project-info'>
                    <a> </a>
                </div>
            </div>
        </div>
        </section>
    )
}
