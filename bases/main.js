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
function sumar(a, b) {
    return a + b;
}
const contar = (heroes) => {
    return heroes.length;
};
const superHeroes = ["Flash", "Arrow", "Superman", "Linterna Verde"];
contar(superHeroes);
const llamarBatman = (llamar = true) => {
    if (llamar) {
        console.log("Batiseñal activada");
    }
};
llamarBatman();
const unirheroes = (...personas) => {
    return personas.join(", ");
};
const noHaceNada = (a, b, c, d) => { };
let noHaceNadaTampoco;
noHaceNadaTampoco = noHaceNada;
const batimovil = {
    carroceria: "Negra",
    modelo: "6x6",
    antibalas: true,
    pasajeros: 4,
};
const bumblebee = {
    carroceria: "Amarillo con negro",
    modelo: "4x2",
    antibalas: true,
    pasajeros: 4,
    disparar() {
        console.log("Disparando");
    },
};
const villanos = [
    {
        nombre: "Lex Luthor",
        edad: 54,
        mutante: false,
    },
    {
        nombre: "Erik Magnus Lehnsherr",
        edad: 49,
        mutante: true,
    },
    {
        nombre: "James Logan",
        edad: undefined,
        mutante: true,
    },
];
const charles = {
    poder: "psiquico",
    estatura: 1.78,
};
const apocalipsis = {
    lider: true,
    miembros: ["Magneto", "Tormenta", "Psylocke", "Angel"],
};
let mystique;
mystique = charles;
mystique = apocalipsis;
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
(() => {
    const fullName = (firstName, lastName) => {
        return `${firstName} ${lastName || "No last name"}`;
    };
    const name = fullName("Clark");
    console.log({ name });
})();
(() => {
    const fullName = (firstName, lastName) => {
        return `${firstName} ${lastName}`;
    };
    const name = fullName("Clark", "Kent");
    console.log({ name });
})();
(() => {
    const fullName = (firstName, ...restArgs) => {
        return `${firstName} ${restArgs.join(" ")}`;
    };
    const superman = fullName("Clark", "Joseph", "Kent");
    console.log({ superman });
})();
(() => {
    const addNumber = (a, b) => a + b;
    const greet = (name) => `Hello ${name}`;
    const saveTheWorld = () => "The world is saved!";
    let myFunction;
    myFunction = saveTheWorld;
    console.log(myFunction());
})();
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
(() => {
    let flash = {
        name: "Barry Allen",
        age: 24,
        powers: ["Super velocidad", "Viajar en el tiempo"],
    };
    let superman = {
        name: "Clark Kent",
        age: 60,
        powers: ["Super velocidad"],
    };
})();
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
(() => {
    let avenger = 123;
    let exists;
    let power;
    avenger = "Dr. Strange";
    console.log(avenger.charAt(0));
    avenger = 150.23256415;
    console.log(avenger.toFixed(2));
    console.log(exists);
    console.log(power);
})();
(() => {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const villains = ["Omega Red", "Red Skull", "Thanos"];
    villains.forEach((v) => console.log(v.toUpperCase()));
})();
(() => {
    let isSuperMan = true;
    let isBatman = false;
    isSuperMan = isBatman ? true : false;
    console.log({ isSuperMan });
})();
(() => {
    let AudioLevel;
    (function (AudioLevel) {
        AudioLevel[AudioLevel["min"] = 0] = "min";
        AudioLevel[AudioLevel["medium"] = 1] = "medium";
        AudioLevel[AudioLevel["max"] = 2] = "max";
    })(AudioLevel || (AudioLevel = {}));
    let currentAudio = AudioLevel.max;
    console.log(currentAudio);
    console.log(AudioLevel);
})();
(() => {
    const error = (message) => {
        if (false)
            throw new Error(message);
        return 1;
    };
    error("Help!");
    console.log("Hello World");
})();
(() => {
})();
(() => {
    let avengers = 10;
    console.log({ avengers });
    const villians = 20;
    if (avengers < villians) {
        console.log("We are doomed!");
    }
    else {
        console.log("Avengers to the rescue!");
    }
    avengers = Number("55A");
    console.log({ avengers });
})();
(() => {
    var _a;
    const batman = "Batman";
    const greenLantern = "Green Lantern";
    const blackVolcano = `Hero: Black Volcano`;
    console.log(`I'm ${batman}`);
    console.log(batman.toUpperCase());
    console.log(((_a = batman[10]) === null || _a === void 0 ? void 0 : _a.toUpperCase()) || "No character at position 10");
})();
(() => {
    const hero = ["Dr. Strange", 100, true];
    hero[0] = "Dr. Strange";
    hero[1] = 50;
    hero[2] = false;
    console.log(hero);
})();
(() => {
    function callBatman() {
        return;
    }
    const callSuperman = () => {
        return;
    };
    const a = callBatman();
    console.log(a);
})();
//# sourceMappingURL=main.js.map