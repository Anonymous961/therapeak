import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import './styles/docconnect.css'

const Docconnect = () => {
    return (
            <div className="doctor">
                <div className="therapists">
                    <div style={{float:"right"}}>
                        <h1>DOC CONNECT</h1>
                        <h2>Connect with doctors world-wide personally and get your issues solved.</h2>
                    </div>
                    <div className="doc">
                        <div className="doc-img">
                            <img src="https://i.postimg.cc/15yxkhjs/healthicons-doctor-female-negative.png"/>
                        </div>
                    <div className="doc-name">
                        Anjali Mohapatra, MD
                    </div>
                    <div className="doc-spec">
                        Sleep help, anxiety
                    </div>

                    <button className="book">Book Now</button>
                    <div className="doc">
                        <div className="doc-img">
                            <img src="https://i.postimg.cc/ZnC7rmYz/healthicons-doctor-male-negative.png"/>
                        </div>
                    <div className="doc-name">
                        Rahul Chakraborty,MD 
                    </div>
                    <div className="doc-spec">
                        Panic attacks, anxiety
                    </div>
                    <button className="book">Book Now</button>
                    </div>
                </div>
                <div className="doc-gif">
                    <img src="https://i.postimg.cc/R0D80Gz0/image-8-removebg-preview.png"/>
                </div>
             </div>
            </div>
    );
}
export default Docconnect;