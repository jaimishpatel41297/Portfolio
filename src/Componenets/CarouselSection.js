import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import img1 from '../Images/img1.jpeg';
import img9 from '../Images/Img9.jpg';
import './ComponentStyles.css';
import Typewriter from 'typewriter-effect';


function CarouselSection() {

    var typewriter = new Typewriter({
        loop: true,
        delay: 75,
    });
    return (
        <Carousel fade >
            <Carousel.Item interval={1000}>
                <img
                    className="d-block w-100"
                    src={img9}
                    alt="Third slide"
                    style={{ height: 850 }}
                />
                <Carousel.Caption className="carouselcaptiontext">
                    <p className="carouselheading">JAIMISH PATEL</p>
                    <Typewriter
                        options={{
                            strings: ['Software Developer'],
                            autoStart: true,
                            loop: true,
                            delay: 100,
                            wrapperClassName: ['typerwritetext']
                        }}
                    />

                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={1000}>
                <img
                    className="d-block w-100"
                    src={img1}
                    alt="Third slide"
                    style={{ height: 850 }}
                />
                <Carousel.Caption className="carouselcaptiontext">
                    <p className="carouselheading">JAIMISH PATEL</p>
                    <Typewriter
                        options={{
                            strings: ['Software Developer'],
                            autoStart: true,
                            loop: true,
                            delay: 100,
                            wrapperClassName: ['typerwritetext']
                        }}
                    />
                </Carousel.Caption>
            </Carousel.Item>

        </Carousel>
    );
};

export default CarouselSection;