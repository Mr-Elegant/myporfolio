import AboutImage from '../../assets/about.png'
import CV from '../../assets/cv.pdf'
import {HiDownload} from 'react-icons/hi'
import data from './data'
import Card from '../../components/Card'
import './about.css'

const About = () => {
  return (
    <section id="about" data-aos="fade-in">
        <div className="container about__container">
            <div className="about__left">
                <div className="about__portrait">
                    <img src={AboutImage} alt="" />
                </div>
            </div>
            <div className="about__right">
                <h2>About Me</h2>
                <div className="about__cards">
                    {
                        data.map(item => (
                            <Card key={item.id} className="about__card">
                                <span className='about__card-icon'>{item.icon}</span>
                                <h5>{item.title}</h5>
                                <small>{item.desc}</small>
                            </Card>
                        ))
                    }
                </div>
                <p>
                Building projects and upskilling myself is in my nature , I'm always motivated to do more!
                </p>
                <p>
                Hi, my name is Preet karwal from Haryana, India. I am a highly motivated and results-driven Full Stack Developer specializing in the MERN stack, with over two years of professional experience. I have a strong foundation in full-stack development, including proficiency in MongoDB, Express.js, React, and Node.js, and have successfully developed and deployed dynamic web applications and Well aware about Web application vulnerabilities involve a system flaw or weakness in a web-based application and their preventions to get your business online the right way, giving you industry-standard design and all the functionality you need to operate smoothly online. Get in touch today with the details of your project let's get started! Check out my resume below!
                </p>
                <a href={CV} download className='relative inline-flex items-center justify-center p-3.5 mb-2 me-2 overflow-hidden text-sm font-large text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800'>Download Resume  <HiDownload/></a>
            </div>
        </div>
    </section>
  )
}

export default About