console.log("loading yt_extension...");

const getCurrentVid = () => document.querySelector("video");

navigator.mediaSession.setActionHandler("previoustrack", () => {
  const video = getCurrentVid();
  if (!video) return;
  console.log("rewinding 5 s...");
  video.currentTime = video.currentTime - 5;
});

navigator.mediaSession.setActionHandler("nexttrack", function () {
  const video = getCurrentVid();
  if (!video) return;
  console.log("adding 5 s...");
  video.currentTime = video.currentTime + 5;
});

document.addEventListener("keydown", (e) => {
  if (e.key === "F6") {
    const vid = getCurrentVid();
    if (!vid) return;
    vid.playbackRate += 0.25;
    console.log("vid playback rate changed to " + vid.playbackRate);
  } else if (e.key === "F5") {
    const vid = getCurrentVid();
    if (!vid) return;
    const pbr = vid.playbackRate;
    vid.playbackRate = pbr === 0.25 ? 0.25 : pbr - 0.25;
    console.log("vid playback rate changed to " + vid.playbackRate);
  }
});
