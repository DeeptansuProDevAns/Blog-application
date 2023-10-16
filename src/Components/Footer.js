import '../Css/Footer.css'

export function Footer(){
    return(
        <div className='site-footer'>
            <div className='container'>
                <div className='row'>
                    <div className='footer-icon'>
                        <div className='bi bi-twitter'></div>
                        <div className='bi bi-instagram'></div>
                        <div className='bi bi-facebook'></div>
                        <div className='bi bi-github'></div>
                    </div>
                    <div className='copywrite'>
                        <p>Copyright ©2023 All rights reserved | This template is made with  by Colorlib</p>
                    </div>
                    <div className='policy'>
                        <a href='#'>Terms & Conditions</a> /
                        <a href='#'> Privacy Policy</a>
                    </div>
                </div>

            </div>
        </div>
    )
} 