# Loop

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
// ------------------------------------
// While
// ------------------------------------
while (expression)
{
	// ...
	// Dont forget the Increment or Decrement operation
}

// ------------------------------------
// do while
// ------------------------------------
do
{
	// ...
	// Dont forget the Increment or Decrement operation
}
while (expression); // Dont forget ; (semicolon)

// ------------------------------------
// For
// ------------------------------------
for ( element_declaration_initialization; condition; increment_or_decrement )
{
	// ...
}
```

[Back to top](#top)

## C++ (Cpp)

```Cpp
// ------------------------------------
// While
// ------------------------------------
while (expression)
{
	// ...
	// Dont forget the Increment or Decrement operation
}

// ------------------------------------
// do while
// ------------------------------------
do
{
	// ...
	// Dont forget the Increment or Decrement operation
}
while (expression); // Dont forget ; (semicolon)

// ------------------------------------
// For
// ------------------------------------
for ( element_declaration_initialization; condition; increment_or_decrement )
{
	// ...
}

// ------------------------------------
// For-each (Ranged For)
// ------------------------------------
for (element_declaration_initialization : collection_container)
{
	// ...
}

// ------------------------------------
// For-each Examples from Learncpp
// ------------------------------------

// element will be a copy of the current array element
for (auto element : myArray) { /**/ }

// The ampersand makes element a reference to the actual array element,
// preventing a copy from being made
for (auto &element : myArray) { /**/ }

// element is a const reference to the currently iterated array element
for (const auto &element : myArray) { /**/ }
for (auto const &element : myArray) { /**/ }

// In for-each loops element declarations, if your elements are non-fundamental types,
// use references or const references for performance reasons.
```

> More Info:
> - https://www.learncpp.com/cpp-tutorial/6-12a-for-each-loops/

[Back to top](#top)

## C# (Csharp)

```Cs
// ------------------------------------
// While
// ------------------------------------
while (expression)
{
	// ...
	// Dont forget the Increment or Decrement operation
}

// ------------------------------------
// do while
// ------------------------------------
do
{
	// ...
	// Dont forget the Increment or Decrement operation
}
while (expression); // Dont forget ; (semicolon)

// ------------------------------------
// For
// ------------------------------------
for ( element_declaration_initialization; condition; increment_or_decrement )
{
	// ...
}

// ------------------------------------
// For-each
// ------------------------------------
foreach (element_declaration_initialization in collection_container)
{
	// ...
}

// ------------------------------------
// For-each Examples
// ------------------------------------

// element will be a copy of the current collection/container element
foreach (var element in collection_container) { /**/ }

// element will be a reference to the actual collection/container element,
// preventing a copy from being made
foreach (ref var element in collection_container) { /**/ }

// element is a const (readonly) reference
foreach (ref readonly var element in collection_container) { /**/ }

// iterate a collection that generates each element asynchronously
await foreach (var element in GenerateSequenceAsync() ) { /**/ }
```

> More Info:
> - https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/foreach-in

[Back to top](#top)

## Java

```Java
// ------------------------------------
// While
// ------------------------------------
while (expression)
{
	// ...
	// Dont forget the Increment or Decrement operation
}

// ------------------------------------
// do while
// ------------------------------------
do
{
	// ...
	// Dont forget the Increment or Decrement operation
}
while (expression); // Dont forget ; (semicolon)

// ------------------------------------
// For
// ------------------------------------
for ( element_declaration_initialization; condition; increment_or_decrement )
{
	// ...
}

// ------------------------------------
// For-each
// ------------------------------------
for (element_declaration_initialization : collection_container)
{
	// ...
}

// ------------------------------------
// For-each Example
// ------------------------------------

// element will be a copy of the current collection/container element
for (var element : collection_container) { /**/ } // "var" Since Java 10
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
// ------------------------------------
// While
// ------------------------------------
while (expression)
{
	// ...
	// Dont forget the Increment or Decrement operation
}

// ------------------------------------
// do while
// ------------------------------------
do
{
	// ...
	// Dont forget the Increment or Decrement operation
}
while (expression); // Dont forget ; (semicolon)

// ------------------------------------
// For
// ------------------------------------
for ( element_declaration_initialization; condition; increment_or_decrement )
{
	// ...
}

// ------------------------------------
// For-each (all variants)
// ------------------------------------

// For In
// Give you access to the index in the collection/container, not the actual element
// Can also be used to iterate over the properties of an object (the object keys)
// The order is not guaranteed to be index related nor alphabetical.
for (let index in collection_container) { console.log(collection_container[index]); }
for (let key in myObject) { console.log(myObject[key]); }

// For Of
// Give you access to the element in the collection/container, not the index
for (const element of collection_container) { /**/ }

// ForEach
// Is an array method, so it can only be used exclusively with arrays.
// There is also no way to stop or break a forEach loop.
myArray.forEach((element) => { /**/ }); // Check Collection Section for more related methods.
```

> More Info:
> - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
> - https://stackoverflow.com/questions/9329446/for-each-over-an-array-in-javascript/9329476#9329476
> - http://blog.niftysnippets.org/2010/11/myths-and-realities-of-forin.html

[Back to top](#top)

## Typescript

```Typescript
// ------------------------------------
// While
// ------------------------------------
while (expression)
{
	// ...
	// Dont forget the Increment or Decrement operation
}

// ------------------------------------
// do while
// ------------------------------------
do
{
	// ...
	// Dont forget the Increment or Decrement operation
}
while (expression); // Dont forget ; (semicolon)

// ------------------------------------
// For
// ------------------------------------
for ( element_declaration_initialization; condition; increment_or_decrement )
{
	// ...
}

// ------------------------------------
// For-each (all variants)
// ------------------------------------

// For In (Cannot use Type Annotation)
// Give you access to the index in the collection/container, not the actual element
// Can also be used to iterate over the properties of an object (the object keys)
// The order is not guaranteed to be index related nor alphabetical.
for (let index in collection_container) { console.log(collection_container[index]); }
for (let key in myObject) { console.log(myObject[key]); }

// For Of (Cannot use Type Annotation)
// Give you access to the element in the collection/container, not the index
for (const element of collection_container) { /**/ }

// ForEach
// Is an array method, so it can only be used exclusively with arrays.
// There is also no way to stop or break a forEach loop.
myArray.forEach((element) => { /**/ }); // Check Collection Section for more related methods.
```

> More Info:
> - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
> - https://stackoverflow.com/questions/9329446/for-each-over-an-array-in-javascript/9329476#9329476
> - http://blog.niftysnippets.org/2010/11/myths-and-realities-of-forin.html

[Back to top](#top)

## Python

```Python
# ------------------------------------
# While
# ------------------------------------

# There are no "{ }", you need to use ":" and indentation
# You can have either spaces or tabs but not both mixed

# Example 1 - Classic
while expression:
	# ...

# Example 2 - One-line (Optional)
while expression: print('single statement example')

# Example 3 - Else (Optional)
while (expression): # ( ) are optional
	# ...
else: # "else" is optional
	# ...

# If the else statement is used with a while loop, the else statement is
# executed when the condition/expression becomes false.


# ------------------------------------
# do while
# ------------------------------------

# Not Available

# ------------------------------------
# For
# ------------------------------------

# classic For Not Available

# ------------------------------------
# For-each
# ------------------------------------

# Example 1
for element in sequence_collection_container:
	# ...

# Example 2 - One-line (Optional)
for element in range(stop_number): print(i) # will print from 0 to stop_number (not included)

# Example 3
for element in range(starting_number, stop_number):# will print from starting_number to stop_number (not included)
	# ...
# For more range() options, check official documentation


# Example 4 - element and index (enumerate returns a tuple)
for index, element in enumerate(sequence_collection_container):
	# ...

# Example 5 - element and index with start
for index, element in enumerate(sequence_collection_container, start=1): # default is 0
# [start=1], means that the index will start from 1 (and not 0)
	# ...

# Example 6 - range(len())
for index in range(len(sequence_collection_container)):
	print(index, sequence_collection_container[index])

# Example 7 - Else (Optional)
for element in sequence_collection_container:
	# ...
else:
	# ...

# The else clause executes after the loop completes normally.
# This means that the loop did not encounter a break statement.
```

> More Info:
> - https://www.w3schools.com/python/ref_func_range.asp

[Back to top](#top)
