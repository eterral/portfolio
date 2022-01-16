import '../Skills/Skills.css'
import css from '../../assets/css.png'
import django from '../../assets/django.png'
import express from '../../assets/express.png'
import html from '../../assets/html.png'
import js from '../../assets/js.png'
import node from '../../assets/node.png'
import postgres from '../../assets/postgres.png'
import python from '../../assets/python.png'
import reactimg from '../../assets/react.png'

export default function Skills() {
    return (
        <div id='skills'>
        <div className='skills-container'>
            <div className='full-box'>
                <h3>Languages</h3>
                <div className='skills-box-container'>
                    <div className='skill-box'>
                        <img src={js} className='skill-img' />
                        <a>Javascript</a>
                    </div>
                    <div className='skill-box'>
                        <img src={postgres} className='skill-img' />
                        <a>Postgres</a>
                    </div>
                    <div className='skill-box'>
                        <img src={python} className='skill-img' />
                        <a>Python</a>
                    </div>
                    <div className='skill-box'>
                        <img src={html} className='skill-img' />
                        <a>HTML5</a>
                    </div>
                    <div className='skill-box'>
                        <img src={css} className='skill-img2' />
                        <a>CSS3</a>
                    </div>
                </div>
            </div>
            <div className='full-box'>
                <h3>Frameworks</h3>
                <div className='skills-box-container'>
                    <div className='skill-box'>
                        <img src={django} className='skill-img' />
                        <a>Django</a>
                    </div>
                    <div className='skill-box'>
                        <img src={express} className='skill-img' />
                        <a>Express</a>
                    </div>
                    <div className='skill-box'>
                        <img src={node} className='skill-img' />
                        <a>Node.js</a>
                    </div>
                    <div className='skill-box'>
                        <img src={reactimg} className='skill-img' />
                        <a>React</a>
                    </div>
                </div>
            </div>
            <div className='full-box'>
                <h3>Other Skills</h3>
            <div className='skills-box-container'>
                <a>RESTful APIs, VSCode, Git, Github, NPM, Postman, Agile</a>
            </div>
            </div>
        </div>
        </div>
    )
}
