const playPauseBtn = document.querySelector(".play_pause_btn");
const videoContainer = document.querySelector('.video_container')
const video = document.querySelector('video');


const theaterBtn = document.querySelector(".theater-btn");
const fullScreenBtn = document.querySelector(".full-screen-btn");
const miniPlayerBtn = document.querySelector(".mini-player-btn");

// keyboard shortcutes 


document.addEventListener("keydown", e => {
    console.log(e);
    switch (e.key.toLowerCase()) {
        case " ":
        case "k":
            toggleplay();
            break;
        case "f":
            toggleFullMode();
            break;
        case "i":
            toggleMiniPlayer();
            break;
            
        case "t":
            toggleTheaterMode();
            break;

    }
});

// view Mode 
theaterBtn.addEventListener("click", toggleTheaterMode);
fullScreenBtn.addEventListener("click", toggleFullMode);
miniPlayerBtn.addEventListener("click", toggleMiniPlayer)

function toggleTheaterMode() {
    videoContainer.classList.toggle("theater");
}

function toggleFullMode() {
    videoContainer.classList.toggle("full-screen")
    if (document.fullscreenElement == null) {
        videoContainer.requestFullscreen();
    } else {
        document.exitFullscreen();
    }
}

function toggleMiniPlayer() {
        videoContainer.classList.toggle("mini-player")
    if (videoContainer.classList.contains("mini-player")) {
        video.requestPictureInPicture();


    } else {
        document.exitPictureInPicture();
    }
}
// video.addEventListener("enterpictureinpicture", () => {
//     videoContainer.classList.add("mini-player")
//   })
  
//   video.addEventListener("leavepictureinpicture", () => {
//     videoContainer.classList.remove("mini-player")
//   })
  

























// play/ pause Button 

playPauseBtn.addEventListener('click', toggleplay)

function toggleplay() {
    video.paused ? video.play() : video.pause();
}


video.addEventListener('play', () => {
    videoContainer.classList.remove("paused")
});

video.addEventListener('pause', () => {
    videoContainer.classList.add('paused')
})