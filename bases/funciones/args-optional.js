"use strict";
(() => {
    const fullName = (firstName, lastName) => {
        return `${firstName} ${lastName || "No last name"}`;
    };
    const name = fullName("Clark");
    console.log({ name });
})();
//# sourceMappingURL=args-optional.js.map