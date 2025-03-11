(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function n(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerPolicy&&(o.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?o.credentials="include":a.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(a){if(a.ep)return;a.ep=!0;const o=n(a);fetch(a.href,o)}})();const g=`<svg viewBox="0 0 100 100">
      <path d="M84.41,10H15.59C12.51,10,10,12.51,10,15.59v68.82c0,3.08,2.51,5.59,5.59,5.59h68.82c3.08,0,5.59-2.51,5.59-5.59V15.59  C90,12.51,87.49,10,84.41,10z M86.48,84.41c0,1.14-0.93,2.07-2.07,2.07H15.59c-1.14,0-2.07-0.93-2.07-2.07V59.33l16.76-16.76  c0.81-0.81,2.12-0.81,2.93,0l23.96,23.96c0,0,0,0,0,0c0,0,0,0,0,0l9.52,9.52c0.34,0.34,0.79,0.52,1.24,0.52  c0.45,0,0.9-0.17,1.24-0.52c0.69-0.69,0.69-1.8,0-2.49l-8.27-8.27l10.81-10.82c0.39-0.39,0.91-0.61,1.47-0.61  c0.55,0,1.07,0.22,1.47,0.61l11.84,11.84V84.41z M86.48,61.33l-9.35-9.35c-1.06-1.06-2.46-1.64-3.95-1.64  c-1.49,0-2.9,0.58-3.95,1.64L58.41,62.8L35.7,40.09c-1.06-1.06-2.46-1.64-3.95-1.64c-1.49,0-2.9,0.58-3.95,1.64L13.52,54.36V15.59  c0-1.14,0.93-2.07,2.07-2.07h68.82c1.14,0,2.07,0.93,2.07,2.07V61.33z" />
      <path d="M60.26,30.82c-5.21,0-9.44,4.24-9.44,9.44s4.24,9.44,9.44,9.44c5.21,0,9.44-4.24,9.44-9.44S65.47,30.82,60.26,30.82z   M60.26,46.19c-3.27,0-5.92-2.66-5.92-5.92s2.66-5.92,5.92-5.92s5.92,2.66,5.92,5.92S63.53,46.19,60.26,46.19z" />
    </svg>`,m=`
    <svg viewBox="0 0 846.66 846.66">
      <path
        class="fil0"
        d="M30.88 111.05l784.9 0c11.4,0 20.64,9.24 20.64,20.64l0 583.28c0,11.4 -9.24,20.64 -20.64,20.64l-784.9 0c-11.4,0 -20.64,-9.24 -20.64,-20.64l0 -583.28c0,-11.4 9.24,-20.64 20.64,-20.64zm146.05 288.17c0,27.16 -41.29,27.16 -41.29,0 0,-32.49 15.12,-63.05 40.68,-82.92 -1.61,-2.27 -3.11,-4.62 -4.48,-7.04 -6.45,-11.45 -10.12,-24.63 -10.12,-38.63 0,-43.57 35.32,-78.89 78.89,-78.89 43.56,0 78.89,35.32 78.89,78.89 0,16.39 -5.09,32.34 -14.61,45.67 25.57,19.87 40.69,50.43 40.69,82.92 0,27.16 -41.29,27.16 -41.29,0 0,-23.44 -12.59,-44.7 -33.14,-55.92 -9.59,4.06 -20.13,6.22 -30.54,6.22 -10.41,0 -20.96,-2.16 -30.55,-6.22 -20.54,11.22 -33.13,32.48 -33.13,55.92zm-55.14 91.99l237.63 0c11.4,0 20.65,9.25 20.65,20.65l0 122.41c0,11.4 -9.25,20.65 -20.65,20.65l-237.63 0c-11.4,0 -20.64,-9.25 -20.64,-20.65l0 -122.41c0,-11.4 9.24,-20.65 20.64,-20.65zm216.99 41.29l-196.34 0 0 81.13 196.34 0 0 -81.13zm-98.17 -299.47c-20.77,0 -37.6,16.83 -37.6,37.6 0,21.09 16.9,37.6 37.6,37.6 20.72,0 37.6,-16.69 37.6,-37.6 0,-20.77 -16.84,-37.6 -37.6,-37.6zm183.62 29.12c-27.15,0 -27.15,-41.29 0,-41.29l300.64 0c27.15,0 27.15,41.29 0,41.29l-300.64 0zm46.81 363.65c-27.16,0 -27.16,-41.3 0,-41.3l253.83 0c27.15,0 27.15,41.3 0,41.3l-253.83 0zm-46.81 -272.74c-27.15,0 -27.15,-41.29 0,-41.29l300.64 0c27.15,0 27.15,41.29 0,41.29l-300.64 0zm46.81 90.91c-27.16,0 -27.16,-41.29 0,-41.29l253.83 0c27.15,0 27.15,41.29 0,41.29l-253.83 0zm0 90.92c-27.16,0 -27.16,-41.3 0,-41.3l253.83 0c27.15,0 27.15,41.3 0,41.3l-253.83 0zm324.09 -382.55l-743.6 0 0 541.98 743.6 0 0 -541.98z"
      />
    </svg>`,u=`<svg x="0px" y="0px" viewBox="0 0 100 100">
      <polygon points="2.5,30 10.1,22.5 50,62.4 89.9,22.5 97.5,30 50,77.5" />
    </svg>`,v=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path
    d="M27,5H5A3,3,0,0,0,2,8V24a3,3,0,0,0,3,3H27a3,3,0,0,0,3-3V8A3,3,0,0,0,27,5ZM16,9a7,7,0,0,0-5.45,2.61L5.48,7h21l-5.07,4.61A7,7,0,0,0,16,9ZM27,25H5a1,1,0,0,1-1-1V8.35l5.52,5A7,7,0,0,0,16,23h4a1,1,0,0,0,0-2H16a5,5,0,1,1,5-5,1,1,0,0,1-2,0V14a1,1,0,0,0-1-1H16a3,3,0,0,0,0,6h4a3,3,0,0,0,3-3,7,7,0,0,0-.52-2.62l5.52-5V24A1,1,0,0,1,27,25Zm-9.83-8H16a1,1,0,0,1,0-2h1v1A3,3,0,0,0,17.17,17Z" />
</svg>`,f=`<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
      <path d="M56 60H18v2h39a1 1 0 0 0 1-1v-4h-2ZM61 51a4 4 0 1 0-4 4 4.005 4.005 0 0 0 4-4Zm-4 2a2 2 0 1 1 2-2 2.002 2.002 0 0 1-2 2ZM21 33a4 4 0 1 0-4-4 4.005 4.005 0 0 0 4 4Zm0-6a2 2 0 1 1-2 2 2.002 2.002 0 0 1 2-2ZM57 40H22v-5h-2v6a1 1 0 0 0 1 1h35v3h2v-4a1 1 0 0 0-1-1ZM22 18h6v-2h-7a1 1 0 0 0-1 1v6h2ZM40.385 24.44A3.918 3.918 0 0 1 41 26.534V31a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-4.465a3.918 3.918 0 0 1 .615-2.095A14.71 14.71 0 0 0 56 17a9 9 0 0 0-18 0 14.71 14.71 0 0 0 2.385 7.44ZM43 30v-2h8v2Zm4-20a7.008 7.008 0 0 1 7 7 12.832 12.832 0 0 1-2.075 6.37 5.923 5.923 0 0 0-.887 2.63H48v-4h-2v4h-3.038a5.922 5.922 0 0 0-.887-2.63A12.833 12.833 0 0 1 40 17a7.008 7.008 0 0 1 7-7ZM46 2h2v4h-2zM32 16h4v2h-4zM58 16h4v2h-4zM35.687 7.1 37.1 5.687l2.828 2.829-1.414 1.414zM54.072 8.515 56.9 5.686 58.314 7.1 55.486 9.93z" />
      <path d="M48 19h2v2h-2zM44 19h2v2h-2zM4 2h2v2H4zM4 6h2v2H4zM6 4h2v2H6zM2 4h2v2H2zM9 49h2v-4h1v-2H8v2h1v4zM11 57h2v2h-2z" />
      <path d="M2.553 50.895 4 51.618V61a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-9.382l1.447-.723A1 1 0 0 0 18 50v-6a4.006 4.006 0 0 0-3.444-3.961A4.92 4.92 0 0 0 15 38a5 5 0 0 0-10 0 4.92 4.92 0 0 0 .444 2.039A4.006 4.006 0 0 0 2 44v6a1 1 0 0 0 .553.895ZM4 44a2.002 2.002 0 0 1 2-2h1.38a1 1 0 0 0 .658-1.752A2.957 2.957 0 0 1 7 38a3 3 0 0 1 6 0 2.957 2.957 0 0 1-1.038 2.248A1 1 0 0 0 12.621 42H14a2.002 2.002 0 0 1 2 2v5.382l-1.447.723A1 1 0 0 0 14 51v9H6v-9a1 1 0 0 0-.553-.895L4 49.382Z" />
    </svg>`,b=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
      <path d="M71.72,43.9a12.89,12.89,0,0,0-2.87-8.06A13,13,0,0,0,68.29,28a1.73,1.73,0,0,0-1.09-1c-.7-.24-3.35-.69-8.75,2.81a26.1,26.1,0,0,0-7.12-.86,26.13,26.13,0,0,0-7.13.86c-5.54-3.58-8.42-3-9-2.83A1.75,1.75,0,0,0,34.11,28a13,13,0,0,0-.58,7.82,12.22,12.22,0,0,0-2.86,8.12C30.67,55,37,58.34,42.8,59.52a9.38,9.38,0,0,0-.61,2.27,1,1,0,0,0,0,.25V65.1c-5.28.44-6.41-2.65-6.52-3a2.34,2.34,0,0,0-.09-.24,8.85,8.85,0,0,0-5-4.45,1.75,1.75,0,0,0-1.11,3.32,5.29,5.29,0,0,1,2.84,2.43c.7,2.27,3.56,5.86,9.86,5.46v2.88a1.75,1.75,0,0,0,3.5,0V62.17a5,5,0,0,1,1.27-2.73,1.74,1.74,0,0,0-1-3c-6.1-.71-11.74-2.72-11.74-12.57a8.6,8.6,0,0,1,2.56-6.42,1.86,1.86,0,0,0,.4-1.86,8.67,8.67,0,0,1-.11-5.3,15.21,15.21,0,0,1,5.91,2.77,1.79,1.79,0,0,0,1.54.21,21.63,21.63,0,0,1,6.86-.93,21.56,21.56,0,0,1,6.85.93,1.78,1.78,0,0,0,1.54-.21,15.72,15.72,0,0,1,5.66-2.75,8.85,8.85,0,0,1-.13,5.35,1.73,1.73,0,0,0,.34,1.7,9.74,9.74,0,0,1,2.63,6.51c0,9.83-5.93,11.87-11.74,12.57a1.74,1.74,0,0,0-.84,3.13c.62.47,1.34,1.79,1.34,4v7.92a1.75,1.75,0,0,0,3.5,0V63.57a10.66,10.66,0,0,0-.75-4.07C64.46,58.5,71.72,55.41,71.72,43.9Z" />
    </svg>`,w=`<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
      <path d="M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z" />
      <path d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z" />
    </svg>`,k=`<svg {...props} viewBox="0 0 50 50">
      <path d="M 16 3 C 8.83 3 3 8.83 3 16 L 3 34 C 3 41.17 8.83 47 16 47 L 34 47 C 41.17 47 47 41.17 47 34 L 47 16 C 47 8.83 41.17 3 34 3 L 16 3 z M 37 11 C 38.1 11 39 11.9 39 13 C 39 14.1 38.1 15 37 15 C 35.9 15 35 14.1 35 13 C 35 11.9 35.9 11 37 11 z M 25 14 C 31.07 14 36 18.93 36 25 C 36 31.07 31.07 36 25 36 C 18.93 36 14 31.07 14 25 C 14 18.93 18.93 14 25 14 z M 25 16 C 20.04 16 16 20.04 16 25 C 16 29.96 20.04 34 25 34 C 29.96 34 34 29.96 34 25 C 34 20.04 29.96 16 25 16 z" />
    </svg>`,y=`<svg viewBox="0 0 100 100">
      <g transform="translate(0,-952.36218)">
        <path
          d="M 19,7 C 12.396272,7 7,12.39627 7,19 7,25.60373 12.396272,31 19,31 25.603728,31 31,25.60373 31,19 31,12.39627 25.603728,7 19,7 z m 0,4 c 4.441967,0 8,3.55803 8,8 0,4.44197 -3.558033,8 -8,8 -4.441967,0 -8,-3.55803 -8,-8 0,-4.44197 3.558033,-8 8,-8 z m 52,22 c -6.394775,0 -10.741252,2.71933 -14,5.84375 L 57,37 c -1.05e-4,-1.047169 -0.952831,-1.999895 -2,-2 l -16,0 c -1.047169,1.05e-4 -1.999895,0.952831 -2,2 l 0,54 c 1.05e-4,1.047169 0.952831,1.999895 2,2 l 17,0 c 1.047169,-1.05e-4 1.999895,-0.952831 2,-2 l 0,-30 c 0,-2.5311 0.79778,-4.93 1.96875,-6.5625 C 61.13972,52.805 62.5553,52 64,52 l 2,0 c 1.4447,0 2.86028,0.805 4.03125,2.4375 C 71.20222,56.07 72,58.4689 72,61 l 0,30 c 1.05e-4,1.047169 0.952831,1.999895 2,2 l 17,0 c 1.047169,-1.05e-4 1.999895,-0.952831 2,-2 l 0,-11 c 0.01494,-1.056625 -0.943269,-2.028484 -2,-2.028484 -1.056731,0 -2.014943,0.971859 -2,2.028484 l 0,9 -13,0 0,-28 C 76,57.6587 75.00228,54.5244 73.28125,52.125 71.56022,49.7256 68.987299,48 66,48 l -2,0 c -2.987299,0 -5.56022,1.7256 -7.28125,4.125 C 54.99772,54.5244 54,57.6587 54,61 l 0,12 c -0.389457,-2.96e-4 -0.811938,0 -1.1875,0 -1.047341,0.04888 -1.955743,1.046438 -1.906649,2.093769 C 50.954944,76.1411 51.952679,77.049303 53,77 l 1,0 0,4 c -0.389457,-2.96e-4 -0.811938,0 -1.1875,0 -1.047341,0.04888 -1.955743,1.046438 -1.906649,2.093769 C 50.954944,84.1411 51.952679,85.049303 53,85 l 1,0 0,4 -13,0 0,-50 12,0 0,5 c -4.08e-4,0.82264 0.561715,1.616016 1.337958,1.888382 C 55.114201,46.160748 56.04881,45.892541 56.5625,45.25 59.920148,41.06379 63.498184,37 71,37 78.173945,37 82.45548,38.84411 85.125,41.96875 87.79452,45.09339 89,49.8455 89,56 l 0,16 c -0.01494,1.056625 0.943269,2.028484 2,2.028484 1.056731,0 2.014943,-0.971859 2,-2.028484 L 93,56 C 93,49.333 91.750122,43.54501 88.1875,39.375 84.624878,35.20499 78.897484,33 71,33 z M 10.8125,35 C 9.8293323,35.092661 8.9957419,36.012485 9,37 l 0,54 c 1.047e-4,1.047169 0.9528311,1.999895 2,2 l 17,0 c 1.047169,-1.05e-4 1.999895,-0.952831 2,-2 l 0,-54 c -1.05e-4,-1.047169 -0.952831,-1.999895 -2,-2 -5.723265,-2e-6 -11.47824,0 -17.1875,0 z M 13,39 l 13,0 0,34 c -0.389457,-2.96e-4 -0.811938,0 -1.1875,0 -1.047341,0.04888 -1.955743,1.046438 -1.906649,2.093769 C 22.954944,76.1411 23.952679,77.049303 25,77 l 1,0 0,4 c -0.389457,-2.96e-4 -0.811938,0 -1.1875,0 -1.047341,0.04888 -1.955743,1.046438 -1.906649,2.093769 C 22.954944,84.1411 23.952679,85.049303 25,85 l 1,0 0,4 -13,0 z"
          transform="translate(0,952.36218)"
        />
      </g>
    </svg>`,x=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
      <path d="M59.1 46.8c-1-.6-2.1-.9-3.2-.9-1.7 0-3.4.8-4.5 2.1l-11.9-7.5v.1c-.1-1.8-.9-3.5-2.2-4.8l6.3-8.2c.9.4 1.8.7 2.7.7 1.8 0 3.5-.8 4.7-2.3 2-2.6 1.6-6.3-1-8.4-1-.8-2.4-1.3-3.7-1.3-1.8 0-3.5.8-4.7 2.3-1 1.2-1.4 2.8-1.2 4.4.1 1.1.6 2.1 1.3 3l-6.4 8.3c-1.4-.8-2.9-1.1-4.5-.9-.1 0-.3 0-.4.1h-.2l-5.9-16.1c2.5-1.4 3.7-4.4 2.8-7.1-.8-2.4-3.1-4-5.6-4-.7 0-1.3.1-1.9.3-1.5.5-2.7 1.6-3.4 3-.7 1.4-.8 3.1-.3 4.6.8 2.4 3.1 4 5.6 4h.5l5.9 16.2c-2.5 1.4-4.1 4-4.1 6.9 0 .5.1 1.1.2 1.6l-11 4.8c-.1-.1-.1-.2-.2-.3-.2-.2-.3-.4-.5-.5-.3-.3-.6-.5-.9-.7-.2-.1-.3-.2-.5-.3-.8-.7-1.8-.9-2.8-.9-.8 0-1.5.2-2.2.4-1.5.6-2.6 1.7-3.2 3.2-.6 1.5-.6 3.1 0 4.6.9 2.3 3.1 3.7 5.5 3.7.8 0 1.5-.2 2.2-.4 2.2-.9 3.6-3 3.7-5.3v-.9c0-.1 0-.3-.1-.4L24.8 45c1.4 2.4 4 4 6.8 4 1.6 0 3.2-.5 4.4-1.4.1-.1.3-.2.4-.3.1-.1.3-.2.4-.4.1-.1.2-.1.2-.2l.3-.3c.2-.2.3-.4.5-.6.2-.2.3-.4.4-.6.1-.1.1-.2.2-.3.3-.5.5-1.1.7-1.7l11.1 6.9c0 .1 0 .1-.1.2-.7 2.5.3 5.2 2.5 6.6 1 .6 2.1.9 3.2.9 2.1 0 3.9-1 5-2.8 1.9-2.7 1-6.4-1.7-8.2zM8.2 54.4c-2 0-3.5-1.6-3.5-3.5 0-2 1.6-3.5 3.5-3.5 1.4 0 2.7.9 3.2 2.1v.1c.2.4.3.9.3 1.3 0 2-1.6 3.5-3.5 3.5zm38.1-35.7c1.9 0 3.5 1.6 3.5 3.5s-1.6 3.5-3.5 3.5c-2 0-3.5-1.6-3.5-3.5s1.5-3.5 3.5-3.5zm-28.4-6.6c0-2 1.6-3.5 3.5-3.5s3.5 1.6 3.5 3.5c0 2-1.6 3.5-3.5 3.5-1.9.1-3.5-1.5-3.5-3.5zm13.7 34.6c-3 0-5.5-2.5-5.5-5.5s2.5-5.5 5.5-5.5 5.5 2.5 5.5 5.5-2.5 5.5-5.5 5.5zm24.3 8.7c-2 0-3.5-1.6-3.5-3.5 0-2 1.6-3.5 3.5-3.5s3.5 1.6 3.5 3.5-1.6 3.5-3.5 3.5z" />{" "}
    </svg>`,M=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40">
      <path d="M39.101 7.395h-2.798V4.596a.899.899 0 0 0-.898-.899h-2.799V.9a.899.899 0 0 0-.898-.9H.898A.899.899 0 0 0 0 .899v30.809a.899.899 0 0 0 .899.898h2.798v2.798a.899.899 0 0 0 .899.899h2.798v2.8a.899.899 0 0 0 .899.898H39.1a.899.899 0 0 0 .899-.898V8.293a.899.899 0 0 0-.899-.898ZM3.697 4.596v26.213h-1.9V1.797H30.81v1.9H4.596a.899.899 0 0 0-.899.899Zm3.697 3.697v26.212h-1.9V5.495h29.012v1.9H8.293a.899.899 0 0 0-.899.898Zm30.809 29.91H9.19V9.194h29.012Z" />
      <path d="M20.965 21.853h-6.107a.864.864 0 0 1-.864-.864v-5.42a.864.864 0 0 1 .864-.865h6.107a.864.864 0 0 1 .864.864v5.42a.864.864 0 0 1-.864.865Zm-5.242-1.728H20.1v-3.692h-4.378Zm16.813 7.147H14.858a.864.864 0 1 1 0-1.728h17.678a.864.864 0 0 1 0 1.728Zm0 5.42H14.858a.864.864 0 1 1 0-1.729h17.678a.864.864 0 0 1 0 1.729Zm0-16.259h-6.101a.864.864 0 1 1 0-1.729h6.101a.864.864 0 0 1 0 1.729Zm0 5.42h-6.101a.864.864 0 0 1 0-1.728h6.101a.864.864 0 1 1 0 1.728Z" />
    </svg>`;function z(e){e&&(e.innerHTML=`
    <p>My inbox is always open and I will be looking for a new role soon!</p>
    <p>
      Let me know if you have suggestions for improvements or if you'd like to collaborate on any of my projects (more
      on github).
    </p>
    <div class="link-bar">
      <a href="mailto:webmasternikos@gmail.com" target="_blank" rel="noreferrer" class="link-item">
        ${v}
      </a>
      <a href="https://github.com/petalas/" target="_blank" rel="noreferrer" class="link-item">
        ${b}
      </a>
      <a href="https://www.linkedin.com/in/petalas/" target="_blank" rel="noreferrer" class="link-item">
        ${y}
      </a>
      <a href="https://artgen.xyz/" target="_blank" rel="noreferrer" class="link-item">
        ${g}
      </a>
      <a href="https://www.instagram.com/petalas.dev/" target="_blank" rel="noreferrer" class="link-item">
        ${k}
      </a>
      <a
        href="/Nick_Petalas_CV.pdf"
        download="Nick_Petalas_CV.pdf"
        target="_blank"
        rel="noreferrer"
        class="link-item"
      >
        ${m}
      </a>
    </div>
  `)}function C(e){e&&(e.innerHTML=`
    ${L.map(A).join("")}
  `)}const A=e=>`
    <section class="position">
        <h2 class="p-2 flex justify-between bg-latte-crust dark:bg-mocha-crust">
            <span class="hidden md:block text-latte-green dark:text-mocha-green">${e.title}</span>
            <span class="md:flex-1 md:text-center text-latte-peach dark:text-mocha-peach">${e.name}</span>
            <span class="text-latte-red dark:text-mocha-red">${e.timeframe}</span>
        </h2>
        <h3 class="block md:hidden p-2 text-sm text-latte-green dark:text-mocha-green">${e.title}</h3>
        <ul class="text-xs p-2">${e.description}</ul>
    </section>
  `,L=[{title:"Senior Software Engineer",name:"Genesis Global Technology LTD",timeframe:"Dec 2019 - Oct 2024",description:`
      <p>I was a core web platform team member and Technical Lead for the “learn” team.</p>
      <ul class="m-2 p-2 list-disc list-outside">
        <li>Involved in architecting and building multiple iterations of the web platform.</li>
        <li>Facilitated the move from the legacy Angular codebase to one using stenciljs and subsequently the latest iteration of the web platform which is built on top of Microsoft FAST with custom web components and design systems.</li>
        <li>Mentored fellow developers, onboarded new starters, offered tier 3 support.</li>
        <li>Worked on Genx CLI, low-code tooling, app seeds, custom docusaurus plugins.</li>
        <li>Occasional DevOps work as needed, Infrastructure as Code (AWS Amplify) and github pipelines.</li>
      </ul>
    `},{title:"Software Engineer",name:"Elemental Concept LTD",timeframe:"Sep 2018 - Dec 2019",description:`
      <p>During my time in EC I was part of multiple projects and had the opportunity to learn a lot of new technologies and transition from a mostly back-end to a full-stack software engineer.</p>
      <ul class="m-2 p-2 list-disc list-outside">
        <li><strong><b>CorResilience:</b></strong> personalized health coaching mobile app with blood test labs and Fitbit integration.</li>
        <li><strong><b>WellteQ:</b></strong> health focused mobile app, Fitbit and Google Health integration. (ionic, cordova, NodeJS and Java back-ends, MySQL and MongoDB)</li>
        <li><strong><b>Gift & Go:</b></strong> B2B gifting and loyalty / rewards platform, integration with multiple Amazon APIs, custom product catalogs and fulfillment through Amazon FBA, 10+ microservices, dockerized, on AWS (MySQL, Java 11, Spring Boot, Eureka, Angular).</li>
        <li><strong><b>Go Fast:</b></strong> internal project focusing on rapid prototyping, skeleton apps, reusable components (Angular 7, NestJS)</li>
      </ul>
      <p>I was involved with Gift & Go the most, I helped refactor a lot of the legacy code, split monolithic systems into appropriate microservices, optimize queries and performance, dockerize services and automate the deployment pipeline.</p>
      <p>Also developed custom APIs for third party integration on a client-by-client basis.</p>
    `},{title:"Software Engineer",name:"Enigma Software Solutions LTD",timeframe:"Feb 2017 - Sep 2018",description:`
      <p>I was part of the core team developing a collection of tools for Enigma’s clients who are in the online betting and gambling business. That collection of tools included both client-facing websites and back-end software (management of clients, traders, bets, fixtures, payment systems, report generation, cashier management system for retail bet shops).</p>
      <p>I specialized in Java and SQL, mainly developed services and optimized back-end code.</p>
      <p>I was also involved in the maintenance of some legacy systems (PrimeFaces websites, Oracle WebLogic servers).</p>
    `},{title:"Software Engineer",name:"Safemarket LTD",timeframe:"Oct 2014 - Oct 2016",description:`
      <p>I actively participated in the architectural design of internal tools for the Erybo project and managed multiple databases.</p>
      <ul class="m-2 p-2 list-disc list-outside">
        <li>Developed specialized data mining and knowledge extraction tools that automatically update Erybo’s knowledge base (SQL, RDF databases) mostly using Java (Jsoup, Selenium, HikariCP, Apache Jena).</li>
        <li>Created content-generating tools (automatic generation of trivia questions for Erybo’s quiz app).</li>
        <li>Participated in the development of the control panel used for handling users, questions and quizzes.</li>
        <li>Created automatic audio and video manipulation tools for cropping, transcoding, audio level adjustment, segmentation, detection of silent/dark audio/video segments. (Java, ffmpeg)</li>
        <li>Created services for on-demand parsing of information about entities, media extraction and storage, and other utilities. (Java, Netty)</li>
        <li>Developed part of the android version of Erybo's trivia app Quizedia.</li>
        <li>Supervised and trained interns mostly in web scrapping and quiz content generation.</li>
      </ul>
    `}];function S(e){e&&(e.innerHTML=`© ${new Date().getFullYear()}, Nick Petalas`)}function H(e){e&&(e.innerHTML=`
    <img src="images/nick3.jpeg" alt="Nick Petalas" class="w-full aspect-square" />
    <section class="col-span-1 lg:col-span-2 xl:col-span-3">${I()}</section>
  `)}const I=()=>`
    <div class="p-2">
      <h2 class="text-2xl">Hi, I'm Nick</h2>
      <h3 class="text-xl">Senior Software Engineer based in London, originally from Greece.</h3>
      <h4 class="text-lg">
        I strive for constant self-improvement, enjoy lifelong learning and knowledge sharing.
      </h4>
      <h4 class="text-lg">
        I'm mainly interested in technology, engineering, computers, fitness, personal finance, travel, photography.
      </h4>
    </div>
  `;function V(e){var p;if(!e)return;e.innerHTML=`
    <div id="nav-toggle">${u}</div>
    <ul id="nav-list" class="hidden flex-col fixed top-0 w-full mx-auto md:relative md:flex md:flex-row md:container md:h-full">
      <li class="nav-item"><a href="#about">${w}<span>About</span></a></li>
      <li class="nav-item"><a href="#experience">${f}<span>Experience</span></span></a></li>
      <li class="nav-item"><a href="#projects">${M}<span>Projects</span></a></li>
      <li class="nav-item"><a href="#links">${x}<span>Links</span></a></li>
      <li class="nav-item"><a href="/Nick_Petalas_CV.pdf" download="Nick_Petalas_CV.pdf">${m}<span>CV.pdf</span></a></li>
      <li class="nav-item"><button id="theme-button">🌞</button></li>
    </ul>
  `;const t=document.querySelector("#nav-list"),n=document.querySelector("#nav-toggle"),r=(i=!0)=>{window.requestAnimationFrame(()=>{i?(a(),c()):(o(),h())})},a=()=>{var i,s;(i=t==null?void 0:t.classList)==null||i.add("hidden"),(s=t==null?void 0:t.classList)==null||s.remove("flex")},o=()=>{var i,s;(i=t==null?void 0:t.classList)==null||i.remove("hidden"),(s=t==null?void 0:t.classList)==null||s.add("flex"),console.log(t==null?void 0:t.classList)},c=()=>{var i,s;(i=n==null?void 0:n.classList)==null||i.remove("hidden"),(s=n==null?void 0:n.classList)==null||s.add("nav-toggle")},h=()=>{var i,s;(i=n==null?void 0:n.classList)==null||i.add("hidden"),(s=n==null?void 0:n.classList)==null||s.remove("nav-toggle")};n.onclick=()=>r(!1);const l=t==null?void 0:t.children;for(let i=0;i<((l==null?void 0:l.length)??0);i++)(p=l==null?void 0:l[i])==null||p.addEventListener("click",()=>r(!0));const d=document.querySelector("#theme-button");d.onclick=()=>{document.body.classList.toggle("dark"),document.body.classList.contains("dark")?d.innerHTML="🌞":d.innerHTML="🌓"}}function Z(e){e&&(e.innerHTML=`
    ${T.map($).join("")}
  `)}const $=e=>`
    <div class="project">
        <h2 class="p-2 bg-latte-crust dark:bg-mocha-crust">${e.link?`<a href="${e.link}" target="_blank">${e.name}</a>`:e.name}</h2>
        <img src="${e.img}" alt="${e.name}" />
        <div class="text-sm p-2">${e.description}</div>
    </div>
  `,T=[{name:"BTC Risk Metric",link:"https://github.com/petalas/btc-risk-metric",img:"images/btc-risk.png",description:`
      <h3>Bitcoin risk oscillator, combining multiple metrics.</h3>
      <p>Metrics involved so far: </p>
      <ul class="m-2 p-2 list-disc list-outside">
        <li>EMA 5 Daily / EMA 50 Weekly</li>
        <li>Mayer Multiple</li>
        <li>Sharpe Ratio</li>
        <li>Price / EMA 400</li>
        <li>RSI 20</li>
        <li>Puell Multiple</li>
      </ul>
      <p>It also attempts to account for the logarithmic nature of BTC growth and diminishing returns.</p>
      <p>Available as an indicator on TradingView.</p>
    `},{name:"artgen.xyz",link:"https://artgen.xyz",img:"images/artgen.png",description:`
      <h3>A heuristic vector art generator.</h3>
      <p>It generates 'abstract art' pieces using genetic algorithms to 'evolve' a set of semi-transparent polygons, attempting to recreate a target image.</p>
      <p>I'm also working on a multithreaded + SIMD version (Rust).</p>
    `},{name:"Homelab",link:"https://github.com/petalas/docker-nas/blob/master/docker-compose.yml",img:"images/homelab.png",description:`
      <p>I have a Proxmox server at home running multiple VMs. Mainly a TrueNAS VM with HBA passthrough for my NAS (8-wide raidz2) and a Debian VM running dockerized services:</p>
      <p class="my-2">(traefik, glances, uptime-kuma, code-server, homepage, plex, radarr, sonarr, lidarr, prowlarr, sabnzbd, qbittorrent, iperf3, netdata, autobrr, omegabrr, cross-seed, qbit_manage, flaresolverr, filebrowser, home-assistant)</p>
      <p>I also run my own network stack: OPNsense router, pi-hole (DNS level adblocking), unbound (recursive DNS resolver), Omada SDN Controller to manage my wireless Access Points.</p>
    `}];document.querySelector("#app").innerHTML=`
  <div class="wrapper">
    <nav id="nav"></nav>
    <div class="main">
      <section id="about"></section>
      <h2 class="text-lg p-2 text-latte-green dark:text-mocha-green">Where I've worked</h2>
      <section id="experience"></section>
      <h2 class="text-lg p-2 text-latte-green dark:text-mocha-green">Projects</h2>
      <section id="projects"></section>
      <h2 class="text-lg p-2 text-latte-green dark:text-mocha-green">Get in touch</h2>
      <section id="links"></section>
    </div>
    <footer id="footer"></footer>
  </div>
`;V(document.querySelector("#nav"));H(document.querySelector("#about"));C(document.querySelector("#experience"));Z(document.querySelector("#projects"));z(document.querySelector("#links"));S(document.querySelector("#footer"));
