"use strict";
(() => {
    const batman = "Bruce";
    const superman = "Clark";
    const existe = false;
    const parejaHeroes = [batman, superman];
    const villano = ["Lex Lutor", 5, true];
    const aliados = ["Mujer Maravilla", "Acuaman", "San", "Flash"];
    let Power;
    (function (Power) {
        Power[Power["min"] = 0] = "min";
        Power[Power["middle"] = 1] = "middle";
        Power[Power["max"] = 5] = "max";
        Power[Power["super"] = 100] = "super";
    })(Power || (Power = {}));
    const fuerzaFlash = Power.max;
    const fuerzaSuperman = Power.super;
    const fuerzaBatman = Power.middle;
    const fuerzaAcuaman = Power.min;
    function activar_batiseñal() {
        return "activada";
    }
    function pedir_ayuda() {
        console.log("Auxilio!!!");
    }
    const poder = "100";
    const largoDelPoder = poder.length;
    console.log(largoDelPoder);
})();
//# sourceMappingURL=app.js.map