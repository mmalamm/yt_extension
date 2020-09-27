const video = document.querySelector("video");

navigator.mediaSession.setActionHandler("previoustrack", () => {
  video.currentTime = video.currentTime - 5;
});

navigator.mediaSession.setActionHandler("nexttrack", function () {
  video.currentTime = video.currentTime + 5;
});
