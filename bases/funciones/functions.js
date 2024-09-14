"use strict";
(() => {
    const hero = "Flash";
    function returnName() {
        return hero;
    }
    const activateBatSignal = () => {
        return "BatSignal activated";
    };
    console.log(typeof activateBatSignal);
    const heroName = returnName();
})();
