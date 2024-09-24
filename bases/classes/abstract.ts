(() => {
  abstract class Mutante {
    constructor(public name: string, public realName: string) {}
  }

  class Xmen extends Mutante {
    saveTheWorld(): string {
      return "Wold saved!";
    }
  }
  class Villian extends Mutante {
    conquerTheWorld(): string {
      return "World conquered!";
    }
  }

  const wolverine: Xmen = new Xmen("Wolverine", "Logan");
  const magneto: Villian = new Villian("Magneto", "Magnus");
  //   console.log(wolverine.saveTheWorld());
  //   console.log(magneto.conquerTheWorld());

  const printName = (character: Mutante): void => {
    console.log(character.name);
  };

  printName(magneto);
})();
