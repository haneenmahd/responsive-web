/**
 * @returns the height of the window screen
 */
function getWindowHeight(): number {
    window.addEventListener("resize", () => {
        return window.screen.availHeight;
    });
    return window.screen.availHeight;
};

export default getWindowHeight;