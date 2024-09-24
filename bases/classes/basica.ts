(() => {
  class Avenger {
    // private name: string;
    // private team: string;
    // public realName?: string;
    static avgAge: number = 35;
    static getAvgAge() {
      return this.name;
    }

    constructor(
      private name: string,
      private team: string,
      public realName?: string
    ) {}

    public bio(): string {
      return `${this.name} (${this.team})`;
    }
  }

  //   const antman: Avenger = new Avenger("Antman", "Captain", "Scott Lang");
  //   console.log({ antman });
  //   console.log(antman.bio());
  //   console.log(Avenger.getAvgAge());
})();
