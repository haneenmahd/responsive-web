"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @returns the height of the window screen
 */
function getWindowHeight() {
    window.addEventListener("resize", () => {
        return window.screen.availHeight;
    });
    return window.screen.availHeight;
}
;
exports.default = getWindowHeight;
//# sourceMappingURL=getWindowHeight.js.map