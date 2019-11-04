import {Person, functions} from "./oostuff.js";

test("mytest--------------", () => {
  console.log("Hello World from functions.test.js");
  functions.helloWorld();
});


test("test class working", () =>  {
    let l = new Person("Larry",5);
    expect(l.getName()).toBe("Larry");
    expect(l.getAge()).toBe(5);
    l.getBirthday();
    expect(l.getAge()).toBe(6);
    let d = new Person("Dean",29);
    expect(d.getName()).toBe("Dean");
});