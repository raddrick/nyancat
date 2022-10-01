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
      
      <path d="M800,540 -80,540" id="line-1" />

      {[1,2,3,4,5,6,7,8].map((number,i) => <g>
        <use x="0" y="-50" href="#rainbow" key={i}>
          <animateMotion dur="2s" begin={`${i*0.33}s`} repeatCount="indefinite">
            <mpath xlinkHref="#line-1"></mpath>
          </animateMotion>
          <text x="0" y="0">1</text>
        </use>
        <use x="0" y="-70" href="#rainbow">
          <animateMotion dur="2s" begin={`${i*0.33+0.165}s`} repeatCount="indefinite">
            <mpath xlinkHref="#line-1"></mpath>
          </animateMotion>
        </use>
      </g>
      )}

      <path d="M1920,50 0,50" id="line-2" />
      <path d="M1920,100 0,100" id="line-3" />
      <path d="M1920,150 0,150" id="line-4" />
      <path d="M1920,200 0,200" id="line-5" />
      <path d="M1920,250 0,250" id="line-6" />
      <path d="M1920,300 0,300" id="line-7" />
      <path d="M1920,350 0,350" id="line-8" />
      <path d="M1920,400 0,400" id="line-9" />
      <path d="M1920,450 0,450" id="line-10" />
      <path d="M1920,500 0,500" id="line-11" />
      <path d="M1920,550 0,550" id="line-12" />
      <path d="M1920,600 0,600" id="line-13" />
      <path d="M1920,650 0,650" id="line-14" />
      <path d="M1920,700 0,700" id="line-15" />
      <path d="M1920,750 0,750" id="line-16" />
      <path d="M1920,800 0,800" id="line-17" />
      <path d="M1920,850 0,850" id="line-18" />
      <path d="M1920,900 0,900" id="line-19" />
      <path d="M1920,950 0,950" id="line-20" />
      <path d="M1920,1000 0,1000" id="line-21" />

      {[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21].map((line,i) => <use x="0" y="0" href="#starburst" transform={`scale(${Math.floor(Math.random()*7)})`} style={{animationStart:`${Math.floor(Math.random()*2)}s`}}>
          <animateMotion dur="2s" begin={`${Math.random()*2}s`} repeatCount="indefinite">
            <mpath xlinkHref={`#line-${line}`}></mpath>
          </animateMotion>
        </use>
      )}

      <g transform="translate(750,440)">
       <image href="/original_nyan.gif" height="200" width="200" />
      </g>
    </svg>
  );
}

export default App;