import './styles/suggestion.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons'

const Suggestion = () => {
    return ( 
        <div className="container-fluid suggestion">
        <div className="section">
        <h1 className='suggestion-heading'>MOVIES FOR YOU</h1>
        <div className="gridd">
          <div className="cardd">
            <div className="cardd__details">
              Pursuit of Happyness
            </div>
          </div>
          <div className="cardd">
            <div className="cardd__details">
              Dear Zindagi 
            </div>
          </div>
          <div className="cardd">
            <div className="cardd__details">
              Cast Away
            </div>
          </div>
          <div className="cardd">
            <div className="cardd__details">
              The Shawshank Redemption
            </div>
          </div>
          <div className="cardd">
            <div className="cardd__details">
              English Vinglish
            </div>
          </div>
          <div className="cardd">
            <div className="cardd__details">
              Queen 
            </div>
          </div>
          
        </div>

        <h1 className='suggestion-heading'>SONGS RECOMMENDED FOR YOU</h1>
        <div className="roww">
            <div className="roww_content">
                <p> 'The way you make me feel' by Michael Jackson</p>
            </div>
            <FontAwesomeIcon className="playicon" icon={faCirclePlay} />
        </div>
        <div className="roww">
            <div className="roww_content">
                <p> ‘Positive Vibrations’ by Bob Marley </p>
            </div>
            <FontAwesomeIcon className="playicon" icon={faCirclePlay} />
        </div>
        <div className="roww">
            <div className="roww_content">
                <p> ‘Der Lagi Lekin’ - Zindagi Na Milegi Dobara </p>
            </div>
            
            <FontAwesomeIcon className="playicon" icon={faCirclePlay} />
        </div>
        </div>
        </div> 
    );
}
 
export default Suggestion ;