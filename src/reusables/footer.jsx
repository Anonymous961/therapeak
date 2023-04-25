import './styles/footer.css';
import {Link} from 'react-router-dom';

const Foot = () => {
    return ( 
        <div className="container-fluid foot">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <a href="#upper-land-page" style={{textDecoration:"none"}}>
                            <img src="https://i.postimg.cc/YSrf7DV9/therapeak-Logo.png" alt="" /> <h2 style={{marginTop:"1.5rem"}}>| Therapeak</h2>
                        </a>
                    </div>
                    <div className="col">
                        <h3>Our Sponsors</h3>
                        <br />
                        <p>lego</p>
                        <p>McDonald’s</p>
                        <p>Dell</p>
                        <p>KaufLand</p>
                    </div>
                    <div className="col">
                        <h3>Resources</h3>
                        <br />
                        <p>Resources</p>
                        <p>Help & Support</p>
                        <p>Reviews</p>
                        <p>Community</p>
                    </div>
                    <div className="col">
                        <h3>Company</h3>
                        <br />
                        <p>Contact Us</p>
                        <p>About Us</p>
                        <p>Trust, Safety & Security</p>
                        <p>Our Impact</p>
                    </div>
                </div>
                <hr />
                <div className="row">
                    <div className="col">
                    <p>
                    © 2023  Therapeak  Inc.
                    </p>
                    </div>
                    <div className="col">
                    <p>
                    Terms of Service
                    </p>
                    </div>
                    <div className="col">
                    <p>
                    Privacy Policy
                    </p>
                    </div>
                    <div className="col">
                    <p>
                    Cookie Settings
                    </p>
                    </div>
                    <div className="col">
                    <p>
                    Accessibility
                    </p>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Foot;