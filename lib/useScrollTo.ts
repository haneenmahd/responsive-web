/**
 * Both parameters take numbers as arguments.
 * @param x the x direction scroll to amount
 * @param y the y direction scroll to amount
 * @returns Scroll the window to the amount in x and y  when it it is triggered
 */
function useScrollTo(x: number, y: number): void {
    return window.scrollTo(x, y);
};

export default useScrollTo;