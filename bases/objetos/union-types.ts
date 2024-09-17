(() => {
  type Hero = {
    name: string;
    age?: number;
    powers: number[];
    getName?: () => string;
  };

  let myCustomVariable: string | number | Hero = "Emmanuel";
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
