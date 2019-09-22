
import React from 'react';
import './footer.scss';
import footerDots from '../../assets/images/dots-footer.png';
import phoneIcon from '../../assets/images/phone.png';

const year= new Date().getFullYear();


export default props => {

    return (


        <div className= "footer">
            <img src={footerDots} className="footer-dots"/>
            <p className="center footer-text">Copyright &copy; {year} Sweet Corner. All rights reserved.</p>

        <div className= "footer">
            <img src={footerDots} className="footer-dots"/>
            <p className="center footer-text">Copyright &copy; 2019 Sweet Corner. All rights reserved.</p>

            <p className="footer-phone">
                <img src={phoneIcon}/>
                800.264.2099
            </p>
        </div>

    );

    }