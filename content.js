const makeFlashDiv = () => {
  const element = document.createElement("div");

  const styles = {
    position: "absolute",
    backgroundColor: "black",
    color: "white",
    top: 0,
    left: 0,
    zIndex: 1000000,
    padding: "5px",
  };

  Object.entries(styles).forEach(([attr, val]) => {
    element.style[attr] = val;
  });

  return element;
};
const log = console.log;
const showFlash = (messageString) => {
  log(messageString);

  const element = makeFlashDiv();

  const txt = document.createTextNode(messageString);
  element.appendChild(txt);

  const primary = document.querySelector("body");

  primary.appendChild(element);
  setTimeout(() => {
    primary.removeChild(element);
  }, 500);
};

showFlash("now loading yt_extension...");

const setupMediaSession = () => {
  navigator.mediaSession.setActionHandler("previoustrack", () => {
    if (!document.querySelector("video")) return;
    showFlash("rewinding 5 s...");
    document.querySelector("video").currentTime -= 5;
  });

  navigator.mediaSession.setActionHandler("nexttrack", function () {
    if (!document.querySelector("video")) return;
    showFlash("adding 5 s...");
    document.querySelector("video").currentTime += 5;
  });

  navigator.mediaSession.setActionHandler("pause", () => {
    if (!document.querySelector("video")) return;
    showFlash("pausing...");
    document.querySelector("video").pause();
  });

  navigator.mediaSession.setActionHandler("play", () => {
    if (!document.querySelector("video")) return;
    showFlash("pausing...");
    document.querySelector("video").play();
  });
};

document.addEventListener("keydown", (e) => {
  if (e.key === "F6") {
    const vid = document.querySelector("video");
    if (!vid) return;
    vid.playbackRate += 0.25;
    showFlash("vid playback rate changed to " + vid.playbackRate);
  } else if (e.key === "F5") {
    const vid = document.querySelector("video");
    if (!vid) return;
    const pbr = vid.playbackRate;
    vid.playbackRate = pbr === 0.25 ? 0.25 : pbr - 0.25;
    showFlash("vid playback rate changed to " + vid.playbackRate);
  } else if (e.key === "e" && e.metaKey) {
    showFlash("setting up media session...");
    setupMediaSession();
  } else if (e.key === "r" && e.ctrlKey) {
    // refresh current video page at current seek position
    const currentPos = document.querySelector("video").currentTime | 0;
    const q = window.location.search
      .replace("?", "")
      .split("&")
      .reduce((a, b) => {
        const _a = { ...a };
        const [k, v] = b.split("=");
        _a[k] = v;
        return _a;
      }, {});
    const newLocation = `https://youtube.com/watch?v=${q.v}&t=${currentPos}s`;
    window.location.href = newLocation;
  }
});
