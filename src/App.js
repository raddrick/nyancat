import useWindowDimensions from './dimensions.js';
import './App.css';

function App() {
  const { height, width } = useWindowDimensions();

  const steps = (width/2) / 80; // there are two per step in the graphic, rainbow graphic

  let bows = [1,2,3,4,5,6,7,8];
  let stars = [2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21];
  let timing = 2;

  if (steps < bows.length) { 
    timing = timing*steps/bows.length;
    bows = bows.reverse().slice(0,steps); 
  }
  
  return (
    <svg viewBox={`0 0 ${width} ${height}`} x="0px" y="0px" width={`${width}px`} height={`${height}`} version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" xmlSpace="preserve" style={{backgroundColor:"#0F4D90"}}>
      <defs>
        <g id="rainbow">
          <rect x="0" y="0" width="80" height="20" fill="#ff0000"/>
          <rect x="0" y="20" width="80" height="20" fill="#ff9900"/>
          <rect x="0" y="40" width="80" height="20" fill="#ffff00"/>
          <rect x="0" y="60" width="80" height="20" fill="#33ff00"/>
          <rect x="0" y="80" width="80" height="20" fill="#0099ff"/>
          <rect x="0" y="100" width="80" height="20" fill="#6633ff"/>
        </g>
        <g id="starburst" transform="translate(5,5)" >
          <g>
            <rect x="0" y="0" width="1" height="1"></rect>
              <animate id="ani10"
                attributeName="opacity"
                values="0;1" dur="0.1s" 
                begin="0s;ani11.end"
                />
                <animate id="ani11"
                attributeName="opacity"
                values="0" dur="1s" 
                begin="ani10.end"
                />
          </g>
          <g opacity="0">
            <rect x="-2" y="0" width="2" height="1"></rect> 
            <rect x="0" y="-2" width="1" height="2"></rect>
            <rect x="1" y="0" width="2" height="1"></rect>
            <rect x="0" y="1" width="1" height="2"></rect>
              <animate id="ani20"
                attributeName="opacity"
                values="0;1"
                dur="0.1s" 
                begin="ani10.end"
                />
              <animate id="ani21"
                attributeName="opacity"
                values="0"
                dur="1s" 
                begin="ani20.end"
                />
          </g>
          <g opacity="0">
            <rect x="-3" y="0" width="2" height="1"></rect> 
            <rect x="0" y="-3" width="1" height="2"></rect>
            <rect x="2" y="0" width="2" height="1"></rect>
            <rect x="0" y="2" width="1" height="2"></rect>
              <animate id="ani30"
                attributeName="opacity"
                values="0;1"
                dur="0.1s" 
                begin="ani20.end"
                />
              <animate id="ani31"
                attributeName="opacity"
                values="0"
                dur="1s" 
                begin="ani30.end"
                />
          </g>
          <g opacity="0">
            <rect x="-4" y="0" width="1" height="1"></rect> 
            <rect x="0" y="-4" width="1" height="1"></rect>
            <rect x="4" y="0" width="1" height="1"></rect>
            <rect x="0" y="4" width="1" height="1"></rect>
              <animate id="ani40"
                attributeName="opacity"
                values="0;1"
                dur="0.1s" 
                begin="ani30.end"
                />
                <animate id="ani41"
                attributeName="opacity"
                values="0"
                dur="1s" 
                begin="ani40.end"
                />
          </g>
          <g opacity="0">
            <rect x="-4" y="0" width="1" height="1"></rect> 
            <rect x="-3" y="-3" width="1" height="1"></rect> 
            <rect x="0" y="-4" width="1" height="1"></rect>
            <rect x="3" y="-3" width="1" height="1"></rect>
            <rect x="4" y="0" width="1" height="1"></rect>
            <rect x="3" y="3" width="1" height="1"></rect>
            <rect x="0" y="4" width="1" height="1"></rect>
            <rect x="-3" y="3" width="1" height="1"></rect>
              <animate id="ani50"
                attributeName="opacity"
                values="0;1"
                dur="0.1s" 
                begin="ani40.end"
                />
                <animate id="ani51"
                attributeName="opacity"
                values="0"
                dur="1s" 
                begin="ani50.end"
                />
          </g>
        </g>
      </defs>
      
      <path d={`M${width/2},${height/2} -80,${height/2}`} id="line-1" />

      {bows.map((number,i) => <g key={i}>
        <use x="0" y="-50" href="#rainbow">
          <animateMotion dur={`${timing}s`} begin={`${i*0.33}s`} repeatCount="indefinite">
            <mpath xlinkHref="#line-1"></mpath>
          </animateMotion>
          <text x="0" y="0">1</text>
        </use>
        <use x="0" y="-70" href="#rainbow">
          <animateMotion dur={`${timing}s`} begin={`${i*0.33+0.165}s`} repeatCount="indefinite">
            <mpath xlinkHref="#line-1"></mpath>
          </animateMotion>
        </use>
      </g>
      )}

      {stars.map((line,i) => <use x="0" y="0" href="#starburst" transform={`scale(${Math.floor(Math.random()*7)})`} style={{animationStart:`${Math.floor(Math.random()*2)}s`}} key={i}>
          <path d={`M${width},${(i+1)*50} 0,${(i+1)*50}`} id={`line-${line}`} />
          <animateMotion dur={`${timing}s`} begin={`${Math.random()*2}s`} repeatCount="indefinite">
            <mpath xlinkHref={`#line-${line}`}></mpath>
          </animateMotion>
        </use>
      )}

      <g transform={`translate(${width/2},${height/2})`}>
       <image href="/original_nyan.gif" height="200" width="200" transform="translate(-56,-84)" />
      </g>

      <rect x="0" y="0" width="100px" height="100px" style={{fill:'#0F4D90'}} />
    </svg>
  );
}

export default App;