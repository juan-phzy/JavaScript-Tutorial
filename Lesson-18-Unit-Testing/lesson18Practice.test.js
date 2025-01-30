import { subtract, divide } from "./utils";

test("subtracts two numbers correctly", () => {
  expect(subtract(10, 5)).toBe(5);    
  expect(subtract(20, 10)).toBe(10);   
  expect(subtract(0, 0)).toBe(0);      
});

test("divides two numbers correctly", () => {
  expect(divide(10, 2)).toBe(5);       
  expect(divide(9, 3)).toBe(3);     
});

test("throws error when dividing by zero", () => {
  expect(() => divide(10, 0)).toThrow("Cannot divide by zero");
});
