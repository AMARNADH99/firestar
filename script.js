function playMovie(movieSrc) {
    const videoPopup = document.getElementById("videoPopup");
    const videoPlayer = document.getElementById("videoPlayer");

    videoPlayer.src = movieSrc ;
    videoPopup.style.display = "flex";
}

function closeVideo() {
    const videoPopup = document.getElementById("videoPopup");
    const videoPlayer = document.getElementById("videoPlayer");

    videoPlayer.pause();
    videoPopup.style.display = "none";
}