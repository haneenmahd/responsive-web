"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QUERIES = exports.getWindowWidth = exports.getWindowHeight = exports.getWindowScrollPosY = exports.getWindowScrollPosX = exports.useScrollTo = exports.useScrollBy = void 0;
const getWindowHeight_1 = require("./lib/getWindowHeight");
exports.getWindowHeight = getWindowHeight_1.default;
const getWindowWidth_1 = require("./lib/getWindowWidth");
exports.getWindowWidth = getWindowWidth_1.default;
const getWindowScrollPos_1 = require("./lib/getWindowScrollPos");
Object.defineProperty(exports, "getWindowScrollPosX", { enumerable: true, get: function () { return getWindowScrollPos_1.getWindowScrollPosX; } });
Object.defineProperty(exports, "getWindowScrollPosY", { enumerable: true, get: function () { return getWindowScrollPos_1.getWindowScrollPosY; } });
const useScrollTo_1 = require("./lib/useScrollTo");
exports.useScrollTo = useScrollTo_1.default;
const useScrollBy_1 = require("./lib/useScrollBy");
exports.useScrollBy = useScrollBy_1.default;
const QUERIES = {
    // Basic Devices
    default: {
        MOBILE: `and (min-device-width : 320px) and (max-device-width : 480px)`,
        TABLET: `and (min-device-width : 481px) and (max-device-width : 768px)`,
        LAPTOP: `and (min-device-width : 769px) and (max-device-width : 1024px)`,
        DESKTOP: `and (min-device-width : 1025px) and (max-device-width : 1200px)`,
        TV: `and (min-device-width : 1201px)`,
    },
    // Sized Based on Device models
    iOS: {
        FOUR: {
            LANDSCAPE: `and (min-device-width: 320px) 
                        and (max-device-width: 480px)
                        and (-webkit-min-device-pixel-ratio: 2)
                        and (orientation: landscape)`,
            PORTRAIT: `and (min-device-width: 320px) 
                       and (max-device-width: 480px)
                       and (-webkit-min-device-pixel-ratio: 2)
                       and (orientation: portrait)`
        },
        FIVE: {
            LANDSCAPE: `and (min-device-width: 320px) 
                        and (max-device-width: 568px)
                        and (-webkit-min-device-pixel-ratio: 2)
                        and (orientation: landscape)`,
            PORTRAIT: `and (min-device-width: 320px) 
                        and (max-device-width: 568px)
                        and (-webkit-min-device-pixel-ratio: 2)
                        and (orientation: portrait)`
        },
        EIGHT: {
            PORTRAIT: `and (min-device-width: 375px) 
                       and (max-device-width: 667px) 
                       and (-webkit-min-device-pixel-ratio: 2)
                       and (orientation: portrait)`,
            LANDSCAPE: `and (min-device-width: 375px) 
                        and (max-device-width: 667px) 
                        and (-webkit-min-device-pixel-ratio: 2)
                        and (orientation: landscape)`
        },
        PLUS: {
            PORTRAIT: `and (min-device-width: 414px) 
                       and (max-device-width: 736px) 
                       and (-webkit-min-device-pixel-ratio: 3)
                       and (orientation: portrait)`,
            LANDSCAPE: `and (min-device-width: 414px) 
                        and (max-device-width: 736px) 
                        and (-webkit-min-device-pixel-ratio: 3)
                        and (orientation: landscape)`
        },
        X: {
            PORTRAIT: `and (min-device-width: 375px) 
                       and (max-device-width: 812px) 
                       and (-webkit-min-device-pixel-ratio: 3)
                       and (orientation: portrait)`,
            LANDSCAPE: `and (min-device-width: 375px) 
                        and (max-device-width: 812px) 
                        and (-webkit-min-device-pixel-ratio: 3)
                        and (orientation: portrait)`
        }
    },
    SAMSUNG: {
        S3: {
            PORTRAIT: `and (device-width: 320px) 
                       and (device-height: 640px) 
                       and (-webkit-device-pixel-ratio: 2) 
                       and (orientation: portrait)`,
            LANDSCAPE: `and (device-width: 320px) 
                        and (device-height: 640px) 
                        and (-webkit-device-pixel-ratio: 2) 
                        and (orientation: landscape)`
        },
        NOTE3: {
            //NOTE:  Note 3 Models also contains S4 and S5 Models too
            PORTRAIT: `and (device-width: 320px) 
                       and (device-height: 640px) 
                       and (-webkit-device-pixel-ratio: 3) 
                       and (orientation: portrait)`,
            LANDSCAPE: `and (device-width: 320px) 
                        and (device-height: 640px) 
                        and (-webkit-device-pixel-ratio: 3) 
                        and (orientation: landscape)`
        },
        S6: {
            PORTRAIT: `and (device-width: 360px) 
                       and (device-height: 640px) 
                       and (-webkit-device-pixel-ratio: 4) 
                       and (orientation: portrait)`,
            LANDSCAPE: `and (device-width: 360px) 
                        and (device-height: 640px) 
                        and (-webkit-device-pixel-ratio: 4) 
                        and (orientation: landscape)`
        }
    },
    TABLETS: {
        IPAD: {
            MINI: {
                // This contains ipad 1, 2, mini and air models too.
                PORTRAIT: `and (min-device-width: 768px) 
                           and (max-device-width: 1024px) 
                           and (orientation: portrait) 
                           and (-webkit-min-device-pixel-ratio: 1)`,
                LANDSCAPE: `and (min-device-width: 768px) 
                            and (max-device-width: 1024px) 
                            and (orientation: landscape) 
                            and (-webkit-min-device-pixel-ratio: 1)`
            },
            IPAD4: {
                // This contains ipad 3, 4 and ipad pro 9.7" models too.
                PORTRAIT: `and (min-device-width: 768px) 
                           and (max-device-width: 1024px) 
                           and (orientation: portrait) 
                           and (-webkit-min-device-pixel-ratio: 2)`,
                LANDSCAPE: `and (min-device-width: 768px) 
                            and (max-device-width: 1024px) 
                            and (orientation: landscape) 
                            and (-webkit-min-device-pixel-ratio: 2)`
            },
            PRO10: {
                // IPAD PRO 10.5"
                PORTRAIT: `and (min-device-width: 768px) 
                           and (max-device-width: 1024px) 
                           and (orientation: portrait) 
                           and (-webkit-min-device-pixel-ratio: 2)`,
                LANDSCAPE: `and (min-device-width: 768px) 
                            and (max-device-width: 1024px) 
                            and (orientation: landscape) 
                            and (-webkit-min-device-pixel-ratio: 2)`
            },
            PRO12: {
                PORTRAIT: `and (min-device-width: 1024px) 
                           and (max-device-width: 1024px) 
                           and (orientation: portrait) 
                           and (-webkit-min-device-pixel-ratio: 2)`,
                LANDSCAPE: `and (min-device-width: 1024px) 
                            and (max-device-width: 1024px) 
                            and (orientation: landscape) 
                            and (-webkit-min-device-pixel-ratio: 2)`
            }
        }
    },
    LAPTOP: {
        NONRETINA: `and (min-device-width: 1024px) 
                    and (max-device-width: 1024px) 
                    and (orientation: portrait) 
                    and (-webkit-min-device-pixel-ratio: 2)`,
        RETINA: `and (min-device-width: 1200px) 
                 and (max-device-width: 1600px) 
                 and (-webkit-min-device-pixel-ratio: 2)
                 and (min-resolution: 192dpi)`
    },
};
exports.QUERIES = QUERIES;
exports.default = QUERIES;
//# sourceMappingURL=index.js.map