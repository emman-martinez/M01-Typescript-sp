function printToConsole(constructor: Function) {
  console.log(constructor);
}

const printToConsoleConditional = (print: boolean = false): Function => {
  return print ? printToConsole : () => {};
};

const bloquearPrototipo = function (constructor: Function) {
  Object.seal(constructor);
  Object.seal(constructor.prototype);
};

function CheckValidPokemonId() {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    const originalMethod = descriptor.value;

    descriptor.value = (id: number) => {
      if (id < 1 || id > 800) {
        return console.error(`Pokemon id has to be between 1 and 800`);
      } else {
        return originalMethod(id);
      }
    };
  };
}

function readOnly(isWritable: boolean = true): Function {
  return function (target: any, propertyKey: string) {
    const descriptor: PropertyDescriptor = {
      get() {
        console.log(this);
        return "Emmanuel";
      },
      set(this, value) {
        // console.log(this, value);
        Object.defineProperty(this, propertyKey, {
          value,
          writable: !isWritable,
          enumerable: false,
        });
      },
    };

    return descriptor;
  };
}

@bloquearPrototipo
@printToConsoleConditional(false)
export class Pokemon {
  @readOnly(false)
  public publicApi: string = "https://pokeapi.co";

  constructor(public name: string) {}

  @CheckValidPokemonId()
  savePokemonToDB(id: number) {
    console.log(`Saved Pokemon into DB.. ${id}`);
  }
}
