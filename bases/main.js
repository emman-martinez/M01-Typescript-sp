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
(() => {
    const client = {
        name: "Emmanuel",
        age: 34,
        address: {
            id: 125,
            zip: "KY2 SUD",
            city: "Ottawa",
        },
        getFullAddress(id) {
            return `${this.address.zip} - ${this.address.city}`;
        },
    };
    const client2 = {
        name: "Damaris",
        age: 37,
        address: {
            id: 126,
            zip: "KY2 SUD",
            city: "Ottawa",
        },
        getFullAddress(id) {
            return `${this.address.zip} - ${this.address.city}`;
        },
    };
})();
//# sourceMappingURL=main.js.map