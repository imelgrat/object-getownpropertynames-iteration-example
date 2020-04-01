let car = { color: "blue", model: "Sandero", doors: 4 };
const app = document.getElementById("app");
const appEnum = document.getElementById("appEnum");

// Add a property to car and set the enumerable flag to false
Object.defineProperty(car, "nonEnumProp", {
  value: "This will not show in Object.keys",
  enumerable: false
});

// Create an array with both enumerable and non-enumerable keys
const properties = Object.getOwnPropertyNames(car);
for (let key of properties) {
  app.insertAdjacentHTML("beforeend", `${key}<br>`);
}

// Create an array with just the object's enumerable values
const enumerableProps = Object.keys(car);
for (let key of enumerableProps) {
  appEnum.insertAdjacentHTML("beforeend", `${key}<br>`);
}
