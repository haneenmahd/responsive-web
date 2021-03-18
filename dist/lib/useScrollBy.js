"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Both parameters take numbers as arguments.
 * @param x the x direction scroll by amount
 * @param y the y direction scroll by amount
 * @returns Scroll the window by the amount in x and y every time when it it is triggered
 */
function useScrollBy(x, y) {
    return window.scrollBy(x, y);
}
;
exports.default = useScrollBy;
//# sourceMappingURL=useScrollBy.js.map