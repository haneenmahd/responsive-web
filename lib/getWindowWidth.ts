function getWindowWidth(): number {
    window.addEventListener("resize", () => {
        return window.screen.availWidth;
    });
    return window.screen.availWidth;
};

export default getWindowWidth;

