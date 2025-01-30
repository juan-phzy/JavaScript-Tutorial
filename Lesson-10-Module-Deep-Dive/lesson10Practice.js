import { sayGoodbye, sayHello } from ".greetings.js";
import Converter from "@/converter.js";
import calculateCircleArea, {PI} from "./shape";

//Question 1 
console.log(sayGoodbye());
console.log(sayHello());

//Question 2 
console.log(Converter(25));

//Question 3 
console.log(calculateCircleArea(PI));