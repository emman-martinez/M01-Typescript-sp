"use strict";
var Validations;
(function (Validations) {
    Validations.validateText = (text) => {
        return text.length > 3;
    };
    Validations.validateDate = (myDate) => {
        return isNaN(myDate.valueOf()) ? false : true;
    };
})(Validations || (Validations = {}));
console.log(Validations.validateText("Emmanuel"));
//# sourceMappingURL=main.js.map