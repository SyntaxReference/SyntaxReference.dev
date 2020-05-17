# Null

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
// NULL
// In C "NULL" It is defined to 0 by default
```

```C
// ------------------------------------
// Declaring nullable
// ------------------------------------

// Any pointer can have a NULL value
// For more about Pointers, check "Pointer & Reference" Section
int* myPointer = NULL;
int* myPointer = 0;

// Basic Types like int, float etc should not have null as value
```

```C
// ------------------------------------
// Working with nullable types
// ------------------------------------

// Optional Chaining Operator (?)
// Not available, you need to use a condition


// Nullish Coalescing Operator (??)
// Not available, you need to use a condition
```

> More Info:
> - https://stackoverflow.com/questions/1296843/what-is-the-difference-between-null-0-and-0

[Back to top](#top)

## C++ (Cpp)

```Cpp
// NULL
// In C++, "NULL" It is not defined by the language,
// It is defined to 0 by default

// Since C++ 11, "nullptr" is available and
// nullptr provides a typesafe pointer value representing an empty (null) pointer.
// Also, NULL is re-defined as nullptr

// However, nullptr is really a "null pointer" and always a pointer.
// If you try assigning it to integer. It will cause an error
```

```Cpp
// ------------------------------------
// Declaring nullable
// ------------------------------------

// Any pointer can have a nullptr value
// For more about Pointers, check "Pointer & Reference" Section
int* myPointer = nullptr;
int* myPointer = NULL;
int* myPointer = 0;

// Basic Types like int, float etc should not have null or nullptr as value
```

```Cpp
// ------------------------------------
// Working with nullable types
// ------------------------------------

// Optional Chaining Operator (?)
// Not available, you need to use a condition


// Nullish Coalescing Operator (??)
// Not available, you need to use a condition
```

> More Info:
> - https://embeddedartistry.com/blog/2017/03/08/migrating-from-c-to-c-null-vs-nullptr/
> - https://en.cppreference.com/w/cpp/types/NULL
> - https://en.cppreference.com/w/cpp/language/nullptr
> - https://stackoverflow.com/questions/16691207/c-c-nan-constant-literal

[Back to top](#top)

## C# (Csharp)

```Cs
// Since C# 8.0, its easy to work with null type.

// Option 1
// Open the Project File (.csproj) and change the <Nullable> property to "enable"
// <Nullable>enable</Nullable>

// Option 2
// Use the macro/directive "nullable" inside the file (For each file you want it changed)
// Everything bellow the macro/directive will be affected, you can write at the
// top of the file to affect all of it, or somewhere in the middle and so on

// Enable nullable
#nullable enable

// Disable nullable
#nullable disable

// Disable only warnings (there are other options aswell)
#nullable disable warnings
```

```Cs
// ------------------------------------
// Declaring nullable
// ------------------------------------

// Example from Official Announcement
public class Person
{
	public string FirstName { get; set; } // Can not be null
	public string? MiddleName { get; set; } // The "?" indicates that property can receive value null
	public string LastName { get; set; }

	public Person(string first, string last)
	{
		this.FirstName = first;
		this.MiddleName = null; // Since its a "string?" (with a ?) it can be null
		this.LastName = last;
	}
	// ...
}
```

```Cs
// ------------------------------------
// Working with nullable types
// ------------------------------------

// Optional Chaining Operator (?)
string dogName = adventurer.dog?.name; // Dog property can be null
string customerCity = customer.details?.address?.city;

// Nullish Coalescing Operator (??)
int middleNameLength = personInstance.MiddleName?.Length ?? 0;
// The code above is equivalent to:
/*
if (personInstance.MiddleName is null)
{
	return 0;
}
else
{
	return personInstance.MiddleName.Length;
}
*/
string example = null ?? "Hello"; 	// Hello
// If the condition before ?? is null, then the value after ?? is returned
// otherwise return the condition before ??
```

```Cs
// More Examples
int GetMiddleNameLength(Person? person) // person can be null
{
	if (person?.MiddleName is { }) { /**/ } // Easy way to check if "is not null"
	// The code above is equivalente to:
	// if ( ! (person?.MiddleName is null) ) { /**/ }

	// Also equivalent to the above example we have
	// "string.IsNullOrEmpty()"
	if(string.IsNullOfEmpty(person.MiddleName)) { /**/}

	// We can also create an Alias inside the if condition
	// Alias Example 1
	if (person?.MiddleName is { } myAlias)
	{
		return myAlias.Length;
	}

	// Alias Example 2
	if (person?.MiddleName is { Length: var myLengthAlias })
	{
		return myLengthAlias;
	}

	// All together with ternary operator
	return person?.MiddleName is { Length: var myLengthAlias } ? myLengthAlias : 0;
}
```

> More Info:
> - https://www.youtube.com/watch?v=TJiLhRPgyq4
> - https://docs.microsoft.com/en-us/dotnet/csharp/nullable-references

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
// In javascript we have "null" and "undefined"
// All variable declared without value receive "undefined"

// In Javascript we have:
// "Optional Chaining Operator" (?)
// "Nullish Coalescing Operator" (??)

// Since ES2020
/*
Chrome (and Chromium based) 80+
Firefox 72+
Opera 67+
Safari 13.1+
Node.js 14.0.0+
*/
```

```Javascript
// ------------------------------------
// Declaring nullable
// ------------------------------------

// Since Javascript doesnt have types, you dont need special declaration
```

```Javascript
// ------------------------------------
// Working with nullable types
// ------------------------------------

// Optional Chaining Operator (?)
const dogName = adventurer.dog?.name; // if dog is null, it returns "undefined"
let nestedProp = obj?.['prop' + 'Name'];
let arrayItem = arr?.[42];
let customerCity = customer.details?.address?.city

// Nullish Coalescing Operator (??)
const example = null ?? "Hello"; 	// Hello
const example = undefined ?? "Hi"; 	// Hi
const example = 0 ?? "Hello"; 		// 0
const example = false ?? "Hi"; 		// false

// If the condition before ?? is null, then the value after ?? is returned
// otherwise return the condition before ??

// If you want to dismiss falsy values, you can use the logical or operator (||).
// Null coalescing operator skips:	"null", "undefined"
// Logical or operator skips:		"null", "undefined", "false"
const example = false || "Hi";		// Hi

// More Example
const customerCity = customer?.city ?? "Unknown city";
const example = null ?? undefined ?? false ?? "Hello";		// false
const example = (null ?? undefined ?? false) || "Hello";	// Hello
```


> More Info:
> - https://scotch.io/tutorials/javascripts-null-coalescing-operator
> - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_operator
> - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining
> - https://dmitripavlutin.com/javascript-optional-chaining/

[Back to top](#top)

## Typescript

```Typescript
// Since Typescript 3.7 we have:
// "Optional Chaining Operator" (?)
// "Nullish Coalescing Operator" (??)
```

```Typescript
// ------------------------------------
// Declaring nullable
// ------------------------------------

// TODO
```

```Typescript
// ------------------------------------
// Working with nullable types
// ------------------------------------

// Optional Chaining Operator (?)
const dogName = adventurer.dog?.name; // if dog is null, it returns "undefined"
let nestedProp = obj?.['prop' + 'Name'];
let arrayItem = arr?.[42];
let customerCity = customer.details?.address?.city
function myFunction(myVariable?: string) => void //

// Nullish Coalescing Operator (??)
const example = null ?? "Hello"; 	// Hello
const example = undefined ?? "Hi"; 	// Hi
const example = 0 ?? "Hello"; 		// 0
const example = false ?? "Hi"; 		// false

// If the condition before ?? is null, then the value after ?? is returned
// otherwise return the condition before ??

// If you want to dismiss falsy values, you can use the logical or operator (||).
// Null coalescing operator skips:	"null", "undefined"
// Logical or operator skips:		"null", "undefined", "false"
const example = false || "Hi";		// Hi

// More Example
const customerCity = customer?.city ?? "Unknown city";
const example = null ?? undefined ?? false ?? "Hello";		// false
const example = (null ?? undefined ?? false) || "Hello";	// Hello
```

[Back to top](#top)

## Python

```Python
# Instead of null, Python has the "None" type
```

```Python
# ------------------------------------
# Declaring nullable
# ------------------------------------

# Since Python doesnt have types, you dont need special declaration
```

```Python
# ------------------------------------
# Working with nullable types
# ------------------------------------

# Optional Chaining Operator (?)
# Not available, you need to use a condition

# Example 1
my_variable = None

if my_variable is None:
	# ...
else:
	# ...

# Example 2
try:
	if my_variable is None: # The variable
		print('It is None')
except NameError:
	print ("This variable is not defined")
else:
	print ("It is defined and has a value")

# Nullish Coalescing Operator (??)
# Not available, you need to use a condition
```

> More Info:
> - https://realpython.com/null-in-python/
> - https://appdividend.com/2019/08/16/null-object-in-python-example-python-null-value-tutorial/
> - https://stackoverflow.com/questions/43934304/how-to-test-a-variable-is-null-in-python

[Back to top](#top)
