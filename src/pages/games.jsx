import './styles/games.css'
const Games = () => {
    return ( 
        <div className='games'>
        <div class="section">
        <h1 className='game-heading'>GAMES TO PUT YOU IN A GOOD MOOD</h1>
        <div class="grid">
          <div class="gamecard">
            <div class="gamecard__details">
              Virtual Cottage
            </div>
          </div>
          <div class="gamecard">
            <div class="gamecard__details">
              Grand Mountain Adventure
            </div>
          </div>
          <div class="gamecard">
            <div class="gamecard__details">
              My Oasis
            </div>
          </div>
          
        </div>

        <h2 className='notgame'> MORE GAMES COMING SOON </h2>
        </div>
        </div>

);
}
 
export default Games ;