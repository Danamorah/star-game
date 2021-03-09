import useState from 'react'
import utils from "../utils"
import './StarMatch.css';
import PlayNumber from '../PlayNumber/PlayNumber'
import StarsDisplay from "../StarDisplay/Stardisplay"

const StarMatch = () => {
//const [stars, setStars] = useState(utils.random(1,9));
  return (
    <div className="game">
      <div className="help">
        Pick 1 or more numbers that sum to the number of stars
      </div>
      <div className="body">
        <div className="left">
          <StarsDisplay/>
        </div>
        <div className="right">
            {utils.range(1,9).map(numberId =>
                <PlayNumber key={numberId} numberId={numberId}/>
            )}
        </div>
      </div>
      <div className="timer">Time Remaining: 10</div>
    </div>
  );
};

// Color Theme
const colors = {
  available: 'lightgray',
  used: 'lightgreen',
  wrong: 'lightcoral',
  candidate: 'deepskyblue',
};

export default StarMatch
//ReactDOM.render(<StarMatch />, mountNode);