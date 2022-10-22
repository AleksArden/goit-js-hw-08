import throttle from "lodash.throttle";
import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const LOCALSTORAGE_KEY = "videoplayer-current-time";
player.on('timeupdate', throttle(onPlay, 1000));

onContinuePlay()

function onPlay(event) {
    const time = event.seconds;
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(time))
};

function onContinuePlay() {
    const saveTime = localStorage.getItem(LOCALSTORAGE_KEY);
    const parsedSaveTime = JSON.parse(saveTime)

    player.setCurrentTime(parsedSaveTime).then(function (seconds) {
    }).catch(function (error) {
        switch (error.name) {
            case 'RangeError':
                break;
            default:
                break;
        }
    });
}






