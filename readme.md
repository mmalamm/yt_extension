# yt_extension

a useful chrome extension that lets you backup/skip 5 seconds using the ⏪/⏩ buttons, even with the youtube video out of focus.

useful for code-alongs and transcriptions when you have the editor focused and the video on another window. Also handy that you dont have to switch tabs or move hands from keyboard.

[navigating with media buttons sample](https://www.chromestatus.com/feature/5639924124483584)

## Issues

can't figure out how to update mediaSession event handlers when the mediasession changes, i.e. when user navigates to a new youtube video (yt is a single page application so the extension does not refresh). A workaround is to just refresh the page when you want to enable the controls on a new video
