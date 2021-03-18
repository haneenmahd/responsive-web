"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @returns the height of the window screen
 */
function getWindowWidth() {
    window.addEventListener("resize", () => {
        return window.screen.availWidth;
    });
    return window.screen.availWidth;
}
;
exports.default = getWindowWidth;
//# sourceMappingURL=getWindowWidth.js.map