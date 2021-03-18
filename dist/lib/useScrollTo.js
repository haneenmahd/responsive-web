"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Both parameters take numbers as arguments.
 * @param x the x direction scroll to amount
 * @param y the y direction scroll to amount
 * @returns Scroll the window to the amount in x and y  when it it is triggered
 */
function useScrollTo(x, y) {
    return window.scrollTo(x, y);
}
;
exports.default = useScrollTo;
//# sourceMappingURL=useScrollTo.js.map