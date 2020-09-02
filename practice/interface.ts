// INTERFACES

interface LabeledValue {
  label: string;
}

function printLabel(labeledObj: LabeledValue) {
  console.log(labeledObj.label);
}

let myObj = { size: 10, label: "Size 10 Object"};


// add string index signature to avoid argument errors
interface SquareConfig {
  color?: string;
  width?: number;
  [propName: string]: any; // string index signature i.e. SquareConfig can have any number of properties; as long as they're not *color* or *width*, their types don't matter
}

function createSquare(config: SquareConfig): { color: string; area: number } {
  return { color: config.color || "red", area: config.width || 20 };
}

let mySquare = createSquare({colour: "red", width: 100 });

printLabel(myObj);

// CALL SIGNATURES: used with functions

interface SearchFunc {
  (source: string, subString: string): boolean;
}

let mySearch: SearchFunc;

mySearch = function(source: string, subString: string) {
  let result = source.search(subString);
  return result > -1;
};

// names of parameters do not need to match for function types to correctly type check

// INDEXABLE TYPES

// have *index signatures*
// two types supported: string and number; type returned from numeric indexer must be subtype of type returned from string indexer;

interface StringArray {
  [index: number]: string;
}

let myArray: StringArray;
myArray = ["Bob", "Fred"];

let myStr: string = myArray[0];

interface Animal {
  name: string;
}

interface Dog extends Animal {
  breed: string;
}

// Error: indexing with numeric string
interface NotOkay {
  [x: number]: Animal;
  // Numeric index type 'Animal' is not assignable to string index type 'Dog'.
  [x: string]: Dog;
}

// name's type does not match the string index's type -> type checker gives an error

interface NumberDictionary {
  [index: string]: number;
  length: number; // ok, length is a number
  name: string; // error, the type of 'name' is not a subtype of the indexer
}

// properties of different types are acceptable if the index signature is a union of the property types:

interface NumberOfStringDictionary {
  [index: string]: number | string;
  length: number // ok, length is a number
  name: string // ok, name is a string
}

// Finally, you can make index signatures readonly in order to prevent assignment to their indices:

interface ReadonlyStringArray {
  readonly [index: number]: string;
}

let myArray: ReadonlyStringArray = ["Alice", "Bob"];
myArray[2] = "Mallory"; // error
// Index signature in type 'ReadonlyStringArray' only permits reading.

// You can't set myArray[2] because the index signature is readonly.

// ##################
//    CLASS TYPES
// ##################

// Implementing an interface:
// One of the most common uses of interfaces in languages like C# and Java
// (explicitly enforcing that a class meets a particular contract),
// is also possible in TypeScript.

interface ClockInterface {
  currentTime: Date;
}

class Clock implements ClockInterface {
  currentTime: Date = new Date();
  constructor(h: number, m: number) {}
}

// can also describe methods in an interface that are implemented
// in the class, as we do with setTime in the below example:

interface ClockInterface {
  currentTime: Date;
  setTime(d: Date): void;
}

class Clock implements ClockInterface {
  currentTime: Date = new Date();
  setTime(d: Date) {
    this.currentTime = d;
  }
  constructor(h: number, m: number) {}
}

// Interfaces describe the public side of the class, rather than both the public and private side;
// this prohibits you from using them to check that a class also has particular types for the private
// side of the class instance.

// Difference between static and instance sides of classes:
// A class has two types: type of the static side & instance side
// When a class implements an interface, only the instance side of the class is checked.