"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getWindowScrollPosY = exports.getWindowScrollPosX = void 0;
/**
 * @returns the x scroll position in the window element
 */
function getWindowScrollPosX() {
    window.addEventListener("scroll", () => {
        return window.pageXOffset;
    });
    return window.pageXOffset;
}
exports.getWindowScrollPosX = getWindowScrollPosX;
/**
 *
 * @returns the y scroll position in the window element
 */
function getWindowScrollPosY() {
    window.addEventListener("scroll", () => {
        return window.pageYOffset;
    });
    return window.pageYOffset;
}
exports.getWindowScrollPosY = getWindowScrollPosY;
//# sourceMappingURL=getWindowScrollPos.js.map