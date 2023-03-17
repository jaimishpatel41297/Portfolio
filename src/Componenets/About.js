import React, { useState } from "react";
import avtar from '../Images/About.jpg';
import './ComponentStyles.css';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import resume from '../Documents/Jaimish-Patel-Resume-Full-Stack-Developer.pdf';

function About() {
    return (
        <div id="about" className="container section">
            <div className="row">
                <div className="col-md-1"></div>
                <div className="col-md-3">
                    <div className="card" style={{ border: 0 }}>
                        <Image src={avtar} style={{ borderRadius: 35 }} />
                    </div>
                </div>

                <div className="col-md-7 abouttext" >
                    <h5 className="fs-4" >ABOUT ME </h5>
                    <p className="fw-light lh-base">A full-stack developer with experience and knowledge to develop websites from scratch, handle backend, and deliver complex back-end and web applications
                        using various programming languages and technologies.</p>
                    <p className="fw-light lh-base">Proficient with a wide range of Frameworks, Languages and tools which include
                        JavaScript, jQuery, React.js, C#, Express.js, Node.js, ASP.NET MVC Core, HTML5, CSS3, PHP and , Git/Gulp,
                        Resful APIs, Database[Such as MongoDB, MYSQL], AWS, and Azure.</p>

                    <div className="mb-2 aboutbuttons"><Button variant="outline-dark" href="mailTo:pateljaimish629@gmail.com">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-lines-fill" viewBox="0 0 16 16">
                            <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5zm.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2z" />
                        </svg> Contact Me</Button>
                        <Button style={{ marginLeft: 15 }} variant="outline-dark" href={resume} download >
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-file-arrow-down-fill" viewBox="0 0 16 16">
                                <path d="M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM8 5a.5.5 0 0 1 .5.5v3.793l1.146-1.147a.5.5 0 0 1 .708.708l-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 1 1 .708-.708L7.5 9.293V5.5A.5.5 0 0 1 8 5z" />
                            </svg> Download Resume</Button>
                    </div>
                    <div className="col-md-1"></div>
                </div>
            </div>
        </div >
    )

}

export default About;
