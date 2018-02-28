
let object = {
  age: 20,
  firstName: "John",
  //lastName: "Doe",
  gender: "male",
};

function myFunction(object_old) {
  var { age = 21 } = object_old;
  age += 10;
  var { firstName = "Amrit", lastName = "Raj", gender = "male" } = object_old;
  firstName = addZ(firstName);
  lastName = addZ(lastName);
  gender = addZ(gender);
  var object_new = { age, firstName, lastName, gender };
  return [
    { object_old },
    { object_new }
  ]
}

function addZ(value) {
  value += "zzz";
  value = "zzz" + value;
  return value;
}

var [{ object_old }, { object_new }] = myFunction(object);
console.log(object_old);
console.log(object_new);
