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

// Error: indexing with numeric string
interface NotOkay {
  [x: number]: Animal;
  // Numeric index type 'Animal' is not assignable to string index type 'Dog'.
  [x: string]: Dog;
}