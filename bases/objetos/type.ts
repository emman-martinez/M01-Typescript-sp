(() => {
  type Hero = {
    name: string;
    age?: number;
    powers: number[];
    getName?: () => string;
  };

  enum Power {
    SUPER_SPEED,
    TIME_TRAVEL,
  }

  let flash: Hero = {
    name: "Barry Allen",
    age: 24,
    powers: [Power.SUPER_SPEED, Power.TIME_TRAVEL],
  };

  let superman: Hero = {
    name: "Clark Kent",
    age: 60,
    powers: [Power.SUPER_SPEED],
    getName() {
      return this.name;
    },
  };
})();
