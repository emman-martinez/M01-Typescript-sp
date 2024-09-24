(() => {
  class Apocalipsis {
    static instance: Apocalipsis;
    private constructor(public name: string) {}

    static callApocalipsis(): Apocalipsis {
      if (!Apocalipsis.instance) {
        Apocalipsis.instance = new Apocalipsis("Soy Apocalipsis");
      }
      return Apocalipsis.instance;
    }

    changeName(name: string): void {
      this.name = name;
    }
  }

  const apocalipsis1 = Apocalipsis.callApocalipsis();
  const apocalipsis2 = Apocalipsis.callApocalipsis();
  const apocalipsis3 = Apocalipsis.callApocalipsis();

  apocalipsis1.changeName("Xavier");

  //   const apocalipsis = new Apocalipsis("En Sabah Nur1");
  //   const apocalipsis2 = new Apocalipsis("En Sabah Nur2");
  //   const apocalipsis3 = new Apocalipsis("En Sabah Nur3");
  console.log(apocalipsis1, apocalipsis2, apocalipsis3);
})();
