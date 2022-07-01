import React from "react";
import ProgressBar from 'react-bootstrap/ProgressBar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Jslogo from '../Images/JS.png';
import JQlogo from '../Images/JQ.png';
import Reactlogo from '../Images/React.png';
import Nodelogo from '../Images/NODE.jpg';
import Csharplogo from '../Images/Csharp.jpg';
import Sqllogo from '../Images/SQL.png';
import HtmlCsslogo from '../Images/HTCSS.png';
import Gitlogo from '../Images/Git.png';


function Skills() {
    return (
        <div className="container section font skillayout" id="skills">
            <Card className="skillcard">
                <Card.Body>
                    <Card.Title className="fw-bold fs-3">TOP SKILLS</Card.Title>
                    <Card.Text>

                        <Row style={{ marginTop: 20 }}>
                            <Col xs md={{ span: 2, offset: 2 }}>
                                <Card className="skillcardeach">
                                    <Card.Text className="fs-6"></Card.Text>
                                    <Card.Img src={Jslogo} />
                                    <Card.Text className="fs-6">
                                        Java Script
                                    </Card.Text>
                                </Card>
                            </Col>
                            <Col xs md={2}><Card className="skillcardeach">
                                <Card.Text className="fs-6"></Card.Text>
                                <Card.Img src={Reactlogo} />
                                <Card.Text className="fs-6">
                                    ReactJS
                                </Card.Text>
                            </Card></Col>
                            <Col xs md={2}>
                                <Card className="skillcardeach">
                                    <Card.Text className="fs-6"></Card.Text>
                                    <Card.Img src={Csharplogo} />
                                    <Card.Text className="fs-6">
                                        C#
                                    </Card.Text>
                                </Card></Col>
                            <Col xs md={2}><Card className="skillcardeach">
                                <Card.Text className="fs-6"></Card.Text>
                                <Card.Img src={Nodelogo} />
                                <Card.Text className="fs-6">
                                    NodeJS/Express
                                </Card.Text>
                            </Card></Col>


                        </Row>

                        <Row style={{ marginTop: 20 }}>

                            <Col xs md={{ span: 2, offset: 2 }} ><Card className="skillcardeach">
                                <Card.Text className="fs-6"></Card.Text>
                                <Card.Img src={Sqllogo} />
                                <Card.Text className="fs-6">
                                    Microsoft SQL server
                                </Card.Text>
                            </Card></Col>
                            <Col xs md={2}>
                                <Card className="skillcardeach">
                                    <Card.Text className="fs-6"></Card.Text>
                                    <Card.Img src={JQlogo} />
                                    <Card.Text className="fs-6">
                                        jQuery
                                    </Card.Text>
                                </Card></Col>
                            <Col xs md={2}><Card className="skillcardeach">
                                <Card.Text className="fs-6"></Card.Text>
                                <Card.Img src={HtmlCsslogo} />
                                <Card.Text className="fs-6">
                                    HTML/CSS
                                </Card.Text>
                            </Card></Col>
                            <Col xs md={2}><Card className="skillcardeach">
                                <Card.Text className="fs-6"></Card.Text>
                                <Card.Img src={Gitlogo} />
                                <Card.Text className="fs-6">
                                    GIT
                                </Card.Text>
                            </Card></Col>
                        </Row>


                        {/* <Row style={{ marginTop: 20 }}>
                            <Col className="fs-6" md={{ span: 2, offset: 1 }}>JavaScrip/jQuery</Col>
                            <Col md={8}><ProgressBar variant="dark" now={90} striped /></Col>
                        </Row> */}
                    </Card.Text>
                </Card.Body>
            </Card>
        </div >
    )
}

export default Skills;