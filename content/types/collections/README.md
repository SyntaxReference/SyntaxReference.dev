# Collections (Array, List, Vectors, Tuples, Set & Dictionary)

- [C](#c)
- [C++ (Cpp)](#c-cpp)
- [C# (Csharp)](#c-csharp)
- [Java](#java)
- [Rust](#rust)
- [Go](#go)
- [Javascript](#javascript)
- [Typescript](#typescript)
- [Python](#python)

For more information about Collections, check the [Collections Section](../../collections/README.md)

## C

```C
#include <stdint.h> // Since C99

// Arrays

// Arrays must be initialized with a concrete size.
int32_t integer_array_name[20];

// You can skip the size declaration if you initialize the array on the same line.
int32_t integer_array_name[] = {0, 1, 2, 3, 4};
char char_array[] = {'a', 'b', 'c'};

// Multi Dimensional Array
int32_t multi_dimensional_array[20][30];

// In C, strings are an array of characters
// This is a string with lenght = 20. In C you have to account for the '\0' character.
char variable_name[21];
char variable_name[] = "Some string";
```

```C
// No Native List

// You can code your own or use a 3rd lib
```

```C
// No Native Vectors

// You can code your own or use a 3rd lib
```

```C
// No Native Tuples

// You can code your own or use a 3rd lib
```

[Back to top](#top)

## C++ (Cpp)

```Cpp
// Arrays C++11
#include <array>

// declare an integer array with length 3
std::array<std::int32_t, 3> myArray;
std::array<std::int32_t, 5> myArray = { 9, 7, 5, 3, 1 };
std::array<std::int32_t, 5> myArray { 9, 7, 5, 3, 1 };

// Multi Dimensional Array
std::int32_t multi_dimensional_array[20][30];
```

```Cpp
// Arrays Classic

// Arrays must be initialized with a concrete size.
std::int32_t integer_array_name[20];

// You can skip the size declaration if you initialize
// the array on the same line.
std::int32_t integer_array_name[] = {0, 1, 2, 3, 4};

char char_array[] = {'a', 'b', 'c'};
```

```Cpp
// List
#include <list>

// TODO
```

```Cpp
// Vectors C++03

#include <vector>

// No need to specify length at initialization
std::vector<std::int32_t> myVector;
std::vector<std::int32_t> myVector = { 9, 7, 5, 3, 1 };
std::vector<std::int32_t> myVector { 9, 7, 5, 3, 1 };
```

```Cpp
// Tuples

#include <tuple>

// TODO
```

> More Info:
> - https://www.learncpp.com/cpp-tutorial/variable-assignment-and-initialization/
> - https://www.learncpp.com/cpp-tutorial/6-15-an-introduction-to-stdarray/

[Back to top](#top)

## C# (Csharp)

```Cs
// Todo
```

[Back to top](#top)

## Java

```Java
// Todo
```

[Back to top](#top)

## Rust

```Rust
// Todo
```

[Back to top](#top)

## Go

```Go
// Todo
```

[Back to top](#top)

## Javascript

```Javascript
// Array / Lists
let variableName = [];
let variableName = [1, 2, 3];
let variableName = new Array(3); // Size
const variableName = [1, 2, 3];
// Arrays are reference types in JavaScript.
```

```Javascript
// No Native Tuple

// But you can workaround with arrays. See More Info bellow
```

> More Info:
> - https://medium.com/@ntgard/tuples-in-javascript-cd33321e5277
> - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
> - https://www.dyn-web.com/javascript/arrays/value-vs-reference.php

[Back to top](#top)

## Typescript

```Typescript
// Array / Lists
let variableName: number[] = [];
let variableName: number[] = [1, 2, 3];
let variableName: Array<number> = [1, 2, 3];
const variableName: number[] = [1, 2, 3];
const variableName: Array<number> = [1, 2, 3];
```

```Typescript
// Tuple
let x: [string, number];
x = ["hello", 10];
```

[Back to top](#top)

> More Info:
> - https://www.typescriptlang.org/docs/handbook/basic-types.html#array
> - https://www.typescriptlang.org/docs/handbook/basic-types.html#tuple

[Back to top](#top)

## Python

```Python
# Array / List
variable_name = []
variable_name = [1, 2, 3]
variable_name = [1, "Hello", 3.4] # list with mixed datatypes
variable_name = ["mouse", [8, 4, 6], ['a']] # nested list
MY_CONSTANT = [1, 2, 3]
```

```Python
# Tuples
variable_name = (1, 2, 3)
# A tuple is a collection which is ordered and unchangeable.
# In Python tuples are written with round brackets.
```

> More Info:
> - https://realpython.com/python-lists-tuples
> - https://www.programiz.com/python-programming/tuple

[Back to top](#top)
