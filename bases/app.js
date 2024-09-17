"use strict";
(() => {
    // Tipos
    const batman = "Bruce";
    const superman = "Clark";
    const existe = false;
    // Tuplas
    const parejaHeroes = [batman, superman];
    const villano = ["Lex Lutor", 5, true];
    // Arreglos
    const aliados = ["Mujer Maravilla", "Acuaman", "San", "Flash"];
    //Enumeraciones
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
    // Retorno de funciones
    function activar_batiseñal() {
        return "activada";
    }
    function pedir_ayuda() {
        console.log("Auxilio!!!");
    }
    // Aserciones de Tipo
    const poder = "100";
    const largoDelPoder = poder.length;
    console.log(largoDelPoder);
})();
//# sourceMappingURL=app.js.map