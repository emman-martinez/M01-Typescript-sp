// import { Hero as SuperHero } from "./classes/Hero";
import * as HeroClasses from "./classes/Hero";
import powers from "./data/power";

// const ironman = new SuperHero("Ironman", 1, 55);
const ironman = new HeroClasses.Hero("Ironman", 1, 55);
console.log(ironman);
console.log(powers);
