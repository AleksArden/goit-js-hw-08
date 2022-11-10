// import throttle from "lodash.throttle";
// import Player from '@vimeo/player';

// const iframe = document.querySelector('iframe');
// const player = new Player(iframe);

// class VideoPlayer {
//     constructor() {

//     }
//     init() {
//         this.onContinuePlay();
//         this.addListeners();
//         const LOCALSTORAGE_KEY = "videoplayer-current-time";
//     }
//     addListeners() {
//         this.player.on('timeupdate', throttle(this.onPlay.bind(this), 1000));
//     }
//     onPlay(event) {
//         const time = event.seconds;
//         console.log(time);
//         localStorage.setItem("videoplayer-current-time", JSON.stringify(time))
//     }

//     onContinuePlay() {
//         const saveTime = localStorage.getItem("videoplayer-current-time");
//         const parsedSaveTime = JSON.parse(saveTime)
//         console.log(parsedSaveTime);
//         player.setCurrentTime(parsedSaveTime).then(function (seconds) {
//         }).catch(function (error) {
//             switch (error.name) {
//                 case 'RangeError':
//                     break;
//                 default:
//                     break;
//             }
//         });
//     }
// }

// new VideoPlayer().init();









