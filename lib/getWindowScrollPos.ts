function getWindowScrollPosX(): number {
    window.addEventListener("scroll", () => {
        return window.pageXOffset;
    });
    return window.pageXOffset;
}

function getWindowScrollPosY(): number {
    window.addEventListener("scroll", () => {
        return window.pageYOffset;
    });
    return window.pageYOffset;
}

export { getWindowScrollPosX, getWindowScrollPosY };