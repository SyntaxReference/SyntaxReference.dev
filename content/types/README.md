# Basic Types

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
// Integer
// ------------------------------------

#include <stdint.h> // Since C99
/*
To help with cross-platform portability, C99 defined a
set of fixed-width integers (in the stdint.h header)
that are guaranteed to have the same size on any architecture.
*/

int8_t variable_name_Signed = 10;		// Range: -128 to 127
uint8_t variable_name_Unsigned = 10;	// Range: 0 to 255
int16_t variable_name_Signed = 10;		// Range: -32,768 to 32,767
uint16_t variable_name_Unsigned = 10;	// Range: 0 to 65,535
int32_t variable_name_Signed = 10;		// Range: -2,147,483,648 to 2,147,483,647
uint32_t variable_name_Unsigned = 10;	// Range: 0 to 4,294,967,295
int64_t variable_name_Signed = 10;		// Range: -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
uint64_t variable_name_Unsigned = 10;	// Range: 0 to 18,446,744,073,709,551,615

// Const Declaration
const int16_t MY_CONSTANT = 30;

// Alternative (Classic)
int variable_name = 10; // Signed by default
unsigned int variable_name = 10;
short int variable_name = 10;
short variable_name = 10;
long int variable_name = 10;
long variable_name = 10;
long long int variable_name = 10;
long long variable_name = 10;
```

```C
// ------------------------------------
// Float & Double
// ------------------------------------

float variable_name = 10.5;
float variable_name = 10.5f;
float variable_name = 10.5F;

double variable_name = 10.5;

// Const Declaration
const float MY_CONSTANT = 12.2;
const float MY_CONSTANT = 12.2f;

const double MY_CONSTANT = 12.2;
```

```C
// ------------------------------------
// Character
// ------------------------------------

char variable_name = 'a'; // Single Quotes for characters
char variable_name = '\n';

// Const Declaration
const char MY_CONSTANT = '\n';
```

```C
// ------------------------------------
// Boolean
// ------------------------------------
#include <stdbool.h> // Since C99

bool variable = true; // true expands to 1
bool variable = false; // false expands to 0


// Old Way #1
#define TRUE 1
#define FALSE 0

// Main structure omitted
int variable = TRUE;
int variable = FALSE;

// Old Way #2
typedef enum {FALSE, TRUE} boolean;

// Main structure omitted
boolean variable = TRUE;
boolean variable = FALSE;
```

```C
// ------------------------------------
// Strings
// ------------------------------------

// For Strings, check the dedicated section
```

> More Info:
> - https://en.wikipedia.org/wiki/C_data_types
> - https://pubs.opengroup.org/onlinepubs/009695399/basedefs/stdint.h.html

[Back to top](#top)

## C++ (Cpp)

```Cpp
// Differents mode of initialization

// Copy
std::int32_t variable_name = 5;

// Direct
std::int32_t variable_name( 5 );

// Uniform Initialization (since C++11)
// Also known as Brace Initialization or List Initialization
std::int32_t variable_name{ 5 };
```

```Cpp
// ------------------------------------
// Integer
// ------------------------------------

#include <cstdint> // Since C++11

std::int8_t variable_name_Signed = 10;		// Range: -128 to 127
std::uint8_t variable_name_Unsigned = 10;	// Range: 0 to 255
std::int16_t variable_name_Signed = 10;		// Range: -32,768 to 32,767
std::uint16_t variable_name_Unsigned = 10;	// Range: 0 to 65,535
std::int32_t variable_name_Signed {10};		// Range: -2,147,483,648 to 2,147,483,647
std::uint32_t variable_name_Unsigned {10};	// Range: 0 to 4,294,967,295
std::int64_t variable_name_Signed {10};		// Range: -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
std::uint64_t variable_name_Unsigned {10};	// Range: 0 to 18,446,744,073,709,551,615

// Const Declaration
/*
Any variable that should not be modifiable after initialization
and whose initializer is not known at compile-time should be
declared as const.
*/
const std::int16_t MY_CONSTANT {30};
std::int16_t const MY_CONSTANT {30};

/*
Any variable that should not be modifiable after initialization
and whose initializer is known at compile-time should be
declared as constexpr.
*/
constexpr std::int16_t MY_CONSTANT {30}; // C++11


// Alternative (Classic)
int variable_name = 10; // Signed by default
unsigned int variable_name = 10;
short int variable_name = 10;
short variable_name = 10;
long int variable_name = 10;
long variable_name = 10;
long long int variable_name = 10;
long long variable_name = 10;
```

```Cpp
// ------------------------------------
// Float & Double
// ------------------------------------
float variable_name {10.5};
float variable_name {10.5f};
float variable_name {10.5F};
double variable_name {10.5};

// Const Declaration
/*
Any variable that should not be modifiable after initialization
and whose initializer is not known at compile-time should be
declared as const.
*/
const double MY_CONSTANT = {12.2};
double const MY_CONSTANT = {12.2};

/*
Any variable that should not be modifiable after initialization
and whose initializer is known at compile-time should be
declared as constexpr.
*/
constexpr float MY_CONSTANT = {12.2}; // C++11
```

```Cpp
// ------------------------------------
// Character
// ------------------------------------
char variable_name {'a'}; // Single Quotes for characters
char variable_name = '\n';

// Const Declaration
/*
Any variable that should not be modifiable after initialization
and whose initializer is not known at compile-time should be declared as const.
*/
const char MY_CONSTANT = '\n';
char const MY_CONSTANT = '\n';

/*
Any variable that should not be modifiable after initialization
and whose initializer is known at compile-time should be declared as constexpr.
*/
constexpr char MY_CONSTANT = '\n'; // C++11
```

```Cpp
// ------------------------------------
// Boolean
// ------------------------------------
bool variable = true;
bool variable = false;
```

```Cpp
// ------------------------------------
// Strings
// ------------------------------------

// For Strings, check the dedicated section
```

> More Info:
> - https://www.learncpp.com/cpp-tutorial/variable-assignment-and-initialization/
> - https://en.cppreference.com/w/cpp/types/integer
> - https://www.learncpp.com/cpp-tutorial/fixed-width-integers-and-size-t/
> - http://www.cplusplus.com/reference/cstdint/
> - https://www.learncpp.com/cpp-tutorial/const-constexpr-and-symbolic-constants/

[Back to top](#top)

## C# (Csharp)

```Cs
// Todo
```

```Cs
// ------------------------------------
// Strings
// ------------------------------------

// For Strings, check the dedicated section
```

[Back to top](#top)

## Java

```Java
// Todo
```

```Java
// ------------------------------------
// Strings
// ------------------------------------

// For Strings, check the dedicated section
```

[Back to top](#top)

## Rust

```Rust
// Todo
```

```Rust
// ------------------------------------
// Strings
// ------------------------------------

// For Strings, check the dedicated section
```

[Back to top](#top)

## Go

```Go
// Todo
```

```Go
// ------------------------------------
// Strings
// ------------------------------------

// For Strings, check the dedicated section
```

[Back to top](#top)

## Javascript

```Javascript
/* The let keyword was introduced to JavaScript in ES2015
and is now considered the standard because it’s safer than var.
Many common problems in JavaScript are alleviated by using let,
so you should use it instead of var whenever possible.
*/

// https://www.typescriptlang.org/docs/handbook/basic-types.html#a-note-about-let
```

```Javascript
// ------------------------------------
// Numerical
// ------------------------------------

// In Javascript, all numbers are floating point values.

let variableName = 10;
const variableName = 10;
const MY_CONSTANT = 10;
var variableName = 10; // Avoid "var"

let variableName = 10.2;
const variableName = 10.2;
const MY_CONSTANT = 10.2;

// A BigInt is created by appending n to the end of an integer
// or by calling the constructor.
let variableName = 10n;
/* The BigInt type is a numeric primitive in JavaScript
 that can represent integers with arbitrary precision.
 With BigInts, you can safely store and operate on large
 integers even beyond the safe integer limit for Numbers.
*/
```

```Javascript
// ------------------------------------
// Character
// ------------------------------------
let variableName = 'a';
let variableName = "a";
let variableName = "\n";
const variableName = "a";
const MY_CONSTANT = "a";
```

```Javascript
// ------------------------------------
// Boolean
// ------------------------------------
let variableName = true;
let variableName = false;

// You can also do some conversion
let variableName = Boolean(expression); // without the word "new"
```

```Javascript
// ------------------------------------
// Strings
// ------------------------------------

// For Strings, check the dedicated section
```

> More Info:
> - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures
> - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean

[Back to top](#top)

## Typescript

```Typescript
/* The let keyword was introduced to JavaScript in ES2015
and is now considered the standard because it’s safer than var.
Many common problems in JavaScript are alleviated by using let,
so you should use it instead of var whenever possible.
*/

// https://www.typescriptlang.org/docs/handbook/basic-types.html#a-note-about-let
```

```Typescript
// ------------------------------------
// Numerical
// ------------------------------------

// In Javascript, all numbers are floating point values.

let variableName: number = 10;
let variableName: any = 10;
const variableName: number = 10;
const MY_CONSTANT: number = 10;

let variableName: number = 10.2;
let variableName: any = 10.2;
const variableName: number = 10.2;
const MY_CONSTANT: number = 10.2;

let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;

/* The BigInt type is a numeric primitive in JavaScript
 that can represent integers with arbitrary precision.
 With BigInts, you can safely store and operate on large
 integers even beyond the safe integer limit for Numbers.
*/
let variableName: bigint = 10n;
let variableName: BigInt(10);
```

```Typescript
// ------------------------------------
// Character
// ------------------------------------
let variableName: string = 'a';
let variableName: string = "a";
let variableName: string = "\n";
const variableName: string = "a";
const MY_CONSTANT: string = "a";
```

```Typescript
// ------------------------------------
// Boolean
// ------------------------------------
let variableName: boolean = true;
let variableName: boolean = false;

// You can also do some conversion
let variableName = Boolean(expression); // without the word "new"
```

```Typescript
// ------------------------------------
// Strings
// ------------------------------------

// For Strings, check the dedicated section
```

> More Info:
> - https://www.typescriptlang.org/docs/handbook/basic-types.html#number
> - https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-2.html#bigint

[Back to top](#top)

## Python

```Python
# In Python if you declare a variable in a block scope (if statement, for statement, ...)
# the variable is hoisted to the outer function scope.
```

```Python
# ------------------------------------
# Integer
# ------------------------------------
variable_name = 10
MY_CONSTANT = 10

# Type Annotations (PEP 484 / Python 3.6+)
variable_name: int = 10
MY_CONSTANT: int = 10
```

```Python
# ------------------------------------
# Float & Double
# ------------------------------------
variable_name = 10.2
MY_CONSTANT = 10.2

# Type Annotations (PEP 484 / Python 3.6+)
variable_name: float = 10.2
MY_CONSTANT: float = 10.2
```

```Python
# ------------------------------------
# Character
# ------------------------------------
# You can use either single quotes or double
variable_name = "a"
MY_CONSTANT = 'a'

# Type Annotations (PEP 484 / Python 3.6+)
variable_name: str = 'a'
MY_CONSTANT: str = 'a'
```

```Python
# ------------------------------------
# Boolean
# ------------------------------------
variable = True # Must have an Upper Case first letter.
variable = False # Must have an Upper Case first letter.

# Type Annotations (PEP 484 / Python 3.6+)
variable: bool = True
```

```Python
# ------------------------------------
# Strings
# ------------------------------------

# For Strings, check the dedicated section
```

> More Info:
> - https://docs.python.org/3/library/typing.html
> - https://mypy.readthedocs.io/en/stable/cheat_sheet_py3.html
> - https://realpython.com/python-type-checking/

[Back to top](#top)
