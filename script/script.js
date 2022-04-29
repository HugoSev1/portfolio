let header = document.getElementsByTagName('header')[0]
let footer = document.getElementsByTagName('footer')[0]
let mainContentContainer = document.getElementsByClassName('main-content-container')[0]
let portfolioBags = document.getElementsByClassName('portfolioBags')

let headerFooterGreenValue = 180
let isGreenValueIncreasing = true
let mainContentContainerOpacity = 0;
let mainContentContainerYaxisPos = -100;

function changeHeaderFooterGreenValueFunction() {
    if (isGreenValueIncreasing) {
        headerFooterGreenValue++
    } else {
        headerFooterGreenValue--
    }
    if (headerFooterGreenValue >= 255) {
        isGreenValueIncreasing = false
    } else if (headerFooterGreenValue <= 0) {
        isGreenValueIncreasing = true
    }
    return headerFooterGreenValue
}

setInterval(function () {
    let positiveColor = changeHeaderFooterGreenValueFunction()
    let negativeColor = 255 - positiveColor
    header.style.background = "#00" + positiveColor.toString(16) + "ff"
    footer.style.background = "#00" + negativeColor.toString(16) + "ff"
}, 10)

let rotationValue = 0
setInterval(function () {
    if (mainContentContainerOpacity < 1) {
        mainContentContainerOpacity += .005
        mainContentContainerYaxisPos += .5
        mainContentContainer.style.opacity = mainContentContainerOpacity.toString()
        mainContentContainer.style.transform = "translateY(" + mainContentContainerYaxisPos.toString() + "px)"
    }
    portfolioBags[0].style.transform = "rotate(" + rotationValue + "deg)"
    portfolioBags[1].style.transform = "rotate(-" + rotationValue + "deg)"
    rotationValue += 1
}, 1)