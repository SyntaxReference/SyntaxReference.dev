# Lambda Functions (TODO)


## C

```C
// TODO
```

[Back to top](#top)

## C++ (Cpp)

```Cpp
// TODO
```

[Back to top](#top)

## C# (Csharp)

```Cs
// TODO
```

[Back to top](#top)

## Java

```Java
// TODO
```

[Back to top](#top)

## Rust

```Rust
// TODO
```

[Back to top](#top)

## Go

```Go
// TODO
```

[Back to top](#top)

## Javascript

```Javascript
// Also Known as Arrow Functions

// ------------------------------------
// Definition
// ------------------------------------

const functionName = ( [parameters] ) => {
	// ...
}

// ------------------------------------
// Declaration Example
// ------------------------------------

const functionName = (x, y) => { /*...*/ } // Default
const functionName = (x, y) => { return x * y; }
const functionName = (x, y) => { x * y } // Same as above. (Return can be omitted)
const functionName = (x) => { /*...*/ } // one parameter
const functionName = x => { /*...*/ } // one parameter (the parentheses can be omitted)
const functionName = () => { /*...*/ } // no parameter


// ------------------------------------
// Named Parameters (Keyword Arguments)
// ------------------------------------

// TODO


// ------------------------------------
// Optional Parameters
// ------------------------------------

// TODO


// ------------------------------------
// Default Argument for Parameters
// ------------------------------------

// TODO


// ------------------------------------
// Variable Number of Arguments to a Function Parameters
// ------------------------------------

// Option 1 - rest parameters syntax (Also Known as Spread Operator)
const addAll = (...args) => {
	let result = 0;

	for (element of args) {
		result += element
	}

	return result
}

console.log(addAll(1, 2, 3))

// Option 2 - Arguments Object
// "Arguments Object" does NOT work with Arrow Functions
```

> More Info:
> - https://medium.com/@charpeni/arrow-functions-in-class-properties-might-not-be-as-great-as-we-think-3b3551c440b1
> - https://zendev.com/2018/10/01/javascript-arrow-functions-how-why-when.html
> - https://stackoverflow.com/questions/31362292/how-to-use-arrow-functions-public-class-fields-as-class-methods
> - https://stackoverflow.com/questions/51400605/javascript-child-class-method-not-overriding-parent-class-method
> - https://stackoverflow.com/questions/45881670/should-i-write-methods-as-arrow-functions-in-angulars-class/45882417#45882417
> - https://basarat.gitbook.io/typescript/future-javascript/arrow-functions#tip-arrow-functions-and-inheritance

[Back to top](#top)

## Typescript

```Typescript
// TODO
```

[Back to top](#top)

## Python

```Python
# TODO
```

[Back to top](#top)
