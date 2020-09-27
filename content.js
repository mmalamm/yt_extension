console.log("loading yt_extension...");

const getCurrentVid = () => document.querySelector("video");

navigator.mediaSession.setActionHandler("previoustrack", () => {
  const video = getCurrentVid();
  video.currentTime = video.currentTime - 5;
});

navigator.mediaSession.setActionHandler("nexttrack", function () {
  const video = getCurrentVid();
  video.currentTime = video.currentTime + 5;
});

document.addEventListener("keydown", (e) => {
  if (e.key === "F6") {
    getCurrentVid().playbackRate += 0.25;
  } else if (e.key === "F5") {
    getCurrentVid().playbackRate -= 0.25;
  }
});
