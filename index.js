function playSound(e) {
    const audioFile = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
    if (!audioFile)
        return
    audioFile.currentTime = 0
    audioFile.play()
    key.classList.add("playing")}


    function removeTransition(e) {
        if (e.propertyName !== "transform")
            return
        this.classList.remove("playing")
    }

    const keys = document.querySelectorAll(".key")
    keys.forEach((key) =>
        key.addEventListener("transitionend", removeTransition))

    window.addEventListener("keydown", playSound)