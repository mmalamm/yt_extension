console.log("loading yt_extension...");

const getCurrentVid = () => document.querySelector("video");

navigator.mediaSession.setActionHandler(
  "previoustrack",
  () => (getCurrentVid().currentTime -= 5)
);

navigator.mediaSession.setActionHandler(
  "nexttrack",
  () => (getCurrentVid().currentTime += 5)
);

document.addEventListener("keydown", (e) => {
  if (e.key === "F6") {
    getCurrentVid().playbackRate += 0.25;
  } else if (e.key === "F5") {
    const vid = getCurrentVid();
    if (vid.playbackRate === 0) return;
    vid.playbackRate -= 0.25;
  }
});
