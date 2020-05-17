# Collections & Containers

- [C](#c)
- [C++ (Cpp)](#c-cpp)
- [C# (Csharp)](#c-csharp)
- [Java](#java)
- [Rust](#rust)
- [Go](#go)
- [Javascript](#javascript)
- [Typescript](#typescript)
- [Python](#python)

## C

```C
// Arrays (Fixed Size)

#include <stdint.h> // Since C99

// ------------------------------------
// Declaration & Initialization
// ------------------------------------

// Arrays must be initialized with a concrete size.
int32_t integer_array_name[20];

// You can skip the size declaration if you initialize the array on the same line.
int32_t integer_array_name[] = {0, 1, 2, 3, 4};
char char_array[] = {'a', 'b', 'c'};

// In C, strings are an array of characters
// This is a string with lenght = 20. In C you have to account for the '\0' character.
char variable_name[21];
char variable_name[] = "Some string";
// More about this on the String Section

// Const Declaration
const int32_t integer_array_name[] = {0, 1, 2, 3, 4};

// ------------------------------------
// Direct Access
// ------------------------------------
my_array[0] = something;


// ------------------------------------
// Push & Pop
// ------------------------------------

// Not Available

// ------------------------------------
// Size / Length
// ------------------------------------

// Not Available
// You must have another variable to keep track of the current size.
// You usually would encapsulate all this logic in a specific header/C file.

// ------------------------------------
// Count (How many of)
// ------------------------------------

// Not Available

// ------------------------------------
// Filter
// ------------------------------------

// Not Available
// You need to create your own logic

// ------------------------------------
// Find (return Index)
// ------------------------------------

// Not Available
// You need to create your own logic
// You usually would encapsulate all this logic in a specific header/C file.
int find(int element, int size, int my_array[]) // Just an example
{
	for(int i = 0; i < size; i++)
	{
		if (element == my_array[i]) // String comparison is diferent in C. Check string section.
		{
			return i;
		}
	}
	return -1; // Not found
}

// ------------------------------------
// Accumulate (sum all values)
// ------------------------------------

// Not Available
// You need to create your own logic


// ------------------------------------
// Sort
// ------------------------------------

// Not Available
// You need to create your own logic


// ------------------------------------
// Comparing
// ------------------------------------
// TODO


// ------------------------------------
// Copy / Clone
// ------------------------------------
// Not Available
// You need to create your own logic


// ------------------------------------
// Slice
// ------------------------------------

// Not Available
// You need to create your own logic


// ------------------------------------
// Printing Members
// ------------------------------------

// You usually would encapsulate all this logic in a specific header/C file.
void print_members(int size, int my_array[]) // Just an example
{
	for(int i = 0; i < size; i++)
	{
		printf("%d ", my_array[i]);
	}
}

// ------------------------------------
// Multi Dimensional Array
// ------------------------------------

int32_t multi_dimensional_array[20][30];
```

```C
// Dynamic Size Arrays

// TODO
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

```C
// No Native Stack

// You can code your own or use a 3rd lib
```

```C
// No Native Queue

// You can code your own or use a 3rd lib
```

```C
// No Native Dictionary

// You can code your own or use a 3rd lib
```

[Back to top](#top)

## C++ (Cpp)

```Cpp
// Arrays

// std::array will clean up after itself when it goes out of scope,
// so there's no need to do any kind of manual cleanup.

#include <array>  // Since (C++11)
#include <cstdint> // std::int32_t Type (Since C++11)

// ------------------------------------
// Declaration & Initialization
// ------------------------------------

// Fixed Type and Size
std::array<std::int32_t, 5> myArray;

// Uniform Initialization (since C++11)
std::array<std::int32_t, 5> myArray { 9, 7, 5, 3, 1 };

// It is allowed to omit the type and size.
// They can only be omitted together, but not one or the other,
// and only if the array is explicitly initialized. (Since C++17)
std::array myArray { 9, 7, 5, 3, 1 };

// Const Declaration
const std::array<std::int32_t, 5> myArray { 9, 7, 5, 3, 1 };
std::array<std::int32_t, 5> const myArray { 9, 7, 5, 3, 1 };

// ------------------------------------
// Direct Access
// ------------------------------------
myArray[0] = 14; // No bounds-checking
myArray.at(0) = 14; // with bounds-checking

// ------------------------------------
// Push & Pop
// ------------------------------------
// Not Available

// ------------------------------------
// Size / Length
// ------------------------------------
std::int32_t mySize = myArray.size();
std::int32_t myMaxSize = myArray.max_size();

// ------------------------------------
// Count (How many of)
// ------------------------------------
#include <algorithm> // For std::count, std::count_if

// Ex. 1
std::int32_t const target = 2;
std::int32_t howMany = std::count(std::begin(my_collection), std::end(my_collection), target); // Prefer. Works on C-style arrays too
std::int32_t howMany = std::count(my_collection.begin(), my_collection.end(), target);

// Ex. 2
std::int32_t howManyOdd = std::count_if(std::begin(my_collection), std::end(my_collection), /* Lambda Function */);
std::int32_t howManyOdd = std::count_if(std::begin(my_collection), std::end(my_collection), [](auto element) { return element % 2 != 0; } );
// Check Lambda Section for more about Lambda.
// Check Type Inference Section for more about "auto"

// ------------------------------------
// Filter
// ------------------------------------
// TODO

// ------------------------------------
// Find (return Index)
// ------------------------------------
// TODO

// ------------------------------------
// Accumulate (sum all values)
// ------------------------------------
std::int32_t total = std::accumulate(std::begin(my_collection), std::end(my_collection), 0); // 0 (zero) is the starting value


// ------------------------------------
// Sort
// ------------------------------------
#include <algorithm> // For std::sort, std::partial_sort

// Ex. 1
std::sort(std::begin(my_collection), std::end(my_collection));

// Ex. 2
std::sort(std::begin(my_collection), std::end(my_collection), /* Lambda Function for custom sort */ );
std::sort(std::begin(my_collection), std::end(my_collection), [](auto firstElement, auto secondElement) { return abs(firstElement) > abs(secondElement); } );

// Ex. 3
// You can use "std::partial_sort()" for more performance if you
// dont need to show everything sorted at the same time. (Like a pagination)
std::partial_sort(std::begin(my_collection), /* Last element to be sorted */ ,end(my_collection));
std::partial_sort(std::begin(my_collection), ( std::begin(my_collection) + 10 ) ,end(my_collection)); // First 10 will be sorted


// ------------------------------------
// Comparing
// ------------------------------------
#include <algorithm> // For std::equal

bool isEqual = std::equal(std::begin(my_collection), std::end(my_collection), std::begin(my_other_collection), std::end(my_other_collection));

// ------------------------------------
// Copy / Clone
// ------------------------------------
#include <algorithm> // For std::copy

// Example 1
// C++ operator "=" actually creates a real copy
auto myCopyArray = myArray; // Check Type Inference Section for more about "auto"

// Example 2
std::array<std::int32_t, 5> myCopyArray;

// Example 3
std::copy(std::begin(myArray), std::end(myArray), std::begin(myCopyArray));

// ------------------------------------
// Slice
// ------------------------------------
// TODO

// ------------------------------------
// Printing Members
// ------------------------------------

// For-each (Ranged For) (Since C++ 11)

// element will be a copy of the current array element
for (auto element : myArray)		{ std::cout << element << " "; }

// The ampersand makes element a reference to the actual array element,
// preventing a copy from being made
for (auto &element : myArray)		{ std::cout << element << " "; }

// element is a const reference to the currently iterated array element
for (const auto &element : myArray) { std::cout << element << " "; }
for (auto const &element : myArray) { std::cout << element << " "; }

// In for-each loops element declarations, for performance reasons,
// if your elements are non-fundamental types, use references or const references
// else (your elements are basic types) use the copy element syntax


// ------------------------------------
// As a function Parameter
// ------------------------------------
void my_function(const std::array<std::int32_t, 5> &myArray)
{
	// non-mutable code
}

void my_function(std::array<std::int32_t, 5> const &myArray)
{
	// non-mutable code
}

// ------------------------------------
// Multi Dimensional Array
// ------------------------------------
std::array<std::array<std::int32_t, 3>, 3> my_multi_array;
std::array<std::array<std::int32_t, 3>, 3> my_multi_array {{{1,2,3},{4,5,6},{7,8,9}}};

// Legacy (Avoid)
int integer_array_name[5];
int integer_array_name[] = {0, 1, 2, 3, 4};
int multi_dimensional_array[3][3];
```

```Cpp
// List

// std::list will clean up after itself when it goes out of scope,
// so there’s no need to do any kind of manual cleanup.
#include <list>
#include <cstdint> // std::int32_t Type (Since C++11)

// ------------------------------------
// Declaration & Initialization
// ------------------------------------

// Fixed Type but NOT size/length
std::list<std::int32_t> myList;

// Uniform Initialization (since C++11)
std::list<std::int32_t> myList { 9, 7, 5, 3, 1 };

// Const Declaration
const std::list<std::int32_t> myList { 9, 7, 5, 3, 1 };
std::list<std::int32_t> const myList { 9, 7, 5, 3, 1 };

// ------------------------------------
// Direct Access
// ------------------------------------

// Not Available

// ------------------------------------
// Push & Pop
// ------------------------------------
myList.push_front(30); // Add at the beginning
myList.push_back(30); // Add at the end
myList.pop_front(); // Removes the first element of the list, and reduces size of the list by 1.
myList.pop_back(); // Removes the last element of the list, and reduces size of the list by 1.

// ------------------------------------
// Size / Length
// ------------------------------------
myList.size();
myList.max_size();

// ------------------------------------
// Count (How many of)
// ------------------------------------
// TODO

// ------------------------------------
// Filter
// ------------------------------------
// TODO

// ------------------------------------
// Find (return Index)
// ------------------------------------
// TODO

// ------------------------------------
// Accumulate (sum all values)
// ------------------------------------
// TODO

// ------------------------------------
// Sort
// ------------------------------------
// TODO

// ------------------------------------
// Comparing
// ------------------------------------
// TODO

// ------------------------------------
// Copy / Clone
// ------------------------------------
// TODO

// ------------------------------------
// Slice
// ------------------------------------
// TODO

// ------------------------------------
// Printing Members
// ------------------------------------

// For-each (Ranged For) (Since C++ 11)

// element will be a copy of the current array element
for (auto element : myArray)		{ std::cout << element << " "; }

// The ampersand makes element a reference to the actual array element,
// preventing a copy from being made
for (auto &element : myArray)		{ std::cout << element << " "; }

// element is a const reference to the currently iterated array element
for (const auto &element : myArray) { std::cout << element << " "; }
for (auto const &element : myArray) { std::cout << element << " "; }

// In for-each loops element declarations, for performance reasons,
// if your elements are non-fundamental types, use references or const references
// else (your elements are basic types) use the copy element syntax


// ------------------------------------
// As a function Parameter
// ------------------------------------
void my_function(const std::list<std::int32_t> &myList)
{
	// non-mutable code
}

void my_function(std::list<std::int32_t> const &myList)
{
	// non-mutable code
}
```

```Cpp
// Vectors

// std::vector will clean up after itself when it goes out of scope,
// so there’s no need to do any kind of manual cleanup.

#include <vector> // Since C++03

// ------------------------------------
// Declaration & Initialization
// ------------------------------------

// Fixed Type but NOT size/length
std::vector<std::int32_t> myVector;

// Uniform Initialization (since C++11)
std::vector<std::int32_t> myVector { 9, 7, 5, 3, 1 };

// Const Declaration
const std::vector<std::int32_t> myVector { 9, 7, 5, 3, 1 };
std::vector<std::int32_t> const myVector { 9, 7, 5, 3, 1 };

// ------------------------------------
// Direct Access
// ------------------------------------
myVector[0] = 14; // No bounds-checking
myVector.at(0) = 14; // with bounds-checking

// ------------------------------------
// Push & Pop
// ------------------------------------
myVector.push_front(30); // Add at the beginning
myVector.push_back(30); // Add at the end
myVector.pop_front(); // Removes the first element of the list, and reduces size of the list by 1.
myVector.pop_back(); // Removes the last element of the list, and reduces size of the list by 1.

// ------------------------------------
// Size / Length
// ------------------------------------
myVector.size();
myVector.max_size();

// ------------------------------------
// Count (How many of)
// ------------------------------------
// TODO

// ------------------------------------
// Filter
// ------------------------------------
// TODO

// ------------------------------------
// Find (return Index)
// ------------------------------------
// TODO

// ------------------------------------
// Accumulate (sum all values)
// ------------------------------------
// TODO

// ------------------------------------
// Sort
// ------------------------------------
// TODO

// ------------------------------------
// Comparing
// ------------------------------------
// TODO

// ------------------------------------
// Copy / Clone
// ------------------------------------
// TODO

// ------------------------------------
// Slice
// ------------------------------------
// TODO

// ------------------------------------
// Printing Members
// ------------------------------------

// For-each (Ranged For) (Since C++ 11)

// element will be a copy of the current array element
for (auto element : myArray)		{ std::cout << element << " "; }

// The ampersand makes element a reference to the actual array element,
// preventing a copy from being made
for (auto &element : myArray)		{ std::cout << element << " "; }

// element is a const reference to the currently iterated array element
for (const auto &element : myArray) { std::cout << element << " "; }
for (auto const &element : myArray) { std::cout << element << " "; }

// In for-each loops element declarations, for performance reasons,
// if your elements are non-fundamental types, use references or const references
// else (your elements are basic types) use the copy element syntax


// ------------------------------------
// As a function Parameter
// ------------------------------------
void my_function(const std::vector<std::int32_t> &myVector)
{
	// non-mutable code
}

void my_function(std::vector<std::int32_t> const &myVector)
{
	// non-mutable code
}

// ------------------------------------
// Multi Dimensional Vector
// ------------------------------------
std::vector<std::vector<std::int32_t> > my_multi_vector;
std::vector<std::vector<std::int32_t> > my_multi_vector {{{1,2,3},{4,5,6},{7,8,9}}};

// Legacy (Avoid)
// TODO: Dynamic array example
```

```Cpp
// Tuples

#include <tuple>

// ------------------------------------
// Declaration & Initialization
// ------------------------------------

// Uniform Initialization (since C++11)
// TODO

// Const Declaration
// TODO

// ------------------------------------
// Direct Access
// ------------------------------------
// TODO

// ------------------------------------
// Push & Pop
// ------------------------------------
// TODO

// ------------------------------------
// Size / Length
// ------------------------------------
// TODO

// ------------------------------------
// Count (How many of)
// ------------------------------------

// ------------------------------------
// Filter
// ------------------------------------
// TODO

// ------------------------------------
// Find (return Index)
// ------------------------------------
// TODO

// ------------------------------------
// Accumulate (sum all values)
// ------------------------------------
// TODO

// ------------------------------------
// Sort
// ------------------------------------
// TODO

// ------------------------------------
// Comparing
// ------------------------------------
// TODO

// ------------------------------------
// Copy / Clone
// ------------------------------------
// TODO

// ------------------------------------
// Slice
// ------------------------------------
// TODO

// ------------------------------------
// Printing Members
// ------------------------------------
// TODO

// ------------------------------------
// As a function Parameter
// ------------------------------------
// TODO
```

> More Info:
> - https://www.learncpp.com/cpp-tutorial/variable-assignment-and-initialization/
> - https://www.learncpp.com/cpp-tutorial/6-15-an-introduction-to-stdarray/
> - https://www.learncpp.com/cpp-tutorial/6-16-an-introduction-to-stdvector/
> - https://www.geeksforgeeks.org/list-cpp-stl/
> - https://en.cppreference.com/w/cpp/container/list
> - https://en.cppreference.com/w/cpp/algorithm

[Back to top](#top)

## C# (Csharp)

```Cs
// ------------------------------------
// Declaration & Initialization
// ------------------------------------

// TODO

// Const Declaration
// TODO

// ------------------------------------
// Direct Access
// ------------------------------------
// TODO

// ------------------------------------
// Push & Pop
// ------------------------------------
// TODO

// ------------------------------------
// Size / Length
// ------------------------------------
// TODO

// ------------------------------------
// Count (How many of)
// ------------------------------------

// ------------------------------------
// Filter
// ------------------------------------
// TODO

// ------------------------------------
// Find (return Index)
// ------------------------------------
// TODO

// ------------------------------------
// Accumulate (sum all values)
// ------------------------------------
// TODO

// ------------------------------------
// Sort
// ------------------------------------
// TODO

// ------------------------------------
// Comparing
// ------------------------------------
// TODO

// ------------------------------------
// Copy / Clone
// ------------------------------------
// TODO

// ------------------------------------
// Slice
// ------------------------------------
// TODO

// ------------------------------------
// Printing Members
// ------------------------------------
// TODO

// ------------------------------------
// As a function Parameter
// ------------------------------------
// TODO
```

[Back to top](#top)

## Java

```Java
// ------------------------------------
// Declaration & Initialization
// ------------------------------------

// TODO

// Const Declaration
// TODO

// ------------------------------------
// Direct Access
// ------------------------------------
// TODO

// ------------------------------------
// Push & Pop
// ------------------------------------
// TODO

// ------------------------------------
// Size / Length
// ------------------------------------
// TODO

// ------------------------------------
// Count (How many of)
// ------------------------------------
// TODO

// ------------------------------------
// Filter
// ------------------------------------
// TODO

// ------------------------------------
// Find (return Index)
// ------------------------------------
// TODO

// ------------------------------------
// Accumulate (sum all values)
// ------------------------------------
// TODO

// ------------------------------------
// Sort
// ------------------------------------
// TODO

// ------------------------------------
// Comparing
// ------------------------------------
// TODO

// ------------------------------------
// Copy / Clone
// ------------------------------------
// TODO

// ------------------------------------
// Slice
// ------------------------------------
// TODO

// ------------------------------------
// Printing Members
// ------------------------------------
// TODO

// ------------------------------------
// As a function Parameter
// ------------------------------------
// TODO
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
// Array / Lists / Vector

// ------------------------------------
// Declaration & Initialization
// ------------------------------------
var myArray = []; // avoid var
let myArray = [];
let myArray = [1, 2, 3];
let myArray = new Array(3); // Size

// An array can store elements of any type.
let myArray = [1, "hi", function(){}, { key: 'value' }];

// Const Declaration
// Const here means that you cant change the type (from array to something else)
// You can still change its members
const myArray = [1, 2, 3];

// ------------------------------------
// Direct Access
// ------------------------------------
myArray[0] = 14;

// ------------------------------------
// Push & Pop
// ------------------------------------
myArray.push(10); // Add at the end
myArray.unshift(10); // Add at the beggining
myArray.pop(); // Removes and Returns the element at the end
myArray.shift() // Removes and Returns the element at the beggining

// ------------------------------------
// Size / Length
// ------------------------------------
myArray.length();

// ------------------------------------
// Filter
// ------------------------------------
// TODO

// ------------------------------------
// Count (How many of)
// ------------------------------------
// TODO

// ------------------------------------
// Find
// ------------------------------------
myArray.indexOf(element);
myArray.lastIndexOf(element);

// ------------------------------------
// Accumulate (sum all values)
// ------------------------------------
// TODO

// ------------------------------------
// Sort
// ------------------------------------
// TODO

// ------------------------------------
// Comparing
// ------------------------------------
// TODO

// ------------------------------------
// Copy / Clone
// ------------------------------------

// Arrays are reference types in JavaScript!!!
const myFakeCopy = myArray; // Thats like creating a pointer (Be careful) It WONT create a copy

// Real Copy - Using Spread Operator (Since ES6)
const myRealCopy = [...myArray];

// Old Way
const myRealCopy = myArray.slice();
const myRealCopy = myArray.splice(0);
const myRealCopy = myArray.concat();

// ------------------------------------
// Slice
// ------------------------------------
// TODO

// ------------------------------------
// Printing Members
// ------------------------------------

// You can just output the array
console.log(myArray);

// or
for (element of myArray) {
	console.log(`${element} `);
}

// ------------------------------------
// As a function Parameter
// ------------------------------------
// TODO
```

```Javascript
// No Native Tuple

// But you can workaround with arrays. See More Info bellow
```

```Javascript
// No Native Stack

// But you can workaround with arrays.
```

```Javascript
// No Native Queue

// But you can workaround with arrays.
```

```Javascript
// Dictionary

// TODO
```

> More Info:
> - https://medium.com/@ntgard/tuples-in-javascript-cd33321e5277
> - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
> - https://www.dyn-web.com/javascript/arrays/value-vs-reference.php

[Back to top](#top)

## Typescript

```Typescript
// Array / Lists

// ------------------------------------
// Declaration & Initialization
// ------------------------------------
let variableName: number[] = [];
let variableName: number[] = [1, 2, 3];
let variableName: Array<number> = [1, 2, 3];

// Const Declaration
const variableName: number[] = [1, 2, 3];
const variableName: Array<number> = [1, 2, 3];

// ------------------------------------
// Direct Access
// ------------------------------------
// TODO

// ------------------------------------
// Push & Pop
// ------------------------------------
// TODO

// ------------------------------------
// Size / Length
// ------------------------------------
// TODO

// ------------------------------------
// Count (How many of)
// ------------------------------------

// ------------------------------------
// Filter
// ------------------------------------
// TODO

// ------------------------------------
// Find (return Index)
// ------------------------------------
// TODO

// ------------------------------------
// Accumulate (sum all values)
// ------------------------------------
// TODO

// ------------------------------------
// Sort
// ------------------------------------
// TODO

// ------------------------------------
// Comparing
// ------------------------------------
// TODO

// ------------------------------------
// Copy / Clone
// ------------------------------------
// TODO

// ------------------------------------
// Slice
// ------------------------------------
// TODO

// ------------------------------------
// Printing Members
// ------------------------------------
// TODO

// ------------------------------------
// As a function Parameter
// ------------------------------------
// TODO
```

```Typescript
// Tuple

// ------------------------------------
// Declaration & Initialization
// ------------------------------------
let myTuple: [string, number];
myTuple = ["hello", 10];

// Const Declaration
// TODO

// ------------------------------------
// Direct Access
// ------------------------------------
// TODO

// ------------------------------------
// Push & Pop
// ------------------------------------
// TODO

// ------------------------------------
// Size / Length
// ------------------------------------
// TODO

// ------------------------------------
// Count (How many of)
// ------------------------------------

// ------------------------------------
// Filter
// ------------------------------------
// TODO

// ------------------------------------
// Find (return Index)
// ------------------------------------
// TODO

// ------------------------------------
// Accumulate (sum all values)
// ------------------------------------
// TODO

// ------------------------------------
// Sort
// ------------------------------------
// TODO

// ------------------------------------
// Comparing
// ------------------------------------
// TODO

// ------------------------------------
// Copy / Clone
// ------------------------------------
// TODO

// ------------------------------------
// Slice
// ------------------------------------
// TODO

// ------------------------------------
// Printing Members
// ------------------------------------
// TODO

// ------------------------------------
// As a function Parameter
// ------------------------------------
// TODO
```

[Back to top](#top)

> More Info:
> - https://www.typescriptlang.org/docs/handbook/basic-types.html#array
> - https://www.typescriptlang.org/docs/handbook/basic-types.html#tuple

[Back to top](#top)

## Python

```Python
# Array / List / Vector / Stack

# ------------------------------------
# Declaration & Initialization
# ------------------------------------
my_list = []
my_list = [1, 2, 3]
my_list = [1, "Hello", 3.4] # list with mixed datatypes
my_list = ["mouse", [8, 4, 6], ['a']] # nested list

# Type Hint List
from typing import List # For collections, the name of the type is capitalized (List)

my_list = List[int] = [1, 2, 3] # type inside brackets

# Const Declaration
MY_CONSTANT = [1, 2, 3] # Just a convention. Still Mutable

# ------------------------------------
# Direct Access
# ------------------------------------
my_list[0] = 14
my_list[-1] = 14 # Last Element
my_list[-2] = 14 # Second last and so on

# ------------------------------------
# Push & Pop
# ------------------------------------
my_list.append() # Add to the end of the list
my_list.insert(index, element) # Add the element at specified index location
my_list.pop() # Remove the last element of the list
my_list.pop(index) # Removes the element at the specified index

# ------------------------------------
# Size / Length
# ------------------------------------
len(my_list)

# ------------------------------------
# Count (How many of)
# ------------------------------------
# TODO

# ------------------------------------
# Filter
# ------------------------------------
# TODO

# ------------------------------------
# Find (return Index)
# ------------------------------------
my_list.index(element) # Returns the index of the FIRST element with the specified value

# ------------------------------------
# Accumulate (sum all values)
# ------------------------------------
sum(my_list)

# ------------------------------------
# Sort
# ------------------------------------
# TODO

# ------------------------------------
# Comparing
# ------------------------------------
# TODO

# ------------------------------------
# Copy / Clone
# ------------------------------------

# Arrays are reference types !!!
my_fake_copy = my_list # Thats like creating a pointer (Be careful) It WONT create a copy

# Real Copy -  Using copy() method
my_real_copy = my_list.copy()

# Real Copy -  Using list() constructor
my_real_copy = list(my_list)

# ------------------------------------
# Slice
# ------------------------------------
# TODO

# ------------------------------------
# Printing Members
# ------------------------------------

# You can just output the array
print(my_list);

# or
for element in my_list:
	print(f"{element} ")

# ------------------------------------
# As a function Parameter
# ------------------------------------
# TODO
```

```Python
# Tuples

# ------------------------------------
# Declaration & Initialization
# ------------------------------------
my_tuple = (1, 2, 3)
# In Python tuples are written with round brackets.
# A tuple is a collection which is ordered and unchangeable.

# For tuples of fixed size, we specify the types of all the elements
x: Tuple[int, str, float] = (3, "yes", 7.5)

# For tuples of variable size, we use one type and ellipsis
x: Tuple[int, ...] = (1, 2, 3)

# Const Declaration
# TODO

# ------------------------------------
# Direct Access
# ------------------------------------
# TODO

# ------------------------------------
# Push & Pop
# ------------------------------------
# TODO

# ------------------------------------
# Size / Length
# ------------------------------------
# TODO

# ------------------------------------
# Count (How many of)
# ------------------------------------

# ------------------------------------
# Filter
# ------------------------------------
# TODO

# ------------------------------------
# Find (return Index)
# ------------------------------------
# TODO

# ------------------------------------
# Accumulate (sum all values)
# ------------------------------------
# TODO

# ------------------------------------
# Sort
# ------------------------------------
# TODO

# ------------------------------------
# Comparing
# ------------------------------------
# TODO

# ------------------------------------
# Copy / Clone
# ------------------------------------
# TODO

# ------------------------------------
# Slice
# ------------------------------------
# TODO

# ------------------------------------
# Printing Members
# ------------------------------------
# TODO

# ------------------------------------
# As a function Parameter
# ------------------------------------
# TODO

```

```Python
# Queue
# TODO https://docs.python.org/3.8/tutorial/datastructures.html#using-lists-as-queues
```

```Python
# Dictionary
# TODO
```

> More Info:
> - https://realpython.com/python-lists-tuples
> - https://www.programiz.com/python-programming/tuple
> - https://mypy.readthedocs.io/en/stable/cheat_sheet_py3.html
> - https://stackoverflow.com/questions/39817081/typing-any-vs-object
> - https://docs.python.org/3.8/tutorial/datastructures.html

[Back to top](#top)
