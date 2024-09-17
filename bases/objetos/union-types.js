"use strict";
(() => {
    let myCustomVariable = "Emmanuel";
    console.log(typeof myCustomVariable);
    myCustomVariable = 20;
    console.log(typeof myCustomVariable);
    myCustomVariable = {
        name: "Emmanuel",
        age: 20,
        powers: [1, 2, 3],
    };
    console.log(typeof myCustomVariable);
})();
//# sourceMappingURL=union-types.js.map