# Type Inference (Also known as Implicit Type, Type Deduction, Placeholder Type Specifier)

- [C](#c)
- [C++ (Cpp)](#c-cpp)
- [C# (Csharp)](#c-csharp)
- [Java](#java)
- [Rust](#rust)
- [Go](#go)
- [Javascript](#javascript)
- [Typescript](#typescript)
- [Python](#python)

There is also a Generic Functions Sections and a Generic Class Section

## C

```C
// ------------------------------------
// Variables
// ------------------------------------

// Not Available


// ------------------------------------
// Return Value of Functions
// ------------------------------------

// Not Available
```

[Back to top](#top)

## C++ (Cpp)

```Cpp
// ------------------------------------
// Variables
// ------------------------------------

// Since C++11
auto variable = 12.5;
auto variable{4};
auto myVector{ 9, 7, 5, 3, 1 };

auto my_multi_array {{{1,2,3},{4,5,6},{7,8,9}}};
// Example without "auto":
std::array<std::array<std::int32_t, 3>, 3> my_multi_array {{{1,2,3},{4,5,6},{7,8,9}}};

auto myClassInstance = /* etc */;

// You can also use auto inside range for. Check Control Flow > Loop Section

// ------------------------------------
// Return Value of Functions
// ------------------------------------

// Since C++11

// Example without "auto":
std::array<std::array<std::int32_t, 3>, 3> my_multi_array_function()
{
	// ...
}

// Using "auto":
auto my_multi_array_function()
{
	// ...
}
```

[Back to top](#top)

## C# (Csharp)

```Cs
// ------------------------------------
// Variables
// ------------------------------------

// Using var - object property and methods on compile time
var variable = 12.4;
var variable = 4;
var variable = "string";
var myClassInstance = /* etc */;

// Using dynamic - object property and methods on run time
dynamic variable = 12.4;
dynamic variable = 4;
dynamic variable = "string";
dynamic myClassInstance = /* etc */;

// ------------------------------------
// Return Value of Functions
// ------------------------------------

// Using var
// Not Available

// Using dynamic
dynamic MyMethod()
{
    // ...
}
```

> More Info:
> - https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/reference-types
> - https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/types/using-type-dynamic

[Back to top](#top)

## Java

```Java
// ------------------------------------
// Variables
// ------------------------------------

// Since Java 10
var variable = 12.4;
var variable = 4;
var variable = "string";

var myMap = new HashMap<String, List<String>();

// Also possible:
Map<String, List<String>> myMap = new HashMap<String, List<String>>(); // Full
Map<String, List<String>> myMap = new HashMap<>(); // Short

// ------------------------------------
// Return Value of Functions
// ------------------------------------

// Not Available
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
// Unnecessary. Does not have types
```

[Back to top](#top)

## Typescript

```Typescript
// ------------------------------------
// Variables
// ------------------------------------

// Since TypeScript 3.0
// unknown
let variable: unknown = 12.4;
let variable: unknown = 4;
let variable: unknown = "string"

// any
// Don't use any as a type unless you are in the process of migrating a
// JavaScript project to TypeScript.
let variable: any = 12.4;
let variable: any = 4;
let variable: any = "string"

// unknown is the type-safe counterpart of any.
// Anything is assignable to unknown, but unknown isn't assignable to anything but
// itself and any without a type assertion or a control flow based narrowing.
// Likewise, no operations are permitted on an unknown without first asserting or
// narrowing to a more specific type.

// ------------------------------------
// Return Value of Functions
// ------------------------------------

// Just a normal function without return type annotation or with ": unknown"
```

> More Info:
> - https://www.typescriptlang.org/docs/handbook/basic-types.html#any
> - https://www.typescriptlang.org/docs/handbook/declaration-files/do-s-and-don-ts.html
> - https://mariusschulz.com/blog/the-unknown-type-in-typescript
> - https://stackoverflow.com/questions/51439843/unknown-vs-any

[Back to top](#top)

## Python

```Python
# Unnecessary. Does not have types

# But if the project use Type Hints Annotations (PEP 484 / Python 3.6+)
# You can specify "Any"

variable_name: Any = 10
```

> More Info:
> - https://www.python.org/dev/peps/pep-0484/#the-any-type
> - https://docs.python.org/3/library/typing.html
> - https://mypy.readthedocs.io/en/stable/cheat_sheet_py3.html
> - https://realpython.com/python-type-checking/

[Back to top](#top)
