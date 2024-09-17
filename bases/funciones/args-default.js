"use strict";
(() => {
    const fullName = (firstName, lastName, upper = false) => {
        if (upper) {
            return `${firstName} ${lastName || "----"}`.toUpperCase();
        }
        else {
            return `${firstName} ${lastName || "----"}`;
        }
    };
    const name = fullName("Clark", "Kent", true);
    console.log({ name });
})();
//# sourceMappingURL=args-default.js.map