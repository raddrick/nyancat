import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <svg viewBox="0 0 1920 1080" x="0px" y="0px" width="1920px" height="1080px" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" xmlSpace="preserve" style={{backgroundColor:"#0F4D90"}}>
      <defs>
        <g id="rainbow">
          <rect x="0" y="0" width="80" height="20" fill="#ff0000"/>
          <rect x="0" y="20" width="80" height="20" fill="#ff9900"/>
          <rect x="0" y="40" width="80" height="20" fill="#ffff00"/>
          <rect x="0" y="60" width="80" height="20" fill="#33ff00"/>
          <rect x="0" y="80" width="80" height="20" fill="#0099ff"/>
          <rect x="0" y="100" width="80" height="20" fill="#6633ff"/>
        </g>
      </defs>
      <path d="M880,540 -80,540" id="line-1" style={{stroke: 'black', strokeWidth: '5px'}} />

      {[1,2,3,4,5,6].map((number,i) => <g>
        <use x="0" y="-50" href="#rainbow">
          <animateMotion dur="2s" begin={`${i*0.32}s`} repeatCount="indefinite">
            <mpath xlinkHref="#line-1"></mpath>
          </animateMotion>
          <text x="0" y="0">1</text>
        </use>
        <use x="0" y="-70" href="#rainbow">
          <animateMotion dur="2s" begin={`${i*0.32+0.16}s`} repeatCount="indefinite">
            <mpath xlinkHref="#line-1"></mpath>
          </animateMotion>
        </use>
      </g>
      )}
    </svg>
  );
}

export default App;
