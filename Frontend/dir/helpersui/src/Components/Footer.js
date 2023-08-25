import React from "react";
import './Footer.css'; // Import the unique CSS file

const Footer = () => {
    return (
        <div className="big-footer">
            <div className="footer-content">
                <div className="contact-info">
                    <p>
                     <img src="https://firebasestorage.googleapis.com/v0/b/helpers--planet.appspot.com/o/pexels-sanket-mishra-16034402.jpg?alt=media&token=d046ee3e-d0af-428f-a697-afbd140e713c" alt="StaticImage" />
                        Donations play a pivotal role in driving positive change and creating a better world for all. By contributing to various causes, individuals and organizations have the power to address pressing issues, support those in need, and foster a sense of community. Donations fuel advancements in healthcare, education, environmental conservation, and social welfare, making a lasting impact on lives globally. Whether it's aiding disaster relief efforts, funding medical research, empowering underprivileged communities, or protecting endangered species, every donation, no matter the size, contributes to the collective effort of making our world a more equitable and sustainable place. Your generosity today can shape a brighter tomorrow for generations to come.
                    </p>
                </div>
                <div className="social-icons">
                    <img src="https://firebasestorage.googleapis.com/v0/b/helpers--planet.appspot.com/o/instagram.jpeg?alt=media&token=b9c64b14-6c15-4bec-ab44-e05597c936f8" alt="Instagram" onClick={()=>{
                        
                    }} />
                    <img src="https://firebasestorage.googleapis.com/v0/b/helpers--planet.appspot.com/o/facebook.jpeg?alt=media&token=a88492b1-859f-418c-aed2-abc646e3cdb4" alt="Facebook" />
                    <img src="https://firebasestorage.googleapis.com/v0/b/helpers--planet.appspot.com/o/twitter.jpeg?alt=media&token=e9008f70-8ebf-4f34-82bd-6a63a6592060" alt="Twitter" />
                    <img src="https://firebasestorage.googleapis.com/v0/b/helpers--planet.appspot.com/o/linkdin.jpeg?alt=media&token=38af825f-647c-487b-9d31-57b8d76d6188" alt="LinkedIn" />
                </div>
            </div>
        </div>
    );
}

export default Footer;