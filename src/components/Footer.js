import React from 'react';

const Footer = () => {
    return (
        <footer>
            <p>AST</p>
            <p>AST brings smiles to the faces of everyone we touch. We create new surprises for people to enjoy together.</p>
            <div className="social-icons">
                <a href="#"><i className="fab fa-facebook"></i></a>
                <a href="#"><i className="fab fa-twitter"></i></a>
                <a href="#"><i className="fab fa-instagram"></i></a>
            </div>
            <p className="copyright">Copyright By AST</p>
            <div className="scroll-top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                &#8679;
            </div>
        </footer>
    );
};

export default Footer;