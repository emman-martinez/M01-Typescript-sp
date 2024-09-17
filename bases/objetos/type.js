"use strict";
(() => {
    let Power;
    (function (Power) {
        Power[Power["SUPER_SPEED"] = 0] = "SUPER_SPEED";
        Power[Power["TIME_TRAVEL"] = 1] = "TIME_TRAVEL";
    })(Power || (Power = {}));
    let flash = {
        name: "Barry Allen",
        age: 24,
        powers: [Power.SUPER_SPEED, Power.TIME_TRAVEL],
    };
    let superman = {
        name: "Clark Kent",
        age: 60,
        powers: [Power.SUPER_SPEED],
        getName() {
            return this.name;
        },
    };
})();
