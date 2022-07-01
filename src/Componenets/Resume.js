import React, { useState } from "react";
import './ComponentStyles.css';
import Image from 'react-bootstrap/Image';


function Resmue() {

    return (
        <div id="resume" className="text-light blacksection font">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <p class="fs-4 titlestyle fw-bolder">EDUCATION</p>
                    </div>
                    <div className="col-md-8 abouttext">
                        <div className="row">
                            <span className="fs-5 fw-bold">Douglas College</span>
                            <p className="fw-lighter content">Post Graduation in Computer and Information System | December 2021</p>
                        </div>
                        <div className="row">
                            <span className="fs-5 fw-bold">Uka Tarsadia University</span>
                            <p className="fw-5 fw-lighter content">Bachelor of Technology in Information Technology | May 2019</p>

                        </div>
                    </div>
                </div>

                <hr></hr>
                <div className="row">
                    <div className="col-md-4">
                        <p class="fs-4 titlestyle fw-bolder">WORK</p>
                    </div>
                    <div className="col-md-8 abouttext">
                        <div className="row">
                            <span className="fs-5 fw-bold">Full-Stack Developer</span>
                            <p className="fw-normal content">Inspiro Infotech, India | July 2019 - October 2019</p>
                            <p className="fw-lighter content">Tech Stack: C#, JavaScript, jQuery, JSON, HTML, CSS, BootStrap, SQL, POSTMAN, Web API </p>
                        </div><hr></hr>
                        <div className="row">
                            <span className="fs-5 fw-bold">Web Developer</span>
                            <p className="fw-5 fw-normal content">IT Futurz, India | December 2018 - May 2019</p>
                            <p className="fw-lighter content">Tech Stack: C#, JavaScript, HTML, CSS, BootStrap, Visual Studio, SQL, POSTMAN, Web Services </p>
                        </div><hr></hr>
                        <div className="row">
                            <span className="fs-5 fw-bold">Web Developer Intern</span>
                            <p className="fw-5 fw-normal content">YashWorld Products PVT LTD, India | May 2018 - June 2019</p>
                            <p className="fw-lighter content">Tech Stack: PHP, CSS, HTML, Apache</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Resmue;