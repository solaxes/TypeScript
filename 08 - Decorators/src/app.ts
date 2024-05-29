function Logger(logString: string) {
  return function (constructor: Function) {
    console.log(constructor);
    console.log(logString);
  };
}

function withTemplate(template: string, hookId: string) {
  return function (_: Function) {
    const hookEl = document.getElementById(hookId);
    if (hookEl) {
      hookEl.innerHTML = template;
    }
  };
}

// Decorator executes when your class is defined
//@Logger("Loggin - Person")
@withTemplate("<h1>My Person Object</h1>", "app")
class Person {
  name = "jaidev";
  constructor() {
    console.log("Creating person object...");
  }
}

//const pers = new Person();

//console.log(pers);
