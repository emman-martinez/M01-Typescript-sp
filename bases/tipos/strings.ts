(() => {
  const batman: string = "Batman";
  const greenLantern: string = "Green Lantern";
  const blackVolcano: string = `Hero: Black Volcano`;

  console.log(`I'm ${batman}`);
  console.log(batman.toUpperCase());
  console.log(batman[10]?.toUpperCase() || "No character at position 10");
})();
