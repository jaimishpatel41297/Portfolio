import React from "react";
import Button from 'react-bootstrap/Button';
import './ComponentStyles.css'

function Footer() {

    const handlechange = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (

        <footer id="sticky-footer" className="page-footer font-medium purple py-3 footer">
            <hr></hr>
            <div className="container text-center">
                <large>Jaimish Patel | Copyright &copy; 2022 All Rights Reserved </large>
                <Button variant="outline-light" style={{ position: 'absolute', right: 190, bottom: 35 }} onClick={handlechange}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-double-up" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M7.646 2.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 3.707 2.354 9.354a.5.5 0 1 1-.708-.708l6-6z" />
                        <path fill-rule="evenodd" d="M7.646 6.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 7.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z" />
                    </svg>
                </Button>
            </div>

        </footer>
    )
}

export default Footer;